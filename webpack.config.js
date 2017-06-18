const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './public/send.js',

  output: {
    path: path.resolve('./public/js'),
    filename: 'bundle.js'
  },

  // devtool: '#cheap-module-source-map',

  // module: {
  //   loaders: [
  //     {
  //       test: /\.js?$/,
  //       exclude: [/node_modules/],
  //       loader: "babel-loader",
  //       query: {
  //         presets: ['es2015', 'react', 'stage-0', 'stage-1']
  //       }
  //     },
  //   ]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('index.html'),
    })
  ],
}
