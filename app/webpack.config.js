const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const { NODE_ENV = 'development' } = process.env;

module.exports = env => ({
  bail: true,
  context: path.resolve(__dirname),
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src'),
  // entry: [
  mode: NODE_ENV,
  module: {
    strictExportPresence: true,
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: [{ loader: 'tslint-loader' }],
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: [{ loader: 'source-map-loader' }],
        exclude: [/node_modules/, /build/, /dist/, /out/, /test/],
      },
      {
        oneOf: [
          {
            test: /\.g(raph)?ql$/,
            use: [{ loader: 'graphql-tag/loader' }],
            exclude: /node_modules/,
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  onlyCompileBundledFiles: true,
                },
              },
              // { loader: 'stylelint-custom-processor-loader' },
              // { loader: 'eslint-loader' },
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                // options: {
                //   minimize: !!env.prod,
                //   removeComments: !!env.prod,
                // },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },
          {
            test: /\.(jpe?g|png|gif|svg|mp4|ico)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{ loader: 'file-loader' }],
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    filename: 'bundle.js',
    // filename: '[name].js',
    chunkFilename: 'chunk-[id].[name].js',
    sourceMapFilename: '[name].js.map',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      // favicon: path.resolve(__dirname, 'public/favicon.ico'),
      template: path.resolve(__dirname, 'public/index.html'),
    }),

    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),

    new ForkTsCheckerWebpackPlugin({
      async: false /* (default: true) */,
      checkSyntacticErrors: true,
      silent: true,
      // silent: false,
      watch: path.resolve(__dirname, 'src'),
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
    }),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      __DEBUG__: JSON.stringify(!!env.debug),
      __DEV__: JSON.stringify(!env.prod),
    }) /* SEE: https://webpack.js.org/plugins/define-plugin/#feature-flags */,

    new webpack.EnvironmentPlugin({
      HOST: '0.0.0.0',
      NODE_ENV,
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.graphql'],
    symlinks: false,
  } /* END: resolve */,
  serve: {
    content: path.join(__dirname, './public'),
    clipboard: false,
    logLevel: 'warn', // defaults to 'info' and it's noisy
    hot: {
      hot: true,
      logLevel: 'warn', // defaults to 'info' and it's noisy
      reload: true,
    },
  },
  target: 'web',
});
