console.log("我是第一个ES6模块的输出内容")

// import mainTest from "./mainTest.js"
// import { friend } from "./mainTest.js"
// 以上两条和合并成一条
console.log(mainTest)
console.log(friend)
import mainTest,{ friend } from './mainTest'

// import './mainTest'//可直接执行引用模块中的代码，多次引入只会执行一次
console.log("nelson")

