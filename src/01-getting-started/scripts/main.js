import functions from "./functions.js";
import operandFunctions from "./calculator.js";
import taxesFunctions from "./taxes.js";

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
        result.value = operandFunctions.minusFunc(
          Number(input1.value),
          Number(input2.value)
        );
        break;

      case "times":
        result.value = operandFunctions.timesFunc(
          Number(input1.value),
          Number(input2.value)
        );
        break;

      case "divide":
        result.value = operandFunctions.divFunc(
          Number(input1.value),
          Number(input2.value)
        );
        break;
    }
    input1.value = "";
    input2.value = "";
  }
});

//Canadian Taxes

let tax = document.getElementById("calButton");
let income = document.getElementById("income");
let province = document.getElementById("pro");
let fed = document.getElementById("fedtax");
let erate = document.getElementById("etax");
let inc;
let provName;
let prov;

tax.addEventListener("click", function() {
  if (income.value != "") {
    taxesFunctions.fedTax(income.value);
    erate.value = (fed.value / income.value) * 100;
  }
});
