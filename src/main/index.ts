import * as path from "path";
import { app, BrowserWindow } from "electron";
import "source-map-support/register";

app.whenReady().then(() => {
  const window = new BrowserWindow({
    alwaysOnTop: true,
    center: true,
    frame: false,
    fullscreenable: false,
    hasShadow: false,
    height: 616,
    maximizable: false,
    resizable: false,
    transparent: true,
    width: 816,
  });

  window.hide();
  window.loadFile(path.resolve(__dirname, "renderer.html"));
  window.setMenu(null);
  window.show();
});
