const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    
    let mainWindow = new BrowserWindow({
        backgroundColor: '#000A14',
        width: 800, 
        height: 600,
        minWidth: 700,
        minHeight: 345,
        darkTheme: true,
        icon: '/images/crypto.png'
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.webContents.on('will-navigate', (e, url) => {
        e.preventDefault();
    })

});