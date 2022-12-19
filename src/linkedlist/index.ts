// 常见的数据结构 队列 栈 链表 树
// 队列是先进先出 push shift 事件环
// 栈型结构 push pop 方法调用栈 路由切换 浏览器的历史记录 两个栈

// 什么是链表(LinkedList)?
// 链表实际上是线性表的链式存储结构。

// 一.单向链表
// 各个节点数据通过指针的方法串联起来，构成链表。（单向指针）

// 错误说法 就是每次执行都会创建一个作用域 声明时就定义了作用域
// 运行的时候产生你的叫执行上下文(栈)
// function a() {
//   function b() {
//     function c() {}
//     c();
//   }
//   b();
// }
// a();
// 路由切换 判断语法是否可以正常合并 <div><span></span></div> [div ,span]
// 《你不知道的js》
// 数组的shift是比较浪费性能的，每次弹出一个后续内容都会前进， 链表（通过指针链接起来）

// 链表查找 删除的性能平均复杂度是O(n) 链表可以优化头尾操作比较合适
// 我们可以使用链表来实现 栈 或者队列

class Node {
  constructor(public element: any, public next: any) {
    this.element = element;
    this.next = next;
  }
}
class LinkedList {
  head: any = null;
  size = 0;
  constructor() {}
  add(index: number, element?: any) {
    //增加节点
    if (arguments.length === 1) {
      element = index;
      index = this.size;
    }
    if (index < 0 || index > this.size) {
      throw new Error("链表索引异常");
    }
    if (index === 0) {
      let head = this.head;
      this.head = new Node(element, head);
    } else {
      let prevNode = this.getNode(index - 1);
      prevNode.next = new Node(element, prevNode.next);
    }
    this.size++;
  }
  remove(index: number) {
    // 删除节点
    let oldNode;
    if (index == 0) {
      oldNode = this.head;
      this.head = oldNode && this.head.next;
    } else {
      let prevNode = this.getNode(index); //获取当前的前一个节点
      oldNode = prevNode.next; // 前一个的下一个就是要删除的
      prevNode.next = oldNode.next; //让前一个下一个 指向之前的下一个
    }
    this.size--;
    return oldNode && oldNode.element; //返回删除的元素
  }
  getNode(index: number) {
    // 获取节点
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  length() {
    // 链表的总个数
    return this.size;
  }
}
let ll = new LinkedList();
ll.add(0, 100); // 200 100 300 往索引0处添加
ll.add(0, 200);
ll.add(300); // 200 下一个 是100 下一个 是300 向末尾添加
console.log(ll.head);
export { LinkedList };
