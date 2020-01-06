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

  insertNode(subject, amount) {
    const newNode = new ListNode(subject, amount);
    if (this.head === null) {
      this.head = newNode;
      this.current = newNode;
      return newNode;
    } else {
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
    return this.current;
  }

  lastPosition() {
    let lastNode = this.head;
    while (lastNode.forwardNode !== null) {
      lastNode = lastNode.forwardNode;
    }
    this.current = lastNode;
    return this.current;
  }

  nextNode() {
    if (this.current.forwardNode === null) {
      return this.current;
    }
    this.current = this.current.forwardNode;
    return this.current;
  }

  previousNode() {
    if (!this.current.prevNode) {
      return this.current;
    } else {
      this.current = this.current.prevNode;
      return this.current;
    }
  }

  deleteNode() {
    if (this.current === this.head) {
      if (this.head.forwardNode !== null) {
        this.head = this.head.forwardNode;
        this.current = this.head;
      } else {
        this.head = null;
        this.current = this.head;
      }
    } else {
      if (this.current.forwardNode === null) {
        this.current = this.current.prevNode;
        this.current.forwardNode = null;
      } else {
        this.current.prevNode.forwardNode = this.current.forwardNode;
        this.current.forwardNode.prevNode = this.current.prevNode;
        this.current = this.current.prevNode;
      }
    }
  }

  totalAmount() {
    let total = 0;
    let loopNode = this.head;
    while (loopNode.forwardNode !== null) {
      total += loopNode.amount;
      loopNode = loopNode.forwardNode;
    }
    total += loopNode.amount;
    return total;
  }
}

export { ListNode, LinkedList };
