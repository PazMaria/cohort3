import functions from "./functions.js";
const oList = document.createElement("ol");
const lItem = document.createElement("li");
// lItem.textContent = "New Item";
oList.appendChild(lItem);

test("Show children of <ol>", () => {
  expect(functions.listChild(oList)[0]).toEqual(lItem);
});

test("Add new nodes", () => {
  expect(functions.addNod("p", "I'm new")).toEqual("p");
});
