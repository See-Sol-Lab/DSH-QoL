# DSH 生活质量包：撤掉官方沙箱留在一个工作区根目录上的三样东西。
#   1) 沙箱能力身份 S-1-4-<n>-<n> 的写入授权（官方的工作区 SID 形状）
#   2) Everyone 的拒绝条目（官方加的「禁止删除子项」）
#   3) Low 完整性标签 → 改回 Medium（普通程序的默认级别）
# 其他权限原样保留。只处理根目录上「显式」的这几样；子项都是继承来的，根改了就跟着变。
# 没有标记就什么都不做（不重算整棵目录树）。动手前先 icacls /save 备份根目录权限，
# 可用 `icacls <根目录的上一级> /restore <备份文件>` 还原。
# 方法来自 2026-09 清理 E:\Priest 的实测脚本；Windows PowerShell 5.1 与 7 都能跑。
# 输出一行 JSON 结果。
param(
  [Parameter(Mandatory = $true)][string]$Root,
  [Parameter(Mandatory = $true)][string]$Backup
)
$ErrorActionPreference = 'Stop'
$result = [ordered]@{ root = $Root; marked = $false; removedSids = @(); denyRemoved = 0; labelReset = $false; backup = $null; error = $null }
try {
  if (-not (Test-Path -LiteralPath $Root -PathType Container)) { throw "not a directory: $Root" }
  $dir = Get-Item -LiteralPath $Root
  $sections = [System.Security.AccessControl.AccessControlSections]::Access
  $hasMethod = $null -ne ($dir | Get-Member -Name GetAccessControl -MemberType Method)
  if ($hasMethod) { $acl = $dir.GetAccessControl('Access') }
  else { $acl = [System.IO.FileSystemAclExtensions]::GetAccessControl($dir, $sections) }

  $everyone = New-Object System.Security.Principal.SecurityIdentifier 'S-1-1-0'
  $explicit = @($acl.GetAccessRules($true, $false, [System.Security.Principal.SecurityIdentifier]))
  $sandboxSids = @($explicit | Where-Object { $_.AccessControlType -eq 'Allow' -and $_.IdentityReference.Value -match '^S-1-4-\d+-\d+$' } | ForEach-Object { $_.IdentityReference.Value } | Sort-Object -Unique)
  $denies = @($explicit | Where-Object { $_.AccessControlType -eq 'Deny' -and $_.IdentityReference -eq $everyone })
  # 根目录上显式的 Low 标签（继承来的会带 (I)，那是上级目录的事，不在这里改）。
  $lowLines = @(& icacls $Root | Where-Object { $_ -match 'Mandatory Label\\Low Mandatory Level' })
  $label = @($lowLines | Where-Object { $_ -notmatch '\(I\)' }).Count -gt 0

  if ($sandboxSids.Count -eq 0 -and $denies.Count -eq 0 -and -not $label) {
    $result.marked = $false
  } else {
    $result.marked = $true
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Backup) | Out-Null
    & icacls $Root /save $Backup /C | Out-Null
    $result.backup = $Backup
    if ($sandboxSids.Count -gt 0 -or $denies.Count -gt 0) {
      foreach ($sid in $sandboxSids) { $acl.PurgeAccessRules((New-Object System.Security.Principal.SecurityIdentifier $sid)) }
      foreach ($rule in $denies) { [void]$acl.RemoveAccessRuleSpecific($rule) }
      if ($hasMethod) { $dir.SetAccessControl($acl) }
      else { [System.IO.FileSystemAclExtensions]::SetAccessControl($dir, $acl) }
      $result.removedSids = $sandboxSids
      $result.denyRemoved = $denies.Count
    }
    if ($label) {
      & icacls $Root /setintegritylevel '(OI)(CI)M' /C /Q | Out-Null
      if ($LASTEXITCODE -ne 0) { throw "icacls setintegritylevel exited $LASTEXITCODE" }
      $result.labelReset = $true
    }
  }
} catch {
  $result.error = $_.Exception.Message
}
$result | ConvertTo-Json -Compress
