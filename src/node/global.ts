// node 中的全局对象 浏览器中的this指代的是window 服务端中的this指代的都是global
// 默认我们访问是在文件中访问的this 内部被更改了 所以不是global module.exports

// 全局属性
// clearInterval clearTimeout setInterval setTimeout queueMicrotask setImmediate
// process Buffer

// require module exports __dirname __filename
// 全局变量是可以直接在文件中不声明直接访问的变量，但是global上的属性叫全局变量 global.xxx
const program = require("commander");
console.log(this); //{}

function b() {
  //   console.log(global);
}
b();

// console.log(Object.keys(process));

// platform chdir cwd env argv nextTick
// platform 平台 可以区分操作系统

// 用途，根据不同的平台 操作系统文件的
console.log(process.platform); // win32 windows /darwin linux  /etc/usr 用户目录
// 用途 可以获取当前执行node命令的目录 ，可以找到当前目录下的某个文件
console.log(process.cwd()); // current working directory 可以改变的
console.log(process.chdir("src")); // undefined 一般用不到
console.log(process.cwd()); // /Users/yanyunchangfeng/Documents/webproject/learning-node/src
// 用途，根据不同的环境变量做配置 如何设置环境变量
// 如果是windows可以通过 set xxx=xxx  / mac export xxx=xxx
// cross-env 这是一个第三方模块用于设置环境变量
// 用webpack 区分开发还是生产

if (process.env.NODE_ENV === "production") {
  console.log("生产环境");
} else {
  console.log("开发环境");
}
// console.log(process.env); // 当前系统环境变量

//用途，运行代码时传入的参数 --port --config
// 可以获取到当前用户的所有传入参数
// 第一个指代的是node的执行文件node.exe 第二个指代的是当前运行的文件（.j/ts）
let config = process.argv
  .slice(2)
  .reduce(
    (
      memo: Record<string, any>,
      current: string,
      index: number,
      arr: string[]
    ) => {
      if (current.startsWith("--")) {
        memo[current.slice(2)] = arr[index + 1];
      }
      return memo;
    },
    {}
  );
console.log("config", config);

// commander TJ
program.name("cf");
// program.version("1.0.0");
program.usage("[options]");
// program.command("rm").action(function () {
//   console.log("删除");
// });
program.option("-p, --port <v>", "set server port");
program.parse(process.argv);
console.log(program);
