import operandFunctions from "./calculator";

test("Check addition function", () => {
  expect(operandFunctions.addFunc(5, 6)).toEqual(11);
});
