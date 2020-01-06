import { ListNode, LinkedList } from "./linkedList.js";

test("check show method", () => {
  const node = new ListNode("Apples", 5);
  expect(node.show()).toBe("Subject: Apples, Amount: 5");
});

test("insert node", () => {
  const link = new LinkedList();
  link.insertNode("A", 5);
  expect(link.head.subject).toBe("A");
  link.insertNode("B", 6);
  expect(link.head.forwardNode.subject).toBe("B");
  expect(link.current.subject).toBe("B");
  link.insertNode("C", 6);
  expect(link.current.subject).toBe("C");
  //inserting in between B and C
  link.previousNode();
  expect(link.current.subject).toBe("B");
  link.insertNode("D", 4);
  expect(link.current.subject).toBe("D");
  expect(link.current.prevNode.subject).toBe("B");
  expect(link.current.forwardNode.subject).toBe("C");
});

test("check first position", () => {
  const link = new LinkedList();
  link.insertNode("A", 5);
  link.insertNode("B", 6);
  link.insertNode("C", 3);
  expect(link.firstPosition().subject).toBe("A");
});

test("check last position", () => {
  const link = new LinkedList();
  link.insertNode("A", 5);
  link.insertNode("B", 6);
  link.insertNode("C", 3);
  expect(link.lastPosition().subject).toBe("C");
});

test("check next node", () => {
  const link = new LinkedList();
  link.insertNode("A", 5);
  link.insertNode("B", 6);
  link.insertNode("C", 3);
  link.firstPosition();
  expect(link.nextNode().subject).toBe("B");
});

test("check previous node", () => {
  const link = new LinkedList();
  link.insertNode("A", 5);
  link.insertNode("B", 6);
  link.insertNode("C", 3);
  expect(link.previousNode().subject).toBe("B");
});

test("delete node", () => {
  const link = new LinkedList();
  link.insertNode("A", 5);
  link.insertNode("B", 6);
  link.insertNode("C", 3);
  link.insertNode("D", 3);
  //Delete las node
  link.deleteNode();
  expect(link.current.subject).toBe("C");
  expect(link.current.forwardNode).toBeNull();
  //Delete in between nodes
  link.previousNode();
  link.deleteNode();
  expect(link.current.subject).toBe("A");
  expect(link.current.forwardNode.subject).toBe("C");
  //Delete first node
  link.deleteNode();
  expect(link.current.subject).toBe("C");
  expect(link.head.subject).toBe("C");
});

test("get total amounts", () => {
  const link = new LinkedList();
  link.insertNode("A", 5);
  link.insertNode("B", 6);
  link.insertNode("C", 3);
  link.insertNode("D", 7);
  expect(link.totalAmount()).toBe(21);
});
