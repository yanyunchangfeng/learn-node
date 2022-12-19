import { LinkedList } from ".";
export {};

class Queue {
  //队列是添加和删除
  ll: LinkedList;
  constructor() {
    this.ll = new LinkedList();
  }
  offer(element: any) {
    // 入队列
    this.ll.add(element);
  }
  poll() {
    this.ll.remove(0);
  }
}
