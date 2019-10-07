console.log("Hello World from basic.js");

const onButtonClicked = () => console.log("I'm in the button click event");

let button = document.getElementById("button");
let input = document.getElementById("input");

button.addEventListener("click", function() {
  onButtonClicked();
  if (input.value != "") {
    console.log(input.value);
    console.log(Number(input.value) + 1);
    size(Number(input.value));
    input.value = "";
  }
});

const msg = document.getElementsByClassName(".msg");
const size = num => {
  if (num < 10) {
    alert("Small");
  } else if (num < 20) {
    alert("Med");
  } else {
    alert("Large");
  }
};
