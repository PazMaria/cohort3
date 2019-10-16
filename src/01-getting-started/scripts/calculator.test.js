import operandFunctions from "./calculator";

test("Check addition function", () => {
  expect(operandFunctions.addFunc(5, 6)).toEqual(11);
});

test("Check substraction function", () => {
  expect(operandFunctions.minusFunc(9, 4)).toEqual(5);
});

test("Check multiplication function", () => {
  expect(operandFunctions.timesFunc(9, 4)).toEqual(36);
});

test("Check division function", () => {
  expect(operandFunctions.divFunc(20, 4)).toEqual(5);
});
