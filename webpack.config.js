const { resolve } = require('path');
const relative = filepath =>
  resolve(__dirname, filepath);

module.exports = {
  devtool: 'source-map',
  entry: ['babel-regenerator-runtime', relative('index.js')],
  output: {
    path: relative('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['modules', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
};
