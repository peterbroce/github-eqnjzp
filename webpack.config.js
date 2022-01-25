let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let loader = [MiniCssExtractPlugin.loader, 'css-loader'];

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.sass',
    }),
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].[hash].css',
      disable: false,
      allChunks: true,
    }),
  ],
  devServer: {
    hot: true,
    port: 3000,
    static: path.join(__dirname, 'dist'),
  },
};
