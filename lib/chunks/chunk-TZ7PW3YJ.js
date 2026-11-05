// src/host/home.ts
import { resolveDshHome } from "@deepseek-ai/dsh-home-paths";
function dshHome() {
  return resolveDshHome();
}

export {
  dshHome
};
