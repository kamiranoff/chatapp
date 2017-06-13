const path = require('path');

// use to extract css in its own file.
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js',
    publicPath: "/build/",
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        // loader is deprecated. See if updating possible.
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        }),
        test: /\.css$/,
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
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;