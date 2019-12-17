class ListNode {
  constructor(subject, amount, forwardNode = null) {
    this.subject = subject;
    this.amount = amount;
    this.forwardNode = forwardNode;
  }

  show() {
    return `Subject: ${this.subject}, Amount: ${this.amount}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(subject, amount) {
    const newNode = new ListNode(subject, amount);
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    } else {
      let lastNode = this.head;
      while (lastNode.forwardNode !== null) {
        lastNode = lastNode.forwardNode;
      }
      lastNode.forwardNode = newNode;
      return this.head;
    }
  }
}

export { ListNode, LinkedList };
