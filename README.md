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

# [Шаг № 4](https://github.com/gusenov/electron-seed/commit/8fe874100e7a1cb1bcc273ebbc9b0de697b7c710)

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

Файл [package.json](https://github.com/gusenov/electron-seed/blob/8fe874100e7a1cb1bcc273ebbc9b0de697b7c710/package.json) после установки [Electron](https://electronjs.org/):

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

# [Шаг № 5](https://github.com/gusenov/electron-seed/commit/5d59aabc393e3824d076593d08e91e08fb35aabd)

Установка [jspm](https://jspm.org/):

```bash
$ npm install jspm --save-dev

electron-seed@0.1.0 /home/abbas/electron-seed
├─┬ electron@4.0.0
│ ├─┬ electron-download@4.1.1
│ │ ├─┬ nugget@2.0.1
│ │ │ └─┬ debug@2.6.9
│ │ │   └── ms@2.0.0
│ │ └─┬ sumchecker@2.0.2
│ │   └─┬ debug@2.6.9
│ │     └── ms@2.0.0
│ └─┬ extract-zip@1.6.7
│   ├─┬ concat-stream@1.6.2
│   │ └─┬ readable-stream@2.3.6
│   │   └── isarray@1.0.0
│   └─┬ debug@2.6.9
│     └── ms@2.0.0
└─┬ jspm@0.16.53
  ├─┬ chalk@1.1.3
  │ ├── ansi-styles@2.2.1
  │ ├── escape-string-regexp@1.0.5
  │ ├── has-ansi@2.0.0
  │ └── supports-color@2.0.0
  ├── core-js@1.2.7
  ├─┬ glob@6.0.4
  │ ├─┬ inflight@1.0.6
  │ │ └── wrappy@1.0.2
  │ ├── once@1.4.0
  │ └── path-is-absolute@1.0.1
  ├─┬ jspm-github@0.13.20
  │ ├─┬ expand-tilde@1.2.2
  │ │ └── os-homedir@1.0.2
  │ ├── netrc@0.1.4
  │ ├─┬ tar@2.2.1
  │ │ ├── block-stream@0.0.9
  │ │ └── fstream@1.0.11
  │ └─┬ which@1.3.1
  │   └── isexe@2.0.0
  ├─┬ jspm-npm@0.26.14
  │ ├── buffer-peek-stream@1.0.1
  │ ├── glob@5.0.15
  │ ├─┬ resolve@1.9.0
  │ │ └── path-parse@1.0.6
  │ └── tar@1.0.3
  ├─┬ jspm-registry@0.4.4
  │ └── semver@4.3.6
  ├─┬ liftoff@2.5.0
  │ ├─┬ findup-sync@2.0.0
  │ │ ├── detect-file@1.0.0
  │ │ ├─┬ is-glob@3.1.0
  │ │ │ └── is-extglob@2.1.1
  │ │ ├─┬ micromatch@3.1.10
  │ │ │ ├── arr-diff@4.0.0
  │ │ │ ├── array-unique@0.3.2
  │ │ │ ├─┬ braces@2.3.2
  │ │ │ │ ├── arr-flatten@1.1.0
  │ │ │ │ ├─┬ extend-shallow@2.0.1
  │ │ │ │ │ └── is-extendable@0.1.1
  │ │ │ │ ├─┬ fill-range@4.0.0
  │ │ │ │ │ ├── extend-shallow@2.0.1
  │ │ │ │ │ ├── is-number@3.0.0
  │ │ │ │ │ ├── repeat-string@1.6.1
  │ │ │ │ │ └── to-regex-range@2.1.1
  │ │ │ │ ├── repeat-element@1.1.3
  │ │ │ │ ├─┬ snapdragon-node@2.1.1
  │ │ │ │ │ ├─┬ define-property@1.0.0
  │ │ │ │ │ │ └─┬ is-descriptor@1.0.2
  │ │ │ │ │ │   ├── is-accessor-descriptor@1.0.0
  │ │ │ │ │ │   ├── is-data-descriptor@1.0.0
  │ │ │ │ │ │   └── kind-of@6.0.2
  │ │ │ │ │ └── snapdragon-util@3.0.1
  │ │ │ │ └── split-string@3.1.0
  │ │ │ ├─┬ define-property@2.0.2
  │ │ │ │ └─┬ is-descriptor@1.0.2
  │ │ │ │   ├── is-accessor-descriptor@1.0.0
  │ │ │ │   ├── is-data-descriptor@1.0.0
  │ │ │ │   └── kind-of@6.0.2
  │ │ │ ├─┬ extend-shallow@3.0.2
  │ │ │ │ ├── assign-symbols@1.0.0
  │ │ │ │ └── is-extendable@1.0.1
  │ │ │ ├─┬ extglob@2.0.4
  │ │ │ │ ├─┬ define-property@1.0.0
  │ │ │ │ │ └─┬ is-descriptor@1.0.2
  │ │ │ │ │   ├── is-accessor-descriptor@1.0.0
  │ │ │ │ │   ├── is-data-descriptor@1.0.0
  │ │ │ │ │   └── kind-of@6.0.2
  │ │ │ │ ├─┬ expand-brackets@2.1.4
  │ │ │ │ │ ├─┬ debug@2.6.9
  │ │ │ │ │ │ └── ms@2.0.0
  │ │ │ │ │ ├── define-property@0.2.5
  │ │ │ │ │ ├── extend-shallow@2.0.1
  │ │ │ │ │ └── posix-character-classes@0.1.1
  │ │ │ │ └── extend-shallow@2.0.1
  │ │ │ ├── fragment-cache@0.2.1
  │ │ │ ├── kind-of@6.0.2
  │ │ │ ├─┬ nanomatch@1.2.13
  │ │ │ │ ├── is-windows@1.0.2
  │ │ │ │ └── kind-of@6.0.2
  │ │ │ ├─┬ regex-not@1.0.2
  │ │ │ │ └─┬ safe-regex@1.1.0
  │ │ │ │   └── ret@0.1.15
  │ │ │ ├─┬ snapdragon@0.8.2
  │ │ │ │ ├─┬ base@0.11.2
  │ │ │ │ │ ├─┬ cache-base@1.0.1
  │ │ │ │ │ │ ├─┬ collection-visit@1.0.0
  │ │ │ │ │ │ │ ├── map-visit@1.0.0
  │ │ │ │ │ │ │ └── object-visit@1.0.1
  │ │ │ │ │ │ ├── get-value@2.0.6
  │ │ │ │ │ │ ├─┬ has-value@1.0.0
  │ │ │ │ │ │ │ └─┬ has-values@1.0.0
  │ │ │ │ │ │ │   └── kind-of@4.0.0
  │ │ │ │ │ │ ├─┬ set-value@2.0.0
  │ │ │ │ │ │ │ └── extend-shallow@2.0.1
  │ │ │ │ │ │ ├── to-object-path@0.3.0
  │ │ │ │ │ │ ├─┬ union-value@1.0.0
  │ │ │ │ │ │ │ └─┬ set-value@0.4.3
  │ │ │ │ │ │ │   └── extend-shallow@2.0.1
  │ │ │ │ │ │ └─┬ unset-value@1.0.0
  │ │ │ │ │ │   └─┬ has-value@0.3.1
  │ │ │ │ │ │     ├── has-values@0.1.4
  │ │ │ │ │ │     └─┬ isobject@2.1.0
  │ │ │ │ │ │       └── isarray@1.0.0
  │ │ │ │ │ ├─┬ class-utils@0.3.6
  │ │ │ │ │ │ ├── arr-union@3.1.0
  │ │ │ │ │ │ ├── define-property@0.2.5
  │ │ │ │ │ │ └─┬ static-extend@0.1.2
  │ │ │ │ │ │   ├── define-property@0.2.5
  │ │ │ │ │ │   └─┬ object-copy@0.1.0
  │ │ │ │ │ │     ├── copy-descriptor@0.1.1
  │ │ │ │ │ │     └── define-property@0.2.5
  │ │ │ │ │ ├── component-emitter@1.2.1
  │ │ │ │ │ ├─┬ define-property@1.0.0
  │ │ │ │ │ │ └─┬ is-descriptor@1.0.2
  │ │ │ │ │ │   ├── is-accessor-descriptor@1.0.0
  │ │ │ │ │ │   ├── is-data-descriptor@1.0.0
  │ │ │ │ │ │   └── kind-of@6.0.2
  │ │ │ │ │ ├─┬ mixin-deep@1.3.1
  │ │ │ │ │ │ └── is-extendable@1.0.1
  │ │ │ │ │ └── pascalcase@0.1.1
  │ │ │ │ ├─┬ debug@2.6.9
  │ │ │ │ │ └── ms@2.0.0
  │ │ │ │ ├─┬ define-property@0.2.5
  │ │ │ │ │ └─┬ is-descriptor@0.1.6
  │ │ │ │ │   ├── is-accessor-descriptor@0.1.6
  │ │ │ │ │   ├── is-data-descriptor@0.1.4
  │ │ │ │ │   └── kind-of@5.1.0
  │ │ │ │ ├── extend-shallow@2.0.1
  │ │ │ │ ├─┬ source-map-resolve@0.5.2
  │ │ │ │ │ ├── atob@2.1.2
  │ │ │ │ │ ├── decode-uri-component@0.2.0
  │ │ │ │ │ ├── resolve-url@0.2.1
  │ │ │ │ │ ├── source-map-url@0.4.0
  │ │ │ │ │ └── urix@0.1.0
  │ │ │ │ └── use@3.1.1
  │ │ │ └── to-regex@3.0.2
  │ │ └─┬ resolve-dir@1.0.1
  │ │   ├── expand-tilde@2.0.2
  │ │   └─┬ global-modules@1.0.0
  │ │     └─┬ global-prefix@1.0.2
  │ │       └── expand-tilde@2.0.2
  │ ├─┬ fined@1.1.1
  │ │ ├─┬ expand-tilde@2.0.2
  │ │ │ └─┬ homedir-polyfill@1.0.1
  │ │ │   └── parse-passwd@1.0.0
  │ │ ├─┬ object.defaults@1.1.0
  │ │ │ ├── array-each@1.0.1
  │ │ │ └── array-slice@1.1.0
  │ │ ├── object.pick@1.3.0
  │ │ └─┬ parse-filepath@1.0.2
  │ │   ├─┬ is-absolute@1.0.0
  │ │   │ └─┬ is-relative@1.0.0
  │ │   │   └─┬ is-unc-path@1.0.0
  │ │   │     └── unc-path-regex@0.1.2
  │ │   ├── map-cache@0.2.2
  │ │   └─┬ path-root@0.1.1
  │ │     └── path-root-regex@0.1.2
  │ ├── flagged-respawn@1.0.1
  │ ├─┬ is-plain-object@2.0.4
  │ │ └── isobject@3.0.1
  │ ├─┬ object.map@1.0.1
  │ │ ├─┬ for-own@1.0.0
  │ │ │ └── for-in@1.0.2
  │ │ └─┬ make-iterator@1.0.1
  │ │   └── kind-of@6.0.2
  │ └── rechoir@0.6.2
  ├─┬ minimatch@3.0.4
  │ └─┬ brace-expansion@1.1.11
  │   ├── balanced-match@1.0.0
  │   └── concat-map@0.0.1
  ├── ncp@2.0.0
  ├─┬ proper-lockfile@1.2.0
  │ ├── err-code@1.1.2
  │ └── retry@0.10.1
  ├─┬ rimraf@2.6.2
  │ └─┬ glob@7.1.3
  │   └── fs.realpath@1.0.0
  ├── rsvp@3.6.2
  ├─┬ systemjs@0.19.46
  │ └── when@3.7.8
  ├─┬ systemjs-builder@0.15.36
  │ ├─┬ babel-core@6.26.3
  │ │ ├─┬ babel-code-frame@6.26.0
  │ │ │ ├── esutils@2.0.2
  │ │ │ └── js-tokens@3.0.2
  │ │ ├─┬ babel-generator@6.26.1
  │ │ │ ├── detect-indent@4.0.0
  │ │ │ ├── jsesc@1.3.0
  │ │ │ └── trim-right@1.0.1
  │ │ ├── babel-helpers@6.24.1
  │ │ ├── babel-messages@6.23.0
  │ │ ├─┬ babel-register@6.26.0
  │ │ │ ├── core-js@2.6.1
  │ │ │ └─┬ home-or-tmp@2.0.0
  │ │ │   └── os-tmpdir@1.0.2
  │ │ ├─┬ babel-runtime@6.26.0
  │ │ │ ├── core-js@2.6.1
  │ │ │ └── regenerator-runtime@0.11.1
  │ │ ├── babel-template@6.26.0
  │ │ ├─┬ babel-traverse@6.26.0
  │ │ │ ├─┬ debug@2.6.9
  │ │ │ │ └── ms@2.0.0
  │ │ │ ├── globals@9.18.0
  │ │ │ └─┬ invariant@2.2.4
  │ │ │   └── loose-envify@1.4.0
  │ │ ├─┬ babel-types@6.26.0
  │ │ │ └── to-fast-properties@1.0.3
  │ │ ├── babylon@6.18.0
  │ │ ├── convert-source-map@1.6.0
  │ │ ├─┬ debug@2.6.9
  │ │ │ └── ms@2.0.0
  │ │ ├── json5@0.5.1
  │ │ ├── lodash@4.17.11
  │ │ ├── private@0.1.8
  │ │ └── slash@1.0.0
  │ ├── babel-plugin-transform-cjs-system-wrapper@0.3.0
  │ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.24.1
  │ │ └── babel-helper-hoist-variables@6.24.1
  │ ├── babel-plugin-transform-global-system-wrapper@0.0.1
  │ ├── babel-plugin-transform-system-register@0.0.1
  │ ├── bluebird@3.5.3
  │ ├── data-uri-to-buffer@0.0.4
  │ ├─┬ es6-template-strings@2.0.1
  │ │ ├─┬ es5-ext@0.10.46
  │ │ │ ├── es6-iterator@2.0.3
  │ │ │ ├── es6-symbol@3.1.1
  │ │ │ └── next-tick@1.0.0
  │ │ └─┬ esniff@1.1.0
  │ │   └── d@1.0.0
  │ ├── glob@7.1.3
  │ ├─┬ rollup@0.36.4
  │ │ └── source-map-support@0.4.18
  │ ├── source-map@0.5.7
  │ └─┬ uglify-js@2.7.5
  │   └── async@0.2.10
  ├─┬ traceur@0.0.105
  │ ├─┬ commander@2.9.0
  │ │ └── graceful-readlink@1.0.1
  │ ├── glob@5.0.15
  │ ├── semver@4.3.6
  │ └─┬ source-map-support@0.2.10
  │   └─┬ source-map@0.1.32
  │     └── amdefine@1.0.1
  └─┬ uglify-js@2.8.29
    ├── uglify-to-browserify@1.0.2
    └─┬ yargs@3.10.0
      ├── camelcase@1.2.1
      ├─┬ cliui@2.1.0
      │ ├─┬ center-align@0.1.3
      │ │ ├─┬ align-text@0.1.4
      │ │ │ ├─┬ kind-of@3.2.2
      │ │ │ │ └── is-buffer@1.1.6
      │ │ │ └── longest@1.0.1
      │ │ └── lazy-cache@1.0.4
      │ ├── right-align@0.1.3
      │ └── wordwrap@0.0.2
      └── window-size@0.1.0
```

Файл [package.json](https://github.com/gusenov/electron-seed/blob/5d59aabc393e3824d076593d08e91e08fb35aabd/package.json) после установки [jspm](https://jspm.org/):

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
    "electron": "^4.0.0",
    "jspm": "^0.16.53"
  }
}
```

# Шаг № 6

Инициализация [jspm](https://jspm.org/):

```bash
./node_modules/.bin/jspm init
```

```text
Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:
Enter server baseURL (public folder path) [./]:
Enter jspm packages folder [./jspm_packages]:
Enter config file path [./config.js]:
Configuration file config.js doesn't exist, create it? [yes]:
Enter client baseURL (public folder URL) [/]:
Do you wish to use a transpiler? [yes]:
Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]:
ok   Verified package.json at package.json
     Verified config file at config.js
     Looking up loader files...
       system.js
       system.src.js
       system.js.map
       system-csp-production.js
       system-csp-production.js.map
       system-polyfills.js
       system-csp-production.src.js
       system-polyfills.js.map
       system-polyfills.src.js

     Using loader versions:
       systemjs@0.19.46
     Looking up npm:babel-core
     Looking up npm:babel-runtime
     Looking up npm:core-js
     Creating registry cache...
     Downloading npm:core-js@1.2.7
     Downloading npm:babel-runtime@5.8.38
     Downloading npm:babel-core@5.8.38
     Looking up github:jspm/nodelibs-process
ok   Installed babel as npm:babel-core@^5.8.24 (5.8.38)
     Downloading github:jspm/nodelibs-process@0.1.2
     Looking up npm:process
     Downloading npm:process@0.11.10
     Looking up github:jspm/nodelibs-path
     Looking up github:jspm/nodelibs-fs
     Looking up github:systemjs/plugin-json
ok   Installed npm:process@^0.11.0 (0.11.10)
ok   Installed github:jspm/nodelibs-process@^0.1.0 (0.1.2)
     Looking up github:jspm/nodelibs-vm
     Downloading github:systemjs/plugin-json@0.1.2
     Downloading github:jspm/nodelibs-path@0.1.0
     Downloading github:jspm/nodelibs-fs@0.1.2
     Looking up github:jspm/nodelibs-assert
     Looking up npm:path-browserify
     Downloading github:jspm/nodelibs-vm@0.1.0
     Downloading github:jspm/nodelibs-assert@0.1.0
     Downloading npm:path-browserify@0.0.0
ok   Installed npm:path-browserify@0.0.0 (0.0.0)
     Looking up npm:vm-browserify
     Looking up npm:assert
     Downloading npm:assert@1.4.1
     Looking up npm:util
ok   Installed github:jspm/nodelibs-fs@^0.1.0 (0.1.2)
ok   Installed github:systemjs/plugin-json@^0.1.0 (0.1.2)
ok   Installed github:jspm/nodelibs-path@^0.1.0 (0.1.0)
     Downloading npm:vm-browserify@0.0.4
     Looking up npm:indexof
     Downloading npm:util@0.10.3
     Looking up npm:inherits
ok   Installed npm:assert@^1.3.0 (1.4.1)
     Downloading npm:indexof@0.0.1
     Downloading npm:inherits@2.0.1
ok   Installed npm:vm-browserify@0.0.4 (0.0.4)
ok   Installed npm:util@0.10.3 (0.10.3)
ok   Installed github:jspm/nodelibs-vm@^0.1.0 (0.1.0)
ok   Installed github:jspm/nodelibs-assert@^0.1.0 (0.1.0)
ok   Installed npm:indexof@0.0.1 (0.0.1)
ok   Installed npm:inherits@2.0.1 (2.0.1)
     Looking up github:jspm/nodelibs-util
     Downloading github:jspm/nodelibs-util@0.1.0
ok   Installed github:jspm/nodelibs-util@^0.1.0 (0.1.0)
     Looking up github:jspm/nodelibs-buffer
     Downloading github:jspm/nodelibs-buffer@0.1.1
     Looking up npm:buffer
     Downloading npm:buffer@5.2.1
     Looking up npm:base64-js
     Looking up npm:ieee754
     Downloading npm:base64-js@1.3.0
ok   Installed github:jspm/nodelibs-buffer@^0.1.0 (0.1.1)
     Downloading npm:ieee754@1.1.12
ok   Installed npm:buffer@^5.0.6 (5.2.1)
ok   Installed npm:base64-js@^1.0.2 (1.3.0)
ok   Installed npm:ieee754@^1.1.4 (1.1.12)
ok   Installed babel-runtime as npm:babel-runtime@^5.8.24 (5.8.38)
ok   Installed core-js as npm:core-js@^1.1.4 (1.2.7)

     The following new package versions were substituted by install deduping:

       util 0.10.4 -> 0.10.3

ok   Loader files downloaded successfully
```

Файл [package.json](package.json) после инициализации [jspm](https://jspm.org/):

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
    "electron": "^4.0.0",
    "jspm": "^0.16.53"
  },
  "jspm": {
    "devDependencies": {
      "babel": "npm:babel-core@^5.8.24",
      "babel-runtime": "npm:babel-runtime@^5.8.24",
      "core-js": "npm:core-js@^1.1.4"
    }
  }
}
```

Файл [config.js](config.js) после инициализации [jspm](https://jspm.org/):

```js
System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
```
