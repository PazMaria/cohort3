import { ListNode, LinkedList } from "./linkedList.js";

test("check show method", () => {
  const node = new ListNode("Apples", 5);
  expect(node.show()).toBe("Subject: Apples, Amount: 5");
});

test("insert node", () => {
  const link = new LinkedList();
  link.insertNode("Apples", 5);
  expect(link.head.subject).toBe("Apples");
});
