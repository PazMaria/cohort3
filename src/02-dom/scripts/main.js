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
let addBeE = document.getElementById("addBe");
let addAfE = document.getElementById("addAf");
let delE = document.getElementById("del");
let count = 0;

addC.addEventListener("click", function() {
  //   left.appendChild(functions.addCard(left, count++));
  functions.addCard(left, count++);
});

addC.addEventListener("click", function () {