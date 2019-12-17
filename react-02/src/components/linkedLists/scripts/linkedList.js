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
    this.position = 0;
  }

  insertNode(subject, amount) {
    this.position++;
    const newNode = new ListNode(subject, amount);
    newNode.position = this.position;
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

  firstPosition() {
    return `${this.head.subject} Position: ${this.head.position}`;
  }

  lastPosition() {
    if (this.head === null) {
      return "List is empty";
    } else {
      let lastNode = this.head;
      while (lastNode.forwardNode !== null) {
        lastNode = lastNode.forwardNode;
      }
      return `${lastNode.subject} Position: ${lastNode.position}`;
    }
  }
}

export { ListNode, LinkedList };
