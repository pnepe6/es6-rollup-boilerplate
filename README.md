# Docs

ES6 and React module bundler with library collection of templates, components and utils with cascade updates.

### Index
 * [Module documentation](#module-documentation)
 * [Changelog](#changelog)
 * [Quick start](#quick-start)
 * [Developers](#developers)
 * [Bring up to date](#bring-up-to-date)
 * [Extend module library](#extend-module-library)


### Module documentation
- Module bundle system
ES6/React Bundler uses Babel for transpilation, RollUp for bundle and Eslint with Jest for Test driven development in order to build UMD defined modules.

- Library collection
Various collection of templates, components, utils and other elements required to build ES6 and JSX/React defined websites and web applications.

- Cascade updates
This module sample is constitued of different abstraction level adapted to build project from simple js project to ES6 defined or React defined project.
Updates are done in cascade process and let developers to only focus on his code dependencies update.

- Abstraction of development with git branches levels
    - origin master = level 0 (useful for initialize light project in es6)
    - origin es6 = level 1 (useful for start project in es6 with internal dependencies)
    - origin react = level 2 (useful for start project in react with 6s6 and jsx code with internal and external dependencies)
    - see [Extend module library](#extend-module-library) for add new level/branch

### Changelog
#### Added
- Support for jsdom and other browsers that do not implement [ownerNode](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/ownerNode), thanks to [@zvictor](https://github.com/zvictor)

#### Changed

- Migrated from the deprecated `React.PropTypes` to the `prop-types` package, thanks to [@YasserKaddour](https://github.com/YasserKaddour). (see [#668](https://github.com/styled-components/styled-components/pull/668))
- Add FlatList, SectionList & VirtualizedList support, thanks to @Kureev(https://github.com/Kureev). (see [#662](https://github.com/styled-components/styled-components/pull/662))
- Removed dependency on `glamor` and migrated remaining references to the internval vendored `glamor` module. (see [#663](https://github.com/styled-components/styled-components/pull/663))
- Fix missing autoprefixing on GlobalStyle model. (see [#702](https://github.com/styled-components/styled-components/pull/702))
- Better support for `keyframes` on older iOS/webkit browsers (see [#720](https://github.com/styled-components/styled-components/pull/720))

#### [v1.4.4] — 2017-03-01


### Quick start

Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
   
Initialize git config project (change ssh url if needed)

    rm -rf .git && git init && git remote add origin ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
    
Switch to branch origin : es6 or react (default branch master)

    git checkout es6
    
Initialize package.json (change key "name" value in package.json before use, it will add new name instead of last one in other key using "name" value)
    
    npm run create
    

### Developers
The developer should pay particular attention to the development and integration of a new module within a library. 

#### Start

Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git

Switch to branch origin : es6 or react (default branch master)

    git checkout es6
    
Initialize git config project (change ssh url if needed)

    rm -rf .git && git init && git remote add origin ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
    
Install dependencies 

    npm install


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

##### Eslint configuration
Configure eslint in package.json, take a look at different level configuration below before any change.

- level 0 + level 1 - branch master and es6: 
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

#### Test

Test with eslint and jest

    npm run test
    

#### Build

Build the dist and lib folders

    npm run build
    
    
Generate Readme page

1/ Install Node Bootstrap Readme Docs:


    npm install -g readme-docs
    
2/ Generate Readme build in your folder containing Readme.md, it will generate automaticaly a new build folder with exportable readme page.


    readme-docs
    
3/ Export your page on dedicated github pages  



### Bring up to date

Git structure of this module library allow to update main dependencies from master branch, these represent the major update each sub-project need to have in order to stay sustainable. Please refer to abstraction level list below before any update.

#### Level abstraction:
This module sample is constitued of different abstraction level. These level are adapted to different project application, from simple js project to ES6 defined or React defined project.
- level 0 : git branch master (init project)
- level 1 : git branch es6 (es6 code with internal dependencies)
- level 2 : git branch react (es6 and react jsx code with/without internal and external dependencies)

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

Create new branch
    
    git checkout -b branchName

Delete old git folder and init a new one

    rm -rf .git && git init 

Add your remote branch url to git config

    git remote add origin YourNewBranchUrl

Change key "name" in package.json then initialize it (add new name instead of last one in other key using "name" value)
    
    npm run create name



### Troubleshoot

Need to retrieve create cmd ? Add this script command to package.json in "scripts" object.

    "create": "npm run build:clean && node ./internal/scripts/initPackage --",
