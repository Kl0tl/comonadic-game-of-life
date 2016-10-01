const { resolve } = require('path');
const relative = filepath =>
  resolve(__dirname, filepath);

module.exports = {
  entry: relative('index.js'),
  output: {
    path: relative('dist'),
    filename: 'bundle.js',
  },
};
