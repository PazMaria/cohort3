export class Queue {
  constructor() {
    this.queueArr = [];
  }

  addQueue(data) {
    this.queueArr.push(data);
  }

  deleteQueue() {
    this.queueArr.shift();
  }
}

export class Stack {
  constructor() {
    this.stackArr = [];
  }

  addStack(data) {
    this.stackArr.push(data);
  }

  deleteStack() {
    this.stackArr.pop();
  }
}
