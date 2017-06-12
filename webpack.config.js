const path = require('path');


console.log(path.resolve(__dirname + 'build'));
const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js'
  }
};

module.exports = config;