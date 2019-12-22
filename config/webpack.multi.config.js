const glob = require("glob");
const path = require('path');
const kebabCase = require('lodash/kebabCase');
const config = require('./webpack.base.config');

config.output = {
  path: path.resolve(__dirname, '../dist/lib'),
  publicPath: '/',
  filename: (options) => {
    const entryModule = options.chunk.entryModule
    const rawRequest = entryModule.rawRequest || entryModule.rootModule.rawRequest;
    return rawRequest
      .replace('./src', '')
      .replace('.jsx', '.js')
  },
  library: ['SemanticUIVue', '[name]'],
  libraryExport: 'default',
  libraryTarget: 'umd',
};

config.entry = glob.sync('./src/*/*/*.jsx').reduce((entry, file) => {
  entry[path.basename(file, '.jsx')] = file;
  return entry;
}, {});

module.exports = config;
