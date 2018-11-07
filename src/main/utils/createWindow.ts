import { BrowserWindow, Menu, BrowserWindowConstructorOptions } from "electron";
import config from "../config";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";

export default function createWindow(option: BrowserWindowConstructorOptions) {
  // 隐藏菜单栏
  Menu.setApplicationMenu(null);
  // Create the browser window.
  const win = new BrowserWindow(option);
  if (config.isDevelopment) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadFile("index.html");
  }
  return win;
}
