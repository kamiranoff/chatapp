const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDORS_LIBS = [
  'react',
  'react-redux',
  'redux',
  'redux-thunk',
  'socket.io-client',
];

// use to extract css in its own file.
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDORS_LIBS,
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manisfest'],
    }),
  ]
};

module.exports = config;