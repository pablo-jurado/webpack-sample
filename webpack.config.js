const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          presets: ['es2015'] 
        }
      },
    ],
  },
};
