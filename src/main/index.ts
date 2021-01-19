import * as path from "path";
import { app, BrowserWindow, ipcMain } from "electron";
import "source-map-support/register";
import { DIAGONAL_LENGTH, ELECTRON_IPC_CHANNEL_CLOSE } from "../constants";

app.whenReady().then(() => {
  const window = new BrowserWindow({
    alwaysOnTop: true,
    center: true,
    frame: false,
    fullscreenable: false,
    hasShadow: false,
    height: DIAGONAL_LENGTH,
    maximizable: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
    width: DIAGONAL_LENGTH,
  });

  ipcMain.on(ELECTRON_IPC_CHANNEL_CLOSE, () => {
    window.close();
  });

  window.hide();
  window.loadFile(path.resolve(__dirname, "renderer.html"));
  window.setMenu(null);
  window.show();
});
