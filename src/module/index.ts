// node中的模块 核心

// 模块规范有哪些？ 为什么有这些规范
// 开发时会有命名冲突的问题 命名空间防止冲突（调用时不方便）
// IIFE自执行的的方式实现模块 请求的处理 （seajs CMD淘汰了） fromjs AMD

//es6Module  commonjs规范  umd统一模块 amd模块
// import export 浏览器es6
// from module.exports node使用的（如果想在node中使用es6Module 需要babel编译）

// commonjs规范定义
// 每一个文件都是一个模块
// 要通过module.exports 导出需要给别人使用的结果
// 导入需要的模块

// node中的模块划分了几类 1)核心模块(fs 内置模块) 2）from()文件模块 自定义模块 3) 第三方模块（需要安装）

// 1)核心模块 很多fs path vm from 内部是同步的
import fs from "fs"; //一般有两种方法同步，异步的
// import path from "path";
// import vm from "vm";
// 默认解析的路径 是以process.cwd()
// __dirname 文件所在目录 不能更改的
// console.log(path.resolve("node.md")); //    /Users/yanyunchangfeng/Documents/webproject/learning-node/node.md
console.log(path.resolve(__dirname, "../node.md")); // 你给我一个相对路径 我还你个绝对路径, /Users/yanyunchangfeng/Documents/webproject/learning-node/src/node.md
console.log(path.resolve(__dirname, "../node.md", "/")); //   /

//有拼接的功能
console.log(path.join(__dirname, "../node.md", "/")); // 只是简单的拼接 /Users/yanyunchangfeng/Documents/webproject/learning-node/src/node.md/

// 如果遇到带/的路径 resolve 会认为是根路径 join则是拼接在一起

console.log(path.extname("a.min.js")); // .js 取后缀名
console.log(path.relative("a", "a/a.js")); // 去掉相同的部分 => a.js
console.log(path.dirname(__dirname)); // __dirname = path.dirname

let a = 1;
const log1 = eval(`console.log(a)`); // eval执行时会查找上下文  输出1
const log = `console.log(a)`;
let fn = new Function(log); // new Function 也是可以产生一个执行环境 不依赖于外层作用域，必须包一层函数  模版引擎中会使用new Function
// console.log(fn()); //a is not defined
console.log(fn.toString());
//function anonymous() {
// console.log(a)
//}

vm.runInThisContext(log); // 让字符串直接执行 并且在沙箱环境中 模版引擎用的是 new Function + with

// 为了实现commonjs规范
