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
  preOrderTraversal(visitor: any) {
    const traversal = (node: any) => {
      if (node == null) return;
      visitor.visit(node);
      traversal(node.left);
      traversal(node.right);
    };
    traversal(this.root);
  }
  inOrderTraversal(visitor: any) {
    const traversal = (node: any) => {
      if (node == null) return;
      // console.log(node.element);
      traversal(node.left);
      visitor.visit(node);
      traversal(node.right);
    };
    traversal(this.root);
  }
  // 根据parent属性 一般情况下 都可以用栈形结构 去避免递归
  postOrderTraversal(visitor: any) {
    const traversal = (node: any) => {
      if (node == null) return;
      traversal(node.left);
      traversal(node.right);
      visitor.visit(node);
    };
    traversal(this.root);
  }
  levelOrderTraversal(visitor: any) {
    if (this.root == null) return;
    let stack = [this.root]; //10
    let index = 0;
    let currentNode = null;
    while ((currentNode = stack[index++])) {
      visitor.visit(currentNode);
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
    }
  }
}
let bst = new BST();
let arr = [10, 8, 19, 6, 15, 22, 20];
arr.forEach((item) => {
  bst.add(item);
});

console.dir(bst, { depth: 10 });
// 二叉搜索树中的内容必须是有可比较性的

//树的遍历
// 前序遍历 PreOrder Traversal （先访问根节点、前序遍历左子树、前序遍历右子树）
// 中序遍历 InOrder Traversal（中序遍历左子树、根节点、中序遍历右子树）
// 后序遍历 PostOrder Traversal（后序遍历左子树、后序遍历右子树、根节点）
// 层序遍历 Level Traversal（从上到下，从左到右依次访问每一个节点）

// 根 左 右
function* leftOrder(tree: any): any {
  if (tree) {
    yield tree.element;
    yield* leftOrder(tree.left);
    yield* leftOrder(tree.right);
  }
}
// 左 根 右
function* inOrder(tree: any): any {
  if (tree) {
    yield* inOrder(tree.left);
    yield tree.element;
    yield* inOrder(tree.right);
  }
}
// 左 右 根
function* rightOrder(tree: any): any {
  if (tree) {
    yield* rightOrder(tree.left);
    yield* rightOrder(tree.right);
    yield tree.element;
  }
}
let resultLeft: string[] = [];
let resultIn: string[] = [];
let resultRight: string[] = [];
for (let node of leftOrder(bst.root)) {
  resultLeft.push(node);
}
for (let node of inOrder(bst.root)) {
  resultIn.push(node);
}
for (let node of rightOrder(bst.root)) {
  resultRight.push(node);
}
console.log(resultLeft);
console.log(resultIn);
console.log(resultRight);

// 访问者模式
bst.preOrderTraversal({
  // babel 内部转化都是使用这种方式
  visit(node: any) {
    // console.log(node.element, "----");
  },
});
bst.levelOrderTraversal({
  // babel 内部转化都是使用这种方式
  visit(node: any) {
    console.log(node.element, "----");
  },
});
export {};
