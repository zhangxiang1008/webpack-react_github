const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PROJECT_PATH } = require("../constant");
const { isDevelopment, isProduction } = require("./env");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const getCssLoaders = () => {
  const cssLoaders = [
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "[local]--[hash:base64:5]",
        },
        sourceMap: isDevelopment,
      },
    },
  ];

  // 开发环境一般用chrom不会有问题，防止开发环境下看样式有一堆前缀影响查看，因此只在生产环境使用
  isProduction &&
    cssLoaders.push({
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            isProduction && [
              "postcss-preset-env",
              {
                autoprefixer: {
                  grid: true,
                },
              },
            ],
          ],
        },
      },
    });

  return cssLoaders;
};

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, "./src/index.tsx"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, "./public/index.html"),
    }),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(PROJECT_PATH, "./tsconfig.json"),
      },
    }),
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: "react-typescript-boilerplate",
      // react 蓝
      color: "#61dafb",
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(PROJECT_PATH, "./src"),
      components: path.resolve(PROJECT_PATH, "./src/components"),
      utils: path.resolve(PROJECT_PATH, "./src/utils"),
    },
    //引入文件未写后缀，会依次查找是否存在
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: "babel-loader",
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [...getCssLoaders()],
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(),
          {
            loader: "less-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(),
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
};
