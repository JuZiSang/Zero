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
  createWindow({ width: 1200, height: 800 });
});

// quit application when all windows are closed
app.on("window-all-closed", () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== "darwin") {
    app.quit();
  }
});
