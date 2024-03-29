// 树
// 一.树形结构
// 像数组、栈、队列、默认都是线性结构类型。常见的树形结构又二叉树和多叉树（大于两个叉的树）。
// 开发中常见的树形结构有：文件夹目录、DOM结构、路由的配置...（树的数据结构是非常重要的）
// 常见概念
// .节点（根节点、父节点、子节点、兄弟节点）
// .子树（左子树、右子树），子树的个数称之为度
// .叶子节点（度为0的节点）非叶子结点（度不为0的节点）
// .节点的深度（从根节点到当前节点所经过的节点总数）
// .节点的高度（从当前节点到最远叶子节点经过的节点总数）
// .树的层数（树的高度、树的深度）
// .有序树（节点按照顺序排列）、无序树

// 二.二叉树

// 二叉树是每个节点最多有两个子树的树结构，每个节点的度最多为2.通常子树被称为"左子树"（left subtree）
// 和"右子树"（right subtree），左子树和右子树是有顺序的

//二叉树的常见概念

// .真二叉树: 不含一度节点的二叉树称为真二叉树（proper binary tree）
// .满二叉树: 满二叉树也是真二叉树，且所有的叶子节点都在最后一层
// .完全二叉树：深度为k的有n个节点的二叉树，对树中的节点按从上至下、从左到右的顺序进行编号
//  如果编号为i(1<=i<=n)的节点与满二叉树中编号为i的节点在二叉树中的位置相同，则这棵二叉树称为完全二叉树。

// 三.二叉搜索树

// 1.什么是二叉搜索树
// 一般情况下存储数据我们可以采用数组的方式，但是从数组中检索数据的时间复杂度是O(n),如果数据存储有序，则可以采用二分查找的方式来检索数据，
// 复杂度为：O(logn),但是如果操作数组中的数据像增加、删除默认数组会产生塌陷，时间复杂度为O(n)

//二叉树中查询、增加、删除复杂度最坏为O(logn),特性是当它的左子树不空，则左子树上所有节点的值
//均小于它的根节点的值，当右子树不空，则右子树上所有节点的值均大于它的根节点的值。
//也称为：二叉查找树或二叉排序树

// 2. 二叉搜索树的主要操作
//    二叉搜索树中的数据必须具有可比较性
//.add添加元素
//.remove删除元素
//.size元素个数
//.contains包含元素
// 树是没有索引的，不能通多索引来检索数据

// 3.实现二叉搜索树
