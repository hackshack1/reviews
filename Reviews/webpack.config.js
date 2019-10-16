var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  },
  mode: "development"
 };