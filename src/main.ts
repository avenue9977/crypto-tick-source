import {app, BrowserWindow} from 'electron'
import * as path from "path";

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        backgroundColor: '#000A14',
        width: 1000,
        height: 800,
        minWidth: 700,
        minHeight: 650,
        resizable: false,
        darkTheme: true,
        icon: '../assets/app-icon.png',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('src/index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS, it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
