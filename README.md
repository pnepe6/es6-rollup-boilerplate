# Docs
Adaptive UMD module boilerplate with multi core level applying cascade's update logic. Quickly begin your small to large modules collection in JS until React.


### Index
 * [Module documentation](#module-documentation)
 * [Changelog](#changelog)
 * [Quick start](#quick-start)
 * [Developers](#developers)
 * [Bring up to date](#bring-up-to-date)
 * [Extend module library](#extend-module-library)


### Module documentation

This module boilerplate let you focus on your code "level" and manage only the configuration and dependencies you need for your project. 
"Levels" are git branches made up of different core modules to manage the lifecycle of bundle/transpilation modules, from test-based development, from frameworks js to external libraries.


#### Git repository branch level
In addition to being preconfigurated, each branch/module are updated from the top level (0) until the last level which host your project. In this way each git repository recovers updates from previous level.
    - core Module boilerplate (level 0): Rollup (UMD bundler) and Babel (CJS/ES transpiler)
    - core TDD extend (level 1): Eslint, Jest
    - core Framework extend (level 2): React
    - core Library extend (level 3): Bootstrap-styled
    - core See [Extend module library](#extend-module-library) for add new level/branch

#### Common usage:
- level 0: Quick start any small js project
starter UMD/CJS/ES modules

- level 1: Quick start small to large js utils modules.
starter UMD/CJS/ES modules + TDD tools

- level 2: Quick start small to large modules framework addon, as component library for React
starter UMD/CJS/ES modules + TDD tools + react framework

- level 3: Quick start small to large specific modules collection as template for React
starter UMD/CJS/ES modules + TDD tools + React framework + External library (bootstrap-styled)


### Changelog
#### Added
- Support for jsdom and other browsers that do not implement [ownerNode](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/ownerNode), thanks to [@zvictor](https://github.com/zvictor)

#### Changed


### Quick start
Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
   
   
Init project : it will initialize package.json and reset git folder (note this command could only be used once and will be remove from the package.json script command list after use. For any needs please delete your empty proejct and restart git clone to set a new name)
    
    npm run create my-awesome-module-collection
    
Add new remote to your project
    
    git remote add branch your-upstream
    

### Developers
The developer should pay particular attention to the development and integration of a new module within a library. 

#### Commands

##### Start
Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git

Switch to branch origin : es6, tdd or react (default branch master)

    git checkout es6
    
Init project : it will initialize package.json and reset git folder (note this command could only be used once and will be remove from the package.json script command list after use. For any needs please delete your empty proejct and restart git clone to set a new name)
    
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
    
    
Generate Readme page

1/ Install Node Bootstrap Readme Docs:


    npm install -g readme-docs
    
2/ Generate Readme build in your folder containing Readme.md, it will generate automaticaly a new build folder with exportable readme page.


    readme-docs
    
3/ Export your page on dedicated github pages  


#### Configuration
##### Rollup configuration
Access rollup configuration in rollup.config.js/

In order to manage DEVELOPMENT and PRODUCTION environment, "targets" and "plugin" key are prepared in advance. The main configuration will mostly focus on "external" and "globals" keys, depending on project external dependencies. For more configuration option please refer to [wiki rollup](https://github.com/rollup/rollup/wiki).

- Level O + 1 - branch master and es6
````
export default {
      entry: 'src/index.js',
      moduleName: 'styled',
      exports: 'named',
      targets,
      plugins,
}
````

- Level 2 - branch React
````
export default {
      entry: 'src/index.js',
      moduleName: 'styled',
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
Access babel configuration in .babelrc. Note babel is integrated with roll-up and need to be configurated in rollup.config.js

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

- Level 2 - branch mreact
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
Configure eslint in package.json, take a look at different level configuration below before any change.

- level 1 - branch master and es6: 
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

- level 2 - branch react: (include level 0 + level 1)
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


### Bring up to date
Git structure of this module library allow to update main dependencies from master branch, these represent the major update each sub-project need to have in order to stay sustainable. Please refer to abstraction level list below before any update.

#### Main dev dependencies
Find below a quick list of package.json dependencies you have to maintain in priority (not exhaustive list of package.json dependencies)

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
    
    Linting & Testing (Enzyme, jest, lint and eslint are required according to the TDD process, regularly check their dependencies)
        - enzyme
        - jest
        - lint-staged
        - pre-commit
        - eslint
        - eslint-config-airbnb
        - eslint-config-airbnb-base
        - eslint-plugin-import

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
        
        
### Extend module library
Rollup is dedied to maintain and improve library where webpack are for build and improve standard and web application.
Different from the development of an application a library must be thought in order to provide working code to users.

Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
   

Create new branch
    
    git checkout -b branchName

Change key "name" in package.json then initialize it (add new name instead of last one in other key using "name" value)
    
    npm run create name

Add new remote to your project
    
    git remote add branch your-upstream
    
Install dependencies 

    npm install



### Troubleshoot

Need to retrieve create cmd ? Add this script command to package.json in "scripts" object.

    "create": "npm run build:clean && node ./internal/scripts/initPackage --",
