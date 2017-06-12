const path = require('path');

const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname + 'build'),
    filename: 'bundle.js'
  }
};

module.exports = config;