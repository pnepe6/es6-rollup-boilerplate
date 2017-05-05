# Docs

Adaptive UMD module boilerplate with multi core level applying cascade's update logic. Quickly begin your small to large modules collection in JS until React.

### Index

 * [Module upgrade philosophy](#module-upgrade-philosophy)
 * [Quick-start](#quick-start)
 * [Changelog](#changelog)
 * [Module declination](#module-declination)
 * [Developers](#developers)
 * [Bring up to date](#bring-up-to-date)



### Module upgrade philosophy

Because npm projects use many dependencies in each project, manage dependency can be tricky and should be done in a single place.

We decided to keep the master branch as the TOP branch. It gets all the upgrade. This means master will be always the first to get the upgrade.

Every module with extra dependencies (react, ...) are declined in branches and use the same tag number. These branch will upgrade their dependencies after the master.

Project levels:
   - level 0: core module boilerplate (Rollup UMD bundler and Babel CJS/ES transpiler)
   - level 1: core TDD extend (Eslint and Jest)
   - level 2: core framework extend (React)
   - level 3: core library extend (Bootstrap-styled)

### Quick start

Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
   
Init project : it will initialize `package.json` with default values and remove `.git` folder.

    npm run create my-awesome-module-collection
    
Add new remote to your project
    
    git remote add branch your-upstream
    

### Changelog overview

All notable changes to this project will be documented in CHANGELOG.md.

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/70f06bf703751ebc2e6f4ebcd8e8162c51c13412">view commit &bull;</a><code>[2017-05-05 19:07:52 +0700]</code> adrien.gadaud : Update changelog in readme</li>

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/9c758c525f9b16ca5dc00eace779df523fe14bac">view commit &bull;</a><code>[2017-05-05 19:06:02 +0700]</code> adrien.gadaud : Update changelog in readme$</li>

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/cdb0ab19c40090805ec2b3937ef0b1cc05d489ec">view commit &bull;</a><code>[2017-05-05 19:01:58 +0700]</code> adrien.gadaud : Add description, author and keywords in package.json</li>

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/74f935749038a1d90e27519862f3422a339bcfaf">view commit &bull;</a><code>[2017-05-05 18:53:21 +0700]</code> adrien.gadaud : Change repo url in package.json</li>

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/3e1c236b46ddf91f33ec06333824042573648d93">view commit &bull;</a><code>[2017-05-05 16:06:33 +0700]</code> adrien.gadaud : Update Readme for level 0 to level 2</li>

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/a3e2811f5083a0068827881bbd7ca4c833c85735">view commit &bull;</a><code>[2017-05-05 15:48:02 +0700]</code> adrien.gadaud : Add jest-cli to manage coverage, update package.json and sample test added</li>

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/0f8223732455020afd56b75df8f44af312f9bd94">view commit &bull;</a><code>[2017-05-05 14:07:53 +0700]</code> adrien.gadaud : Update README</li>

<li> <a href="https://module.kopaxgroup.com/agd/rollup-umd/commit/e69cb0a2606ea5690633dfff073a098072d349e7">view commit &bull;</a><code>[2017-05-05 14:06:56 +0700]</code> adrien.gadaud : Update screip initPackage and package.json</li>


### Module declination

#### Create a module declination

1. Create the module declination from a tagged version! 

    git checkout v1.0.0
    git checkout -b dev-react
    npm install --save-dev react
    
1. Add the peer dependency in your of `package.json`
1. Add and name it has an external in `rollup.config.js`
1. Add the declination explanation in `CHANGELOG.md` and `README.md`

    git add -A
    git commit -m "created declination with react"
    git push origin dev-react
    
1. Tag your module declination

    git tag v1.0.0-react
    git push --tags
    
#### Upgrading dependencies of an existing declination

Upgrade must be done on the master branch. If you need upgrade from a declination.
You must pull it from the master branch so you can get the shared dependency upgrade using a single commit.

_if you are on `v1.0.0-react` and you wan't the upgrade made in `v1.0.1`_:

    git checkout tags/v1.0.0-react
    git pull origin v1.0.1

You can upgrade the other dependencies of your module and tag a new version 

    git add -A
    git commit -m "upgrade dependency from v1.0.1"
    git push origin dev-react
    git tag v1.0.1-react
    git push --tags
    

### Developers

The developer should pay particular attention to the development and integration of a new module within a library. 

#### Commands

##### Start

Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
    
Init project : it will initialize `package.json` with default values and remove `.git` folder.
    
    npm run create my-awesome-module-collection
    
Add new remote to your project
    
    git remote add branch your-upstream
    
Install dependencies 

    npm install

##### Test

Test with eslint and jest

    npm run test
    
##### Build

Build the dist and lib folders

    npm run build
    
Generate readme page

1/ Install `node-bootstrap-readme-docs`:

    npm install -g readme-docs
    
2/ Readme generate build in your folder containing `README.md`, it will generate automaticaly a new `build` folder with exportable readme page in the same directory.

    readme-docs
    
3/ Export your page on dedicated github pages  


#### Configuration

##### Rollup configuration

Access rollup configuration in `rollup.config.js`

In order to manage `DEVELOPMENT` and `PRODUCTION` environment
, "targets" and "plugin" key are prepared in advance. 
The main configuration will mostly focus on "external" and "globals" keys, depending on project external dependencies. For more configuration option please refer to [wiki rollup](https://github.com/rollup/rollup/wiki).

- Level O + 1 - branch master and es6

````
export default {
      entry: 'src/index.js',
      moduleName: 'module-rollup',
      exports: 'named',
      targets,
      plugins,
}
````

- Level 2 - branch React

````
export default {
      entry: 'src/index.js',
      moduleName: 'module-rollup',
      external: [react],
      exports: 'named',
      targets,
      plugins,
      globals: {
        react: 'React',
      },
}
````

##### Babel configuration

Access babel configuration in `.babelrc`. Note babel is integrated with roll-up and need to be configured in `rollup.config.js`.

- Level O + 1 - branch master and es6

````
{
  "presets": [
    ["env", { "loose": true }]
  ],
  "plugins": [
    "add-module-exports",
    "transform-object-rest-spread",
    "transform-class-properties"
  ]
}
````

- Level 2 - branch react

````
{
    "presets": [
      [
        "env",
        {
          "es2015": {
            "modules": false
          }
        }
      ],
      "react",
      "stage-0"
    ],
    "env": {
      "production": {
        "only": [
          "app"
        ],
        "plugins": [
          "transform-react-remove-prop-types",
          "transform-react-constant-elements",
          "transform-react-inline-elements",
          "array-includes",
          "styled-components"
        ]
      },
      "test": {
        "plugins": [
          "transform-es2015-modules-commonjs",
          "dynamic-import-node"
        ]
      }
    }
  }
````

##### Eslint configuration

Configure eslint in `package.json`, take a look at different level configuration below before any change.

- level 0: no lint 
- level 1: 
    - parser: babel-eslint
    - extends: airbnb-base
    - env: 
        - browser
        - node
        - jest
        - es6
    - parserOptions: 
        - ecmaVersion: 6
        - sourceType: module
    - rules: 
        - arrow-parens
        - arrow-body-style
        - comma-dangle
    - import/
        - imports-first
        - newline-after-import
        - no-dynamic-require
        - no-extraneous-dependencies
        - no-named-as-default
        - no-unresolved
        - prefer-default-export
    - indent
    - max-len
    - newline-per-chained-call
    - no-confusing-arrow
    - no-console
    - no-use-before-define
    - prefer-template
    - class-methods-use-this
    - require-yield

- level 2 - branch react
    - extends: airbnb
    - plugins: 
        - react
        - jsx-a11y
    - parserOptions: 
        - ecmaFeatures: 
            - jsx
    - jsx-a11y/
        - aria-props
        - heading-has-content
        - href-no-hash
        - label-has-for
        - mouse-events-have-key-events
        - role-has-required-aria-props
        - role-supports-aria-props
    - react
        - forbid-prop-types
        - jsx-first-prop-new-line
        - jsx-filename-extension
        - jsx-no-target-blank
        - require-extension
        - self-closing-comp

##### Jest configuration

Configure jest in `package.json`, take a look at different level configuration below before any change.

- Level O - no jest
- Level 1 - branch tdd

````
"jest": {
    "roots": [
      "<rootDir>/src/"
    ],
    "testPathIgnorePatterns": [],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx}",
      "!src/**/*.test.{js,jsx}",
      "!src/index.js"
    ],
    "coverageThreshold": {
      "global": {
        "statements": 75,
        "branches": 50,
        "functions": 60,
        "lines": 60
      }
    },
    "moduleDirectories": [
      "node_modules",
      "src"
    ]
}
````

### Bring up to date

Find below a quick list of package.json dependencies you have to maintain in priority (not exhaustive list of package.json dependencies)


#### Main dev dependencies

- Level O - branch master
    Transpilation (Pay special attention to babel-cli and babel-core, also check other plugins babel and dependency regularly)
        - babel-cli
        - babel-core
        - babel-eslint
        - babel-loader
        - babel-plugin-add-module-exports
        - babel-plugin-external-helpers
        - babel-plugin-transform-class-properties
        - babel-plugin-transform-object-rest-spread
        - babel-plugin-transform-react-remove-prop-types
        - babel-preset-env
        - babel-preset-stage-0
    
    Bundle builder (Rollup is the core builder, please take note of any update concerning these dependencies)
        - rollup
        - rollup-plugin-babel
        - rollup-plugin-commonjs
        - rollup-plugin-inject
        - rollup-plugin-json
        - rollup-plugin-node-resolve
        - rollup-plugin-replace
        - rollup-plugin-uglify
        - rollup-plugin-visualizer
        
    Other
        - jsdom
        - rimraf
        
- Level 1 - branch tdd

    Linting & Testing (Enzyme, jest, lint and eslint are required according to the TDD process, regularly check their dependencies)
        - jest
        - jest-cli
        - lint-staged
        - pre-commit
        - eslint
        - eslint-plugin-import
        - eslint-config-airbnb-base

- Level 2 - branch react

    Transpilation
        - babel-plugin-react-intl
        - babel-plugin-react-transform
        - babel-plugin-transform-react-constant-elements
        - babel-plugin-transform-react-inline-elements
        - babel-plugin-transform-react-remove-prop-types
        - babel-preset-react
        - babel-preset-react-hmre
        - babel-preset-stage-2
        
    React
        - react
        - react-dom
        
    Linting & Testing
        - enzyme
        - eslint-plugin-jsx-a11y
        - eslint-plugin-react
        - react-addons-test-utils
        - eslint-config-airbnb
