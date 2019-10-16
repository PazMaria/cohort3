import functions from "./functions.js";
import operandFunctions from "./calculator.js";

// **********
//
// Add the event listeners
//

idNumber.addEventListener("change", () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});

//Calculator

let cal = document.getElementById("cal");
let input1 = document.getElementById("val1");
let input2 = document.getElementById("val2");
let result = document.getElementById("result");

cal.addEventListener("click", function() {
  if ((input1.value != "") & (input2.value != "")) {
    switch (document.querySelector('[name="operation"]:checked').value) {
      case "plus":
        result.value = operandFunctions.addFunc(
          Number(input1.value),
          Number(input2.value)
        );
        break;

      case "minus":
        operandFunctions.minusFunc(Number(input1.value), Number(input2.value));
        break;

      case "times":
        operandFunctions.timesFunc(Number(input1.value), Number(input2.value));
        break;

      case "divide":
        operandFunctions.divFunc(Number(input1.value), Number(input2.value));
        break;
    }
    input1.value = "";
    input2.value = "";
  }
});
