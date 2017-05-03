# Docs

Module sample using Babel and RollUp. 
Library collection of various components, utils and other elements required to build ES6 to JSX defined websites and web applications.


### Index

 * [Changelog](#changelog)
 * [Developers](#developers)
 * [Bring up to date](#bring-up-to-date)
 * [Extend module library](#extend-module-library)

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

### Developers
The developer should pay particular attention to the development and integration of a new module within a library. 

#### Quick start

Clone project

    git clone git+ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
    

Initialize git config project (change ssh url if needed)

    rm -rf .git && git init && git remote add origin ssh://git@module.kopaxgroup.com:20024/agd/module-rollup.git
    
Initialize package.json (change key "name" value in package.json before use, it will add new name instead of last one in other key using "name" value)
    
    cd config
    node initJson.js
    

#### Main commands:

Install dependencies

    npm install

Build the dist and lib folders

    npm run build
    
Test with eslint and jest

    npm run test
    

#### Tool commands: 

Generate Readme page

1/ Install Node Bootstrap Readme Docs:


    npm install -g readme-docs
    
2/ Generate Readme build in your folder containing Readme.md, it will generate automaticaly a new build folder with exportable readme page.


    readme-docs
    
3/ Export your page on dedicated github pages  



### Bring up to date

Git structure of this module library allow to update main dependencies from master branch, these represent the major update each sub-project need to have in order to stay sustainable. Please refer to abstraction level list below before any update.

#### Level abstraction:
This module sample is constitued of different abstraction level
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

- Level 1 - branch es6
        
- Level 2 - branch react
    Transpilation 
        - babel-preset-react
        
    Linting & Testing
        - eslint-plugin-jsx-a11y
        
        
