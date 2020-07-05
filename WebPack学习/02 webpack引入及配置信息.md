当前web面临的困境
1、文件依赖关系复杂
2、静态资源请求效率低
3、模块化支持不友好
4、浏览器对高级JavaScript特性兼容程度低
etc...

webpack的出现用于解决以上问题
webpack：前端项目构建工具（打包工具）
提供友好的模块化支持，以及代码压缩混淆，处理js兼容性问题，性能优化等强大的功能，从而让程序员将工作的重心放到具体的功能实现，提高了开发效率和项目的可维护性。


引入webpack打包：
npm init -y（在创建项目时，路径中不能存在中文字符）
npm install webpack  webpack-cli -D 引入webpack包
在package.json中的scripts脚本下添加"dev": "webpack"节点，打包时使用webpack打包：npm run dev 即可

只单纯的引入webpack包是不会被自动打包的，每修改一次，需要重新打包一次

webpack 4.x默认
打包的入口文件为：src/index.js
打包的输出文件为：dist/main.js
自定义入口与出口在webpack.config.js中配置
entry
output

配置webpack的自动打包功能
安装自动打包工具：npm install webpack-dev-server -D 命令
修改package.json中的scripts脚本下的dev值为 webpack-dev-server。因为要使用webpack-dev-server运行
将index.html的js引入路径由./dist/bundle.js修改为/bundle.js。因为webpack的自动打包为将bundle.js默认放置再根目录中，而且不显示，可使用 http://localhost:8080/bundle.js 查看打包内容。

上述过程打包完成之后启动一个实时打包的http服务器，打开网址之后时文件路径的形式。
使用插件html-webpack-plugin 打包完成之后自动打开src下的index.html文件
引入插件：npm install html-webpack-plugin -D
创建插件对象实例并添加到plugins的数组中


以上述步骤需要自己打开网址才能访问相应的页面
现设置package.json中dev 的参数为 webpack-dev-server --open 在项目打包时自动打开网页
webpack后面仍可跟其他参数：
--open 打包完成之后自动打开浏览器
--host IP地址   配置打开的IP地址
--port 端口号   配置端口号
设置完成之后，重启项目



webpack中的加载器loader
作用：通过loader加载非js模块
因为webpack只能识别js模块，其他非js模块webpack处理不了，只能通过loader进行加载，否则会报错
loader可以辅助webpack加载打包特性的文件模块，比如：
    less-loader 可以打包处理.less相关的文件
    sass-loader 可以打包处理.scss相关文件
    url-loader 可以打包处理css中与url相关的文件

打包css文件步骤：
安装loader: npm i style-loader css-loader -D
在webpack.config.js的 module->rules数组中添加loader的规则。test属性值为正则表达式，匹配文件后最。use属性值是使用的loader
在index.js入口文件中引入
注意：style-loader css-loader 的顺序不能颠倒，多个loader的调用顺序是：从后往前调用

打包less文件步骤：
安装loader: npm i less-loader less -D （打包css中已经安装style-loader和css-loader）
在webpack的rules中新增规则
在index.js入口文件中引入

打包sass文件步骤
安装loader：npm i sass-loader node-sass -D 
在webpack的rules中新增规则
在index.js入口文件中引入
注意：安装node-sass需要python环境

配置postCSS自动添加CSS前缀，解决CSS兼容性问题
安装loader：npm i postcss-loader autoprefixer -D 
根目录添加postcss.config.js文件，配置如下：
    const autoprefixer = require('autoprefixer')
    module.exports = {
        plugins: [ autoprefixer ]
    }
修改webpack.config.js中rules的css配置，添加一个 postcss-loader
重启项目即可


打包样式表中的图片和字体文件
安装包：npm i url-loader file-loader -D 
在webpack.config.js的module->rules新添加规则：
    {test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/g,use: 'url-loader?limit=102322'}
重启项目即可

打包处理js文件中的高级语法
安装babel转换器相关的包: npm i babel-loader @babel/core @babel/runtime -D 
安装babel语法插件相关的包: npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D 
在项目根目录中，创建babel配置文件babel.config.js并初始化配置:
    module.exports = {
    presets: ['@babel/repset-env'],
    plugins: ['@babel/plugin-tranform-runtime','@babel/plugin-proposal-class-properties']
}
在webpack.config.js的module->rules新添加规则：
    {test: /\.js$/g,use: 'babel-loader',exclude: /node_modules/}//添加exclude 将 node_modules 下的文件全都排除掉
