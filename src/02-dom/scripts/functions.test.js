import functions from "./functions.js";

// Basic DOM

const oList = document.createElement("ol");
const lItem = document.createElement("li");

oList.appendChild(lItem);

test("Show children of <ol>", () => {
  expect(functions.listChild(oList)[0]).toEqual(lItem);
});

test("Add new nodes", () => {
  expect(functions.addNod("p", "I'm new")).toEqual("<p>I'm new</p>");
});

// Working with Cards

test("Add cards", () => {
  let count = 0;
  const newDiv = document.createElement("div");
  expect(functions.addCard(newDiv, count)).toEqual(0);
});
