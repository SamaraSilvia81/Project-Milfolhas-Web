const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');
const jsPDF = require('jspdf');

let mainWindow;

function createWindow() {

  console.log('Iniciando o aplicativo Electron');

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: false, // Adicionado para desativar pop-up
    },
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'build', 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // Adiciona o ouvinte 'did-finish-load' para garantir que a janela esteja pronta
  mainWindow.webContents.once('did-finish-load', () => {
    // Envia a lista de impressoras assim que a janela estiver pronta
    const printers = mainWindow.webContents.getPrinters();
    console.log('Lista de Impressoras:', printers);
    mainWindow.webContents.send('detected-printers', printers);
  });

  ipcMain.on('print', (event, { pdfData }) => {
    // Lógica de impressão aqui
    const pdfWindow = new BrowserWindow({ show: false });
    pdfWindow.loadURL(pdfData);

    pdfWindow.webContents.on('did-finish-load', () => {
      pdfWindow.webContents.print({
        silent: true,
        printBackground: true,
        deviceName: 'YourPrinterName', // Substitua pelo nome da sua impressora
      }, (success, errorType) => {
        if (!success) {
          console.error('Erro de Impressão:', errorType);
          // Lidar com erros de impressão aqui, se necessário
        }
        pdfWindow.destroy();
        event.sender.send('print-complete');
      });
    });
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});