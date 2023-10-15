/* eslint-disable */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './public/js/index.js',
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].min.js',
    },
    mode: isDevelopment ? 'development' : 'production', // Set mode here
    devtool: isDevelopment ? 'source-map' : false,
    optimization: {
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
