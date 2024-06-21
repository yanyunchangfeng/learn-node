class Node {
  element;
  parent;
  left = null;
  right = null;
  constructor(element: any, parent: any) {
    this.element = element;
    this.parent = parent;
  }
}

class Tree {
  root: any = null;
  add(element: any) {
    if (this.root === null) {
      return (this.root = new Node(element, null));
    }
    let current = this.root;
    let parent: any = null;
    let compare;
    while (current) {
      parent = current;
      compare = current.element < element;
      if (compare) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    const node: any = new Node(element, parent);
    if (compare) {
      parent.right = node;
    } else {
      parent.left = node;
    }
  }
}
const tree = new Tree();
[44, 98, 11, 99, 10, 55, 66, 88, 555, 111].forEach((item) => {
  tree.add(item);
});
console.dir(tree, { depth: 10 });

export {};
