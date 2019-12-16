class ListNode {
  constructor(forwardNode = null, subject, amount) {
    this.forwardNode = forwardNode;
    this.subject = subject;
    this.amount = amount;
  }

  show() {
    return `Subject: ${this.subject}, Amount: ${this.amount}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

export { ListNode, LinkedList };
