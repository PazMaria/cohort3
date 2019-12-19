import { ListNode, LinkedList } from "./linkedList.js";

test("check show method", () => {
  const node = new ListNode("Apples", 5);
  expect(node.show()).toBe("Subject: Apples, Amount: 5");
});

test("check first position", () => {
  const link = new LinkedList();
  const node1 = link.insertNode("Apples", 5, null);
  const node2 = link.insertNode("Potatoes", 6, node1);
  expect(link.firstPosition()).toBe("First position: Apples");
});

test("check last position", () => {
  const link = new LinkedList();
  const node1 = link.insertNode("Apples", 5, null);
  const node2 = link.insertNode("Potatoes", 6, node1);
  expect(link.lastPosition()).toBe("Last position: Potatoes");
});

test("check next node", () => {
  const link = new LinkedList();
  const node1 = link.insertNode("Apples", 5, null);
  const node2 = link.insertNode("Potatoes", 6, node1);
  const node3 = link.insertNode("Bananas", 6, node2);
  expect(link.nextNode(link.head)).toBe("Potatoes");
});

test("check previous node", () => {
  const link = new LinkedList();
  const node1 = link.insertNode("Apples", 5, null);
  const node2 = link.insertNode("Potatoes", 6, node1);
  const node3 = link.insertNode("Bananas", 6, node2);
  let lastNode = link.head;
  while (lastNode.forwardNode !== null) {
    lastNode = lastNode.forwardNode;
  }
  expect(link.previousNode(lastNode)).toBe("Potatoes");
});

test("insert node", () => {
  const link = new LinkedList();
  const node1 = link.insertNode("Apples", 5, null);
  expect(link.head.subject).toBe("Apples");
  const node2 = link.insertNode("Potatoes", 6, node1);
  expect(link.head.forwardNode.subject).toBe("Potatoes");
  const node3 = link.insertNode("Bananas", 6, node2);
  const node4 = link.insertNode("Bread", 4, node2);
});

test("delete node", () => {
  const link = new LinkedList();
  const node1 = link.insertNode("Apples", 5, null);
  const node2 = link.insertNode("Potatoes", 6, node1);
  const node3 = link.insertNode("Bananas", 6, node2);
  link.deleteNode(node2);
  expect(node1.forwardNode.subject).toBe("Bananas");
});

test("get total amounts", () => {
  const link = new LinkedList();
  const node1 = link.insertNode("Apples", 5, null);
  const node2 = link.insertNode("Potatoes", 6, node1);
  const node3 = link.insertNode("Bananas", 6, node2);

  expect(link.totalAmount()).toBe(17);
});
