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

  // 3. size returns the total number of nodes in the list
  size() {
    console.log("here");
    // return this.size;
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
console.log(ll);
ll.size();
