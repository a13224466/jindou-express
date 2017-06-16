var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './public/javascripts/main.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader']
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
  // module: {
  //   rules: [{
  //     test: /.jsx?$/,
  //     include: [
  //       path.resolve(__dirname, 'app')
  //     ],
  //     exclude: [
  //       path.resolve(__dirname, 'node_modules'),
  //       path.resolve(__dirname, 'bower_components')
  //     ],
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ['es2015']
  //     }
  //   }]
  // },
  // resolve: {
  //   extensions: ['.json', '.js', '.jsx', '.css']
  // },
  // devtool: 'source-map'
};