import { app, protocol } from "electron";
import { installVueDevtools } from "vue-cli-plugin-electron-builder/lib";
import createWindow from "./utils/createWindow";
import config from "./config";

protocol.registerStandardSchemes(["app"], { secure: true });

app.on("ready", async () => {
  if (config.isDevelopment) {
    // 安装开发工具
    await installVueDevtools();
  }
  createWindow({ width: 400, height: 550 });
});
