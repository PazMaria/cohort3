import taxesFunctions from "./taxes.js";

test("Check fed-tax calculation", () => {
  expect(taxesFunctions.fedTax(1, "AB")).toEqual([0.15, 0.1]);
});
