const path = require('path');

const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,

      }
    ]
  }
};

module.exports = config;