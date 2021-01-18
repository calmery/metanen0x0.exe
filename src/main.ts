import * as path from "path";
import { app, BrowserWindow } from "electron";
import "source-map-support/register";

app.whenReady().then(() => {
  const window = new BrowserWindow({
    center: true,
    height: 600,
    resizable: false,
    width: 800,
  });

  window.hide();
  window.loadFile(path.resolve(__dirname, "index.html"));
  window.setAlwaysOnTop(true);
  window.setMenu(null);
  window.show();
});
