const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: {
    vendor: ['superagent', 'react', 'react-dom'],
    app: './src/app.js',
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

