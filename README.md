# Webpack ECMAScript 6
使用 Webpack 打包，使得在浏览器中可以使用 ES6 标准进行编码。

### 说明
此 Demo 使用了最基础的 ES6 特性：
- 面向对象
- 模块化

然后通过 Webpack 打包，使得可以在目前的浏览器上，支持这些特性。
目前对于 IE8 支持有限，只能在不做代码压缩的情况下使用。


### 使用方法

先下载代码，然后

```bash
npm install
npm run build     # 正常构建，打包后的 JS 已经混淆压缩
```
访问 dist/index.html 即可看到效果

### 构建方式说明
```bash
# 1、正常构建，打包后的 JS 已经混淆压缩
npm run build
# 2、正常构建，打包后的 JS 没有混淆压缩
npm run build-dev
# 3、监视源码变化并构建，打包后的 JS 没有混淆压缩，直接刷新浏览器即可看到结果
npm run dev
```

### IE8 的兼容
由于 IE8 对于 ES5 还没有完全兼容，所以 Webpack 打包后的内容，可能会有点问题
1. 需要在 Babel 的 presets 中，指定 `presets: [ ['es2015', {"loose": true}] ]`
详情参考 [Webpack, IE8 and ES6 modules](https://stackoverflow.com/questions/41247876/webpack-ie8-and-es6-modules)
```
// webpack.config.js
module: {
   loaders: [
     {
       test: /\.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {
         presets: [ ['es2015', {"loose": true}] ]
       }
     }
   ]
 }
```

2. 使用 Webpack 构建过程中不要进行压缩（-p 参数，或者 UglifyJsPlugin）