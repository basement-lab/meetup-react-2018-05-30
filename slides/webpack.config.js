const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const ASSETS_DIR = path.join(__dirname, 'assets');
const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index',
  ],

  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader', options: { gfm: false } },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000, mimetype: 'image/svg+xml' },
          },
        ],
        include: ASSETS_DIR,
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'image/png' },
          },
        ],
        include: ASSETS_DIR,
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'image/gif' },
          },
        ],
        include: ASSETS_DIR,
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'image/jpg' },
          },
        ],
        include: ASSETS_DIR,
      },
    ],
  },
};
