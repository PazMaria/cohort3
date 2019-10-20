import functions from "./functions.js";
import operandFunctions from "./calculator.js";
import taxesFunctions from "./taxes.js";
import arrayFunctions from "./arrays.js";
import dictionaryFunctions from "./dictionaries.js";

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
let proTax = document.getElementById("provtax");
let prov;

tax.addEventListener("click", function() {
  if (income.value != "") {
    fed.value = parseFloat(
      taxesFunctions.fedTax(income.value, province.value)[0]
    ).toFixed(2);
    proTax.value = parseFloat(
      taxesFunctions.fedTax(income.value, province.value)[1]
    ).toFixed(2);
    erate.value = parseFloat((fed.value / income.value) * 100).toFixed(2);
  }
});

//Working With Arrays

const array = [];
let num = document.getElementById("inp");
let addArray = document.getElementById("add");
let message;
addArray.addEventListener("click", function() {
  if (num != "") {
    message = arrayFunctions.addArrayF(num.value);
  }
  if (message == "Number has been added to the array.") {
    array.push(num.value);
    num.value = "";
  }
  document.getElementById("msg").textContent = message;
});
let showArray = document.getElementById("show");
showArray.addEventListener("click", function() {
  document.getElementById("msg").textContent = array.toString();
});
let totalArray = document.getElementById("tot");
totalArray.addEventListener("click", function() {
  document.getElementById("msg").textContent = arrayFunctions.totalArrayF(
    array
  );
});
let clearArray = document.getElementById("clear");
clearArray.addEventListener("click", function() {
  arrayFunctions.clearArrayF(array);
  document.getElementById("msg").textContent = "Array has been cleared";
});

//Working With Dictionaries
const provDictionary = {
  AB: "Alberta",
  BC: "British Columbia",
  MB: "Manitoba",
  NB: "New Brunswick",
  NL: "Newfoundland and Labrador",
  NT: "Northwest Territories",
  NS: "Nova Scotia",
  NU: "Nunavut",
  ON: "Ontario",
  PE: "Prince Edward Island",
  QC: "Quebec",
  SK: "Saskatchewan",
  YT: "Yukon"
};

const lookUp = document.getElementById("look");
const inpu = document.getElementById("inpu");
const txt = document.getElementById("msgD");

lookUp.addEventListener("click", function() {
  if (inpu != "") {
    txt.textContent = dictionaryFunctions.lookUpF(provDictionary, inpu.value);
  }
});
