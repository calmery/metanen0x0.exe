import * as path from "path";
import { app, BrowserWindow } from "electron";
import "source-map-support/register";
import { DIAGONAL_LENGTH } from "../constants";

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
    width: DIAGONAL_LENGTH,
  });

  window.hide();
  window.loadFile(path.resolve(__dirname, "renderer.html"));
  window.setMenu(null);
  window.show();
});
