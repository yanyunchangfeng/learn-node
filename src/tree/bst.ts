// bst binary search tree

class Node {
  left = null;
  right = null;
  constructor(public element: any, public parent: any) {
    this.element = element; // 记录当前节点的父亲是谁
    this.parent = parent;
  }
}

class BST {
  root: any = null;
  size = 0;
  constructor() {}
  add(element: any) {
    if (this.root == null) {
      this.root = new Node(element, null);
      this.size++;
      return;
    }
    // 根据根的值来比较插入
    // 根据条件不停的找 找到节点为空时，将上一次的值保存起来。将节点插入到保存的节点中
    let currentNode = this.root; // 从根开始进行查找
    let parent = null;
    let compare: any = null;
    while (currentNode) {
      compare = element - currentNode.element;
      parent = currentNode; //parent就是在进入左右子树进入之前保存下来的节点
      if (compare > 0) {
        currentNode = currentNode.right;
      } else if (compare < 0) {
        currentNode = currentNode.left;
      }
    }
    let newNode = new Node(element, parent);
    if (compare > 0) {
      parent.right = newNode;
    } else {
      parent.left = newNode;
    }
    this.size++;
  }
}
let bst = new BST();
let arr = [10, 8, 19, 6, 15, 22, 20];
arr.forEach((item) => {
  bst.add(item);
});

console.dir(bst, { depth: 10 });
// 二叉搜索树中的内容必须是有可比较性的
export {};
