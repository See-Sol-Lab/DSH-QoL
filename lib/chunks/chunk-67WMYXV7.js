// src/host/home.ts
import { defaultDshHome } from "@deepseek-ai/dsh-home-paths";
function dshHome() {
  const home = process.env.DSH_HOME;
  return home === void 0 || home === "" ? defaultDshHome() : home;
}

export {
  dshHome
};
