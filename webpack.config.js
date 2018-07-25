const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'output.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    rules: [
      // { test: /\.css$/,
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "css-loader" }
      //   ]
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: "babel-loader"
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};

