# webpack-react

## 简介

支持 react typescript 的打包基础代码

## webpack common 抽离

1. css-loader 、postscss-loader样式的基础处理兼容各个浏览器
2. pulgins 
   1. ``HtmlWebpackPlugin`` 将打包的产物集合在html中，自动化生成该html文件，简化流程
   2. ``MiniCssExtractPlugin`` 为每个包含css文件的js文件创一个单独的css文件，支持css的按需加载，在webpack5中才可用。防止在开发环境下，浏览器的前缀影响开发，只在生产环境中使用。优势如下
      -  异步加载
      -  没有重复的编译（性能）
      -  更容易使用
      -  特别针对 CSS 开发
   3. ``ForkTsCheckerWebpackPlugin`` 在单独的进程上运行 TypeScript 类型检查器
      - Speeds up TypeScript type checking (by moving it to a separate process) 🏎
      - Supports modern TypeScript features like project  references and incremental mode ✨
      - Displays nice error messages with the code frame formatter 🌈    
   4. ``WebpackBar`` 展示打包进度 可以替换颜色

## 打包优化
1. ``clean-webpack-plugin``,用于打包时清除上次打包的结果，防止文件残留
2. ``splitChunks`` webpack5.0已经默认开启代码分割，但是对第三方代码，想打包成单独的chunk，需要显式配置。
3. ``minimize`` ``minimizer`` 使用 ``TerserPlugin``进行压缩bundle

## 自定义插件
1. ``WactherPlugin`` 根据webpack提供的compiler钩子watchRun回调中获取到compiler对象，对象中获取到监听过程的变更文件属性modifiedFiles，实现获取每次修改保存触发再次打包的时，在终端打印文件变更列表