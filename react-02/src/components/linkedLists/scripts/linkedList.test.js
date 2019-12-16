import { ListNode, LinkedList } from "./linkedList.js";

test("check show method", () => {
  const node = new ListNode(null, "Apples", 5);
  expect(node.show()).toBe("Subject: Apples, Amount: 5");
});
