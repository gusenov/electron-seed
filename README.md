# Шаг № 1

Установка [npm](https://www.npmjs.com/) и [Node.js](https://nodejs.org/en/):

```bash
$ sudo apt-get install npm
$ sudo apt-get install nodejs-legacy
```

# [Шаг № 2](https://github.com/gusenov/electron-seed/commit/b25052462dd10819b8be61c4ae13a35338dd70e7)

Загрузка [.gitignore для Node.js](https://github.com/github/gitignore/blob/master/Node.gitignore):

```bash
$ wget https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -O .gitignore
```

# Шаг № 3

Создание файла [package.json](package.json):

```json
{
  "name": "electron-seed",
  "description": "Seed project for electron apps.",
  "version": "0.1.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gusenov/electron-seed.git"
  },
  "homepage": "https://github.com/gusenov/electron-seed#readme",
  "license": "MIT"
}
```
