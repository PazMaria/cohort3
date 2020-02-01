import { Queue, Stack } from "./fifoLifo.js";

test("Test add data to queue", () => {
  let queue = new Queue();
  queue.addQueue("A");
  expect(queue.queueArr[0]).toEqual("A");
  queue.addQueue("B");
  expect(queue.queueArr[1]).toEqual("B");
});

test("Test delete data from queue", () => {
  let queue = new Queue();
  queue.addQueue("A");
  queue.addQueue("B");
  queue.addQueue("C");
  expect(queue.queueArr[0]).toEqual("A");
  queue.deleteQueue();
  expect(queue.queueArr[0]).toEqual("B");
});

test("Test add data to stack", () => {
  let stack = new Stack();
  stack.addStack("A");
  expect(stack.stackArr[0]).toEqual("A");
  stack.addStack("B");
  expect(stack.stackArr[1]).toEqual("B");
});

test("Test delete data from stack", () => {
  let stack = new Stack();
  stack.addStack("A");
  stack.addStack("B");
  stack.addStack("C");
  expect(stack.stackArr[0]).toEqual("A");
  stack.deleteStack();
  expect(stack.stackArr[0]).toEqual("A");
});
