import taxesFunctions from "./taxes";

test("Check fed-tax calculation", () => {
  expect(taxesFunctions.fedTax(1)).toEqual(0.15);
});
