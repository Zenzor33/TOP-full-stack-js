class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  // Write an insert and delete functions which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not).

  // Notes: Values always get added as a leaf
  insert(val, root = this.root) {
    // Determine which subtree by comparing val to root
    if (val < root.data) {
      // recursively search left subtree
      if (!root.left) {
        let theNode = new Node(val);
        root.left = theNode;
        return theNode;
      }
      this.insert(val, root.left);
    } else if (val > root.data) {
      // recursive search right subtree
      if (!root.right) {
        let theNode = new Node(val);
        root.right = theNode;
        return theNode;
      }
      this.insert(val, root.right);
    }
  }

  delete(val, root = this.root) {
    // Three cases
    // 1. If delete leaf, delete leaf and no other part of the tree.
    // 2. If delete node with one child, remove node and replace with its child
    // 3. If delete node with two children, search its right subtree and find the node on the "far left (find node with no left child)" and replace the deleted node with it.
    if (val < root.data) {
      // recursively search left subtree
      if (!root.left) {
        //
      }
      this.delete(val, root.left);
    } else if (val > root.data) {
      // recursive search right subtree
      if (!root.right) {
        //
      }
      this.delete(val, root.right);
    }
  }
}

let arr1 = [1, 23, 8, 3, 5, 7, 9, 67, 6345];

const sortedArr = arr1.sort(function (a, b) {
  return a - b;
});

let something = new Tree(sortedArr);
console.log(something);
something.insert(30);

function buildTree(arr, start = 0, end = arr.length - 1) {
  if (start > end) return null;

  const mid = parseInt((start + end) / 2);
  const theNode = new Node(arr[mid]);

  theNode.left = buildTree(arr, start, mid - 1);
  theNode.right = buildTree(arr, mid + 1, end);
  prettyPrint(theNode);
  return theNode;
}

// node is root node of tree
function prettyPrint(node, prefix = "", isLeft = true) {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

// //
// Algorithm:
// 1. Initilize start = 0, end = length of thearray - 1
// 2. mid = (start+end)/2
// 3. Create a tree node with mid as root (lets call it A)
// 4. Recursively do following steps:
// 4a. Caculate mid of left subarray and make it root of left subtree of A.
// 4b. Calculate mid of right subarray and make it root of subtree of A.

// Base case is if start > end return null
