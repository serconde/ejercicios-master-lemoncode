const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(common, {
  mode: "production",
  stats: "verbose",
  plugins: [
    new Dotenv({
      path: "./prod.env",
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100'
      }
    }),
  ],  
});