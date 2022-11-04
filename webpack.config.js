const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client', 'dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
