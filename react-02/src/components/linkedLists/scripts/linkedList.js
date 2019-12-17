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
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

export { ListNode, LinkedList };
