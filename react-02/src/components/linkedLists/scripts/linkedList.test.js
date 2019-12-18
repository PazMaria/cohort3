import { ListNode, LinkedList } from "./linkedList.js";

// test("check show method", () => {
//   const node = new ListNode("Apples", 5);
//   expect(node.show()).toBe("Subject: Apples, Amount: 5");
// });

test("insert node", () => {
  const link = new LinkedList();
  link.insertNode("Apples", 5);
  expect(link.head.subject).toBe("Apples");
  link.insertNode("Potatoes", 6);
  expect(link.head.forwardNode.subject).toBe("Potatoes");
  link.insertNode("Bananas", 6);
});

test("check first position", () => {
  const link = new LinkedList();
  link.insertNode("Apples", 5);
  link.insertNode("Potatoes", 6);
  expect(link.firstPosition()).toBe("First position: Apples");
});

test("check last position", () => {
  const link = new LinkedList();
  link.insertNode("Apples", 5);
  link.insertNode("Potatoes", 6);
  expect(link.lastPosition()).toBe("Last position: Potatoes");
});

test("check next node", () => {
  const link = new LinkedList();
  link.insertNode("Apples", 5);
  link.insertNode("Potatoes", 6);
  link.insertNode("Bananas", 6);
  expect(link.nextNode(link.head)).toBe("Potatoes");
});

test("check previous node", () => {
  const link = new LinkedList();
  link.insertNode("Apples", 5);
  link.insertNode("Potatoes", 6);
  link.insertNode("Bananas", 6);
  let lastNode = link.head;
  while (lastNode.forwardNode !== null) {
    lastNode = lastNode.forwardNode;
  }
  expect(link.previousNode(lastNode)).toBe("Potatoes");
});

// test("delete node", () => {
//   const link = new LinkedList();
//   link.insertNode("Apples", 5);
//   link.insertNode("Potatoes", 6);
//   link.deleteNode("Apples");
//   expect(link.head.subject).toBe("Potatoes");
// });
