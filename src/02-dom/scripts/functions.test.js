import functions from "./functions.js";

// Basic DOM

const oList = document.createElement("ol");
const lItem = document.createElement("li");

oList.appendChild(lItem);

test("Show children of <ol>", () => {
  expect(functions.listChild(oList)[0]).toEqual(lItem);
});

// test("Add new nodes", () => {
//   expect(functions.addNod("p", "I'm new")).toEqual("<p>I'm new</p>");
// });

// Working with Cards

test("Add cards", () => {
  const newDiv = document.createElement("div");
  expect(functions.addCard(newDiv).children.length).toEqual(3);
  expect(newDiv.childElementCount).toEqual(1);
});

test("Add card before", () => {
  const newDiv = document.createElement("div");
  const card = functions.addCard(newDiv);
  functions.addBeF(card, newDiv);
  expect(newDiv.childElementCount).toEqual(2);
});

test("Add card after", () => {
  const newDiv = document.createElement("div");
  const card = functions.addCard(newDiv);
  functions.addAf(card, newDiv);
  expect(newDiv.childElementCount).toEqual(2);
});

test("Delete card", () => {
  const newDiv = document.createElement("div");
  const card = functions.addCard(newDiv);
  functions.delF(card);
  expect(newDiv.childElementCount).toEqual(0);
});
