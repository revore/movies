const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
// const pkg = require('./package.json');

module.exports = {
  entry: {
    // vendor: Object.keys(pkg.dependencies),
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'app.js'
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

