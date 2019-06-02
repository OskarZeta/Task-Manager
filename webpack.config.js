const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    }, {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: "react-svg-loader"
        }
      ]
    }]
  },
  devServer: {
    contentBase: './public',
    publicPath: '/assets/js',
    compress: true,
    stats: 'errors-only',
    port: 3000
  },
  devtool: 'source-map'
};
