const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV.trim();

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
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
        { loader: mode === 'development' ?
          'style-loader' : MiniCssExtractPlugin.loader },
        { loader: 'css-loader' }
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
