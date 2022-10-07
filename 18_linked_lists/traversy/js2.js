class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 8. contains(value) returns true if the passed in value is in the list and otherwise returns false.

  contains(val) {
    // returns true if val in list
    let current = this.head;
    while (current) {
      if (val === current.data) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  // 7. pop removes the last element from the list
  pop() {
    // last element is at index (size - 1)
    let lastElement = this.size - 2;
    let current = this.head;
    let counts = 0;
    while (current.data && counts <= lastElement) {
      if (counts === lastElement) {
        current.next = null;
        break;
        // break statement
      } else {
        counts++;
      }
      current = current.next;
    }
    return this.head;
  }

  // 6. at(index) returns the node at the given index
  atIndex(val) {
    let counts = 0;
    let current = this.head;
    while (current.data && counts <= val) {
      if (counts === val) {
        return current.data;
        // break statement
      } else {
        counts++;
      }
      current = current.next;
    }
  }

  // 5. tail returns the last node in the list
  getTail() {
    // loop through the linkedlist until (!next). Then insert new node.
    let current = this.head;
    while (current.data) {
      //   console.log(current);
      if (!current.next) {
        return current.data;
      }
      current = current.next;
    }
  }

  // 4. head returns the first node in the list
  getHead() {
    return this.head.data;
  }

  // 3. size returns the total number of nodes in the list
  getSize() {
    // console.log("here");
    return this.size;
  }

  // 2. prepend(value) adds a new node containing value to the start of the list
  prepend(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.size++;
    } else {
      this.head = new Node(data, this.head);
      this.size++;
    }
  }

  // 1. append(value) adds a new node containing value to the end of the list
  append(data) {
    // loop through the linkedlist until (!next). Then insert new node.
    let current = this.head;
    while (current.data) {
      //   console.log(current);
      if (!current.next) {
        current.next = new Node(data);
        this.size++;
        break;
      }
      current = current.next;
    }
  }
}

let ll = new LinkedList();
ll.prepend(100);
ll.append(150);
ll.prepend(125);
ll.append(175);
console.log(ll);
// console.log(ll.getSize());
// console.log(ll.getHead());
// console.log(ll.getTail());
// console.log(ll.atIndex(2));
// console.log(ll.pop());
