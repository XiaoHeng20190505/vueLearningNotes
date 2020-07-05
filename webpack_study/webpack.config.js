const path = require('path')    //导入node.js中专门操作路径的模块
const HTMLWebpackPlugin = require('html-webpack-plugin')//引入html-webpack-plugin插件
//初始化htmlwebpackplugin插件的实例对象
const htmlplugin = new HTMLWebpackPlugin({
    template: './src/index.html',   //指定要用到的页面文件
    filename: 'index.html'  //指定存放在根目录下的文件名
})
module.exports = {
    //编译模式
    mode: 'development', //development production开发环境与生产环境的转换。 development模式下代码不会被压缩，production下会被压缩
    entry: path.join(__dirname,'./src/index.js'),//设置入口文件路径
    output: {
        path: path.join(__dirname, './dist'),//设置输出文件路径
        filename: 'bundle.js'//设置输出文件名
    },
    module:{
        rules:[
            {test: /\.css$/g,use: ['style-loader','css-loader','postcss-loader']},
            {test: /\.less$/g,use: ['style-loader','css-loader','less-loader']},
            {test: /\.scss$/g,use: ['style-loader','css-loader','sass-loader']},
            {test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/g,use: 'url-loader?limit=102322'},
            // use可接受两种值，数组和字符串，?后边是loader的参数想，limit代表的字节大小，当引入图片的字节大小 小于等于 limit值会被编译成base64的图片
            {test: /\.js$/ , exclude:/(node_modules|bower_components)/, use: ['babel-loader'] }
        ]
    },
    plugins: [ htmlplugin ] //webpack执行期间会用到的插件列表

}