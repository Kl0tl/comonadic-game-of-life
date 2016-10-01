const { resolve } = require('path');
const relative = filepath =>
  resolve(__dirname, filepath);

module.exports = {
  devtool: 'source-map',
  entry: relative('index.js'),
  output: {
    path: relative('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['modules', 'node_modules'],
  },
};
