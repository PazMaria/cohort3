import functions from "./functions.js";

// Basic DOM
let divDom = document.getElementById("dom");
let showB = document.getElementById("show");
let oList = document.getElementById("list");
let addB = document.getElementById("add");

divDom.addEventListener("click", function(e) {
  console.log(functions.eventFunc(e));
  // console.log(event.target);
});

showB.addEventListener("click", function() {
  console.log(functions.listChild(oList));
});

addB.addEventListener("click", function() {
  oList.appendChild(functions.addNod("li", "New Item"));
  //   console.log(functions.addNod.nodeValue);
});

// Working with Cards

let left = document.getElementById("leftDiv");
let addC = document.getElementById("addC");

// let count = 1;

addC.addEventListener("click", function() {
  functions.addCard(left);
});

left.addEventListener("click", function(e) {
  let clickedNode = e.target;
  switch (true) {
    case clickedNode.id === "addBe":
      functions.addBeF(clickedNode.parentElement, left);
      break;
    case clickedNode.id === "addAf":
      functions.addAf(clickedNode.parentElement, left);
      break;
    case clickedNode.id === "del":
      functions.delF(clickedNode.parentElement);
      break;
  }
});
