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
    this.current = null;
  }

  insertNode(subject, amount) {
    const newNode = new ListNode(subject, amount);
    this.current = newNode;
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

  // deleteNode(subject) {
  //   let nodeToDelete = this.head;
  //   let next = this.head.forwardNode;
  //   while (nodeToDelete.forwardNode !== null) {
  //     if (nodeToDelete.subject === subject) {
  //       this.head = this.head.forwardNode;
  //     }
  //     nodeToDelete = nodeToDelete.forwardNode;
  //     next = next.forwardNode;
  //   }
  //   if (nodeToDelete.subject === subject) {
  //     this.head = null;
  //   } else {
  //     return "Subject not found";
  //   }
  // }

  firstPosition() {
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
      return `Last position: ${lastNode.subject}`;
    }
  }
}

export { ListNode, LinkedList };
