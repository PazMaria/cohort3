class ListNode {
  constructor(subject, amount) {
    this.subject = subject;
    this.amount = amount;
    this.forwardNode = null;
    this.prevNode = null;
  }

  show() {
    return `Subject: ${this.subject}, Amount: ${this.amount}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  insertNode(subject, amount, currentNode) {
    const newNode = new ListNode(subject, amount);
    if (this.head === null) {
      this.head = newNode;
      this.current = newNode;
      return newNode;
    } else {
      this.current = currentNode;
      if (this.current.forwardNode === null) {
        this.current.forwardNode = newNode;
        newNode.forwardNode = null;
        newNode.prevNode = this.current;
        this.current = newNode;
        return newNode;
      }
      newNode.forwardNode = this.current.forwardNode;
      newNode.prevNode = this.current;
      this.current.forwardNode = newNode;
      this.current = newNode;
      return newNode;
    }
  }

  firstPosition() {
    this.current = this.head;
    return `First position: ${this.head.subject}`;
  }

  lastPosition() {
    if (this.head === null) {
      return "List is empty";
    } else {
      let lastNode = this.head;
      while (lastNode.forwardNode !== null) {
        lastNode = lastNode.forwardNode;
      }
      this.current = lastNode;
      return `Last position: ${lastNode.subject}`;
    }
  }

  nextNode(node) {
    if (!node.forwardNode) {
      return "This is the last node";
    } else {
      this.current = node.forwardNode;
      return node.forwardNode.subject;
    }
  }

  previousNode(node) {
    if (!node.prevNode) {
      return "This is the first node";
    } else {
      this.current = node.prevNode;
      return node.prevNode.subject;
    }
  }

  deleteNode(node) {
    if (node === this.head) {
      if (this.head.forwardNode !== null) {
        this.head = this.head.forwardNode;
        this.head.prevNode = null;
        this.current = node.forwardNode;
        node = null;
      } else {
        this.head = null;
      }
    } else {
      if (node.forwardNode === null) {
        node.prevNode.forwardNode = null;
        this.current = node.prevNode;
        node = null;
      }
      node.prevNode.forwardNode = node.forwardNode;
      node.forwardNode.prevNode = node.prevNode;
    }
  }

  totalAmount() {
    let total = 0;
    this.current = this.head;
    while (this.current.forwardNode !== null) {
      total += this.current.amount;
      this.current = this.current.forwardNode;
    }
    total += this.current.amount;
    return total;
  }
}

export { ListNode, LinkedList };
