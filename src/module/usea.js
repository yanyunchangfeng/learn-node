var r = require("./a");
let a = 1;
console.log(r);
// require中可以存放 相对路径 或者绝对路径 可以默认省略 .js .json 后缀的文件
// webpack 的模块化思路机制是一样的
// 1.先去读取a文件，拿到a文件中的内容 进行函数的包裹 module.exports = 'hello
/**
 * function(exports,module,require,__dirname,__filename){
 *    module.exports = 'hello'
 *    return module.exports
 * }(exports,module,require,__dirname,__filename)
 * 2.让函数执行 传入使用vm让函数执行exports,module,require,__dirname,__filename
 */
// 代码调式如何做到  可以直接node --inspect-brk 文件名 实现调式功能
