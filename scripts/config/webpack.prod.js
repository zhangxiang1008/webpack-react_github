// scripts/config/webpack.prod.js
const { merge } = require("webpack-merge");
const path = require("path");
// 去除无用代码
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common");
const { PROJECT_PATH } = require("../constant");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve(PROJECT_PATH, "./dist"),
    assetModuleFilename: "images/[name].[contenthash:8].[ext]",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            // 去除代码中的所有log打印
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
  },
});
