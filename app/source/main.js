const {
  app,
  BrowserWindow
} = require("electron");
const url = require("url");

var path = (__dirname, '..resources/html');

function newApp() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL(
    url.format({
      pathname: "path/index.html",
      slashes: true,
    })
  );
}

app.on("ready", newApp);