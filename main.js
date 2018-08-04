// Moduli per controllare la vita dell'applicazione e creare una finestra browser nativa
const {app, BrowserWindow} = require('electron')

// Mantieni un riferimento globale dell'oggetto window, se non lo fai, la finestra farà
// chiudere automaticamente quando l'oggetto JavaScript è "garbage collected".
let mainWindow

function createWindow () {
  // Crea la finestra del browser
  mainWindow = new BrowserWindow({width: 600, height: 400})

  // e carica index.html dell' app.
  mainWindow.loadFile('index.html')

  // Apre il DevTools.
  // mainWindow.webContents.openDevTools()

  // Emesso quando la finestra è chiusa.
  mainWindow.on('closed', function () {
    // Differenziare l'oggetto finestra, di solito si dovrebbero memorizzare le finestre
    // in un array se l'app supporta più finestre, questo è da fare
    // quando occorre eliminare l'elemento corrispondente.
    mainWindow = null
  })
}

// Questo metodo verrà chiamato alla chiusura di Electron
// l'inizializzazione ed è pronta per creare le finestre del browser.
// Alcune API possono essere utilizzate solo dopo che si verifica questo evento.
app.on('ready', createWindow)

// Esci quando tutte le finestre sono chiuse.
app.on('window-all-closed', function () {
  // Su OS X è comune per le applicazioni e la loro barra dei menu
  // rimane attivo fino a quando l'utente non si chiude esplicitamente con Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // Su OS X è normale ricreare una finestra nell'app quando il file
  // l'icona del dock viene cliccata e non ci sono altre finestre aperte.
  if (mainWindow === null) {
    createWindow()
  }
})

// In questo file puoi includere il resto del codice della procedura principale
// specifica della tua app. Puoi anche metterli in file separati e richiaramrli qui.
