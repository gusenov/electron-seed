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

# [Шаг № 3](https://github.com/gusenov/electron-seed/commit/463752d26cc1de0e8690d38e1bbb2e7f5a9a21fa)

Создание файла [package.json](https://github.com/gusenov/electron-seed/blob/463752d26cc1de0e8690d38e1bbb2e7f5a9a21fa/package.json):

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

# Шаг № 4

Установка [Electron](https://electronjs.org/):

```bash
$ npm install electron --save-dev

> electron@4.0.0 postinstall /home/abbas/electron-seed/node_modules/electron
> node install.js

electron-seed@0.1.0 /home/abbas/electron-seed
└─┬ electron@4.0.0
  ├── @types/node@8.10.39
  ├─┬ electron-download@4.1.1
  │ ├─┬ debug@3.2.6
  │ │ └── ms@2.1.1
  │ ├── env-paths@1.0.0
  │ ├─┬ fs-extra@4.0.3
  │ │ ├── graceful-fs@4.1.15
  │ │ ├── jsonfile@4.0.0
  │ │ └── universalify@0.1.2
  │ ├── minimist@1.2.0
  │ ├─┬ nugget@2.0.1
  │ │ ├─┬ debug@2.6.9
  │ │ │ └── ms@2.0.0
  │ │ ├─┬ pretty-bytes@1.0.4
  │ │ │ ├── get-stdin@4.0.1
  │ │ │ └─┬ meow@3.7.0
  │ │ │   ├─┬ camelcase-keys@2.1.0
  │ │ │   │ └── camelcase@2.1.1
  │ │ │   ├── decamelize@1.2.0
  │ │ │   ├─┬ loud-rejection@1.6.0
  │ │ │   │ ├─┬ currently-unhandled@0.4.1
  │ │ │   │ │ └── array-find-index@1.0.2
  │ │ │   │ └── signal-exit@3.0.2
  │ │ │   ├── map-obj@1.0.1
  │ │ │   ├─┬ normalize-package-data@2.4.0
  │ │ │   │ ├── hosted-git-info@2.7.1
  │ │ │   │ ├─┬ is-builtin-module@1.0.0
  │ │ │   │ │ └── builtin-modules@1.1.1
  │ │ │   │ └─┬ validate-npm-package-license@3.0.4
  │ │ │   │   ├─┬ spdx-correct@3.1.0
  │ │ │   │   │ └── spdx-license-ids@3.0.3
  │ │ │   │   └─┬ spdx-expression-parse@3.0.0
  │ │ │   │     └── spdx-exceptions@2.2.0
  │ │ │   ├── object-assign@4.1.1
  │ │ │   ├─┬ read-pkg-up@1.0.1
  │ │ │   │ ├─┬ find-up@1.1.2
  │ │ │   │ │ ├── path-exists@2.1.0
  │ │ │   │ │ └─┬ pinkie-promise@2.0.1
  │ │ │   │ │   └── pinkie@2.0.4
  │ │ │   │ └─┬ read-pkg@1.1.0
  │ │ │   │   ├─┬ load-json-file@1.1.0
  │ │ │   │   │ ├─┬ parse-json@2.2.0
  │ │ │   │   │ │ └─┬ error-ex@1.3.2
  │ │ │   │   │ │   └── is-arrayish@0.2.1
  │ │ │   │   │ ├── pify@2.3.0
  │ │ │   │   │ └─┬ strip-bom@2.0.0
  │ │ │   │   │   └── is-utf8@0.2.1
  │ │ │   │   └── path-type@1.1.0
  │ │ │   ├─┬ redent@1.0.0
  │ │ │   │ ├─┬ indent-string@2.1.0
  │ │ │   │ │ └─┬ repeating@2.0.1
  │ │ │   │ │   └── is-finite@1.0.2
  │ │ │   │ └── strip-indent@1.0.1
  │ │ │   └── trim-newlines@1.0.0
  │ │ ├─┬ progress-stream@1.2.0
  │ │ │ ├── speedometer@0.1.4
  │ │ │ └─┬ through2@0.2.3
  │ │ │   ├─┬ readable-stream@1.1.14
  │ │ │   │ ├── isarray@0.0.1
  │ │ │   │ └── string_decoder@0.10.31
  │ │ │   └─┬ xtend@2.1.2
  │ │ │     └── object-keys@0.4.0
  │ │ ├─┬ request@2.88.0
  │ │ │ ├── aws-sign2@0.7.0
  │ │ │ ├── aws4@1.8.0
  │ │ │ ├── caseless@0.12.0
  │ │ │ ├─┬ combined-stream@1.0.7
  │ │ │ │ └── delayed-stream@1.0.0
  │ │ │ ├── extend@3.0.2
  │ │ │ ├── forever-agent@0.6.1
  │ │ │ ├─┬ form-data@2.3.3
  │ │ │ │ └── asynckit@0.4.0
  │ │ │ ├─┬ har-validator@5.1.3
  │ │ │ │ ├─┬ ajv@6.6.2
  │ │ │ │ │ ├── fast-deep-equal@2.0.1
  │ │ │ │ │ ├── fast-json-stable-stringify@2.0.0
  │ │ │ │ │ ├── json-schema-traverse@0.4.1
  │ │ │ │ │ └─┬ uri-js@4.2.2
  │ │ │ │ │   └── punycode@2.1.1
  │ │ │ │ └── har-schema@2.0.0
  │ │ │ ├─┬ http-signature@1.2.0
  │ │ │ │ ├── assert-plus@1.0.0
  │ │ │ │ ├─┬ jsprim@1.4.1
  │ │ │ │ │ ├── extsprintf@1.3.0
  │ │ │ │ │ ├── json-schema@0.2.3
  │ │ │ │ │ └── verror@1.10.0
  │ │ │ │ └─┬ sshpk@1.16.0
  │ │ │ │   ├── asn1@0.2.4
  │ │ │ │   ├── bcrypt-pbkdf@1.0.2
  │ │ │ │   ├── dashdash@1.14.1
  │ │ │ │   ├── ecc-jsbn@0.1.2
  │ │ │ │   ├── getpass@0.1.7
  │ │ │ │   ├── jsbn@0.1.1
  │ │ │ │   ├── safer-buffer@2.1.2
  │ │ │ │   └── tweetnacl@0.14.5
  │ │ │ ├── is-typedarray@1.0.0
  │ │ │ ├── isstream@0.1.2
  │ │ │ ├── json-stringify-safe@5.0.1
  │ │ │ ├─┬ mime-types@2.1.21
  │ │ │ │ └── mime-db@1.37.0
  │ │ │ ├── oauth-sign@0.9.0
  │ │ │ ├── performance-now@2.1.0
  │ │ │ ├── qs@6.5.2
  │ │ │ ├── safe-buffer@5.1.2
  │ │ │ ├─┬ tough-cookie@2.4.3
  │ │ │ │ ├── psl@1.1.31
  │ │ │ │ └── punycode@1.4.1
  │ │ │ ├── tunnel-agent@0.6.0
  │ │ │ └── uuid@3.3.2
  │ │ ├─┬ single-line-log@1.1.2
  │ │ │ └─┬ string-width@1.0.2
  │ │ │   ├── code-point-at@1.1.0
  │ │ │   ├─┬ is-fullwidth-code-point@1.0.0
  │ │ │   │ └── number-is-nan@1.0.1
  │ │ │   └─┬ strip-ansi@3.0.1
  │ │ │     └── ansi-regex@2.1.1
  │ │ └── throttleit@0.0.2
  │ ├── path-exists@3.0.0
  │ ├─┬ rc@1.2.8
  │ │ ├── deep-extend@0.6.0
  │ │ ├── ini@1.3.5
  │ │ └── strip-json-comments@2.0.1
  │ ├── semver@5.6.0
  │ └─┬ sumchecker@2.0.2
  │   └─┬ debug@2.6.9
  │     └── ms@2.0.0
  └─┬ extract-zip@1.6.7
    ├─┬ concat-stream@1.6.2
    │ ├── buffer-from@1.1.1
    │ ├── inherits@2.0.3
    │ ├─┬ readable-stream@2.3.6
    │ │ ├── core-util-is@1.0.2
    │ │ ├── isarray@1.0.0
    │ │ ├── process-nextick-args@2.0.0
    │ │ ├── string_decoder@1.1.1
    │ │ └── util-deprecate@1.0.2
    │ └── typedarray@0.0.6
    ├─┬ debug@2.6.9
    │ └── ms@2.0.0
    ├─┬ mkdirp@0.5.1
    │ └── minimist@0.0.8
    └─┬ yauzl@2.4.1
      └─┬ fd-slicer@1.0.1
        └── pend@1.2.0
```

Файл [package.json](package.json) после установки [Electron](https://electronjs.org/):

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
  "license": "MIT",
  "devDependencies": {
    "electron": "^4.0.0"
  }
}
```
