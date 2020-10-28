const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const autoprefixer = require('autoprefixer');

const pathToApp = path.resolve(__dirname, 'src', 'app');
const pathToNodeModules = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: true,
  title: 'Coding-Test',
});

module.exports = {
  entry: {
    app: './src/index.jsx',
    styles: './src/styles/index.scss',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', 'jpg'],
    modules: [pathToApp, pathToNodeModules],
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractCssChunks.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: false,
                importLoaders: 1,
                localIdentName: '[sha1:hash:hex:4]',
              },
            },
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({ browsers: 'last 2 versions' }),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.(jpg)$/,
        use: [{
          loader: 'url-loader',
        }],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractCssChunks(),
  ],
  devServer: {
    compress: true,
    port: 5001,
  },
};
