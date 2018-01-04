const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname);

let win = null;
let translateWin = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
    translateWin = null;
  });

  ipcMain.on('translate', function(event, result) {
    translateWin = new BrowserWindow({width: 800, height: 400});    
    translateWin.loadURL(url.format({
      pathname: path.join(__dirname, 'src/translate.html'),
      protocol: 'file:',
      slashes: true
    }));

    translateWin.webContents.on('dom-ready', function() {
      translateWin.webContents.send('translate', result);
    });
  });

  ipcMain.on('translate:success', function(event, result) {
    if (translateWin !== null) {
      translateWin.close();
    }
    
    win.webContents.send('translate:success', result);
  });
});