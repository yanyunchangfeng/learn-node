let r = require("./a");
let a = 10;
console.log(r);

// require中可以存放 相对路径 或者绝对路径 可以默认省略 .js .json 后缀的文件
// webpack 的模块化思路机制是一样的
// 1.先去读取a文件，拿到a文件中的内容 进行函数的包裹 module.exports = 'hello
/**
 * function(exports,module,require,__dirname,__filename){
 *    module.exports = 'hello'
 *    return module.exports
 * }(exports,module,require,__dirname,__filename)
 * 2.让函数执行 传入  使用vm让函数执行exports,module,require,__dirname,__filename
 */

// 代码调式如何做到  可以直接node --inspect-brk 文件名 实现调式功能

// vscode nodejs 调用源码 必须创建一个json文件 默认要取消 internal_files 否则无法调式源代码 跳到下一个断点
// 单步跳过 （不进入方法） 进入方法中 离开方法
