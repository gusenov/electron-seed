const { app, BrowserWindow } = require('electron')

// Глобальная ссылка для удержания объекта окна, иначе окно автоматически закроется,
// когда JavaScript-объект утилизируется сборщиком мусора:
let win

function createWindow () {
  // Создать окно браузера:
  win = new BrowserWindow({ width: 800, height: 600 })

  // Загрузить index.html в созданное окно браузера:
  win.loadFile('index.html')

  // Открыть DevTools:
  win.webContents.openDevTools()

  // Обработчик закрытия окна браузера:
  win.on('closed', () => {
    // Если приложение поддерживает несколько окон, то нужно хранить их в массиве.
    // Здесь же нужно удалять соответствующие элементы:

    // Удаление ссылки на объект окна:
    win = null
  })
}

// Этот метод будет вызван после того как Electron завершит инициализацию
// и будет готов создать окна браузера
// (некоторые API могут использоваться только после того как произойдёт это событие):
app.on('ready', createWindow)

// Выйти, когда все окна закрылись:
app.on('window-all-closed', () => {
  // На macOS приложение и его меню должно оставаться активным
  // до тех пор пока пользователь не выйдет из приложения явно нажатием Cmd + Q:
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // На macOS нужно пересоздавать окно приложения,
  // когда нажат значок приложения на панели и нет других открытых окон:
  if (win === null) {
    createWindow()
  }
})

// В этот файл можно включить оставшуюся часть кода приложения,
// который должен выполняться в единственном главном процессе. 
// Можно также разместить его в отдельных файлах, а здесь запросить.