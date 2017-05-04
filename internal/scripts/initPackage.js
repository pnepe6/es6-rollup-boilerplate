/**
 * Run this script from the project directory with `npm run create $newPackageName`
 */

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const childProcess = require('child_process');
let packageName;

process.argv.forEach((val, index) => {
  if (index === 3) {
    packageName = val;
  }
});

if (!packageName) {
  throw new Error('You must specify a package name: `npm run create my-great-module`');
}

const packageJsonPath = path.join(__dirname, '../../package.json');

const packageJson = require(packageJsonPath);

/* eslint-disable no-shadow */
function initPackage(packageJson) {
  let pkgJson = packageJson;
  // Overwrite with new values
  pkgJson = Object.assign(packageJson, {
    name: packageName,
    description: `Insert ${packageName} description here`,
    version: '0.0.1',
    module: `dist/${packageName}.es.js`,
    'jsnext:main': `dist/${packageName}.es.js`,
    repository: {
      url: '',
    },
    keywords: '',
    author: '',
    license: 'UNLICENSED',
  });

  delete pkgJson.scripts.create;

  fs.writeFileSync(packageJsonPath, JSON.stringify(pkgJson, null, 2), { encoding: 'utf8' });
}
/* eslint-enable no-shadow */

/* eslint-disable no-console */
function cleanFolders() {
  const srcLocation = path.join(__dirname, '../../src');
  const gitLocation = path.join(__dirname, '../../.git');

  rimraf.sync(srcLocation);
  rimraf.sync(gitLocation);
  fs.mkdirSync(srcLocation);

  childProcess.exec('git init', (error, stdout) => {
    console.log(stdout);
  });
}

initPackage(packageJson);
console.log('Package.json initialized and script removed');

cleanFolders();
console.log('src cleaned and git reinitialized');
/* eslint-enable no-console */
process.exit();


// preparer changelog
// preparer le README.md avec tout ce qui faut (et le nom du projet!)
