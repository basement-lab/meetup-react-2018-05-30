/* eslint-disable no-console */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const { blue, dim } = require('chalk');

const config = require('./webpack.config');

const {
  NODE_ENV,
  // HOST = "localhost",
  HOST = '0.0.0.0',
  PORT = 3000,
} = process.env;

const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    // quiet: true,

    clientLogLevel:
      'none' /* 'none' | 'warning' | 'error' | 'info' (default) */,
    compress: true,
    // historyApiFallback: true,
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    stats: {
      assets: true,
      children: true /* (default: false) */,
      chunks: false,
      colors: true,
      env: true,
      entrypoints: true,
      errors: false,
      modules: false,
      performance: true,
      publicPath: true /* (default: false) */,
      source: true,
      warnings: false,
    },
  }),
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () =>
  console.log(
    `${blue('WEB-SERVER')}:`,
    dim('is serving to'),
    blue(`${HOST}:${PORT}`),
    dim(`(NODE_ENV:${NODE_ENV})`),
  ),
);
