const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL(
    url.format({
      pathname: "../resources/html/index.html",
      slashes: true,
    })
  );
}

app.on("ready", newApp);
