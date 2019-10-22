import functions from "./functions.js";

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
  console.log(functions.addNod.nodeValue);
});
