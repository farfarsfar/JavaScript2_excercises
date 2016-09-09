var path    = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: "webpackbundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loaders: ['jshint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      { test: /\.css$/, loader: "style!css", exclude: /node_modules/ },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets:  ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html'})


  ]
};
