param([Parameter(Mandatory = $true)][string]$Root)
# 给当前用户补上工作区文件夹的完全控制（继承到子项），让官方沙箱第一次授权时
# 打得上 Low 标签。已有完全控制就什么都不做。输出一行 JSON。
$ErrorActionPreference = 'Stop'
$result = [ordered]@{ root = $Root; changed = $false; error = $null }
try {
  $sid = [System.Security.Principal.WindowsIdentity]::GetCurrent().User
  $dir = Get-Item -LiteralPath $Root -Force
  $acl = $dir.GetAccessControl('Access')
  $full = [System.Security.AccessControl.FileSystemRights]::FullControl
  $inherit = [System.Security.AccessControl.InheritanceFlags]'ContainerInherit, ObjectInherit'
  $has = $false
  foreach ($rule in $acl.GetAccessRules($true, $true, [System.Security.Principal.SecurityIdentifier])) {
    if ($rule.IdentityReference -eq $sid -and $rule.AccessControlType -eq 'Allow' `
        -and ($rule.FileSystemRights -band $full) -eq $full `
        -and ($rule.InheritanceFlags -band $inherit) -eq $inherit) { $has = $true; break }
  }
  if (-not $has) {
    $acl.AddAccessRule((New-Object System.Security.AccessControl.FileSystemAccessRule($sid, $full, $inherit, 'None', 'Allow')))
    $dir.SetAccessControl($acl)
    $result.changed = $true
  }
} catch {
  $result.error = $_.Exception.Message
}
$result | ConvertTo-Json -Compress
