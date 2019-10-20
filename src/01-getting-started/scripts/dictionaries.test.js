import dictionaryFunctions from "./dictionaries.js";

test("Check object lookup function", () => {
  expect(
    dictionaryFunctions.lookUpF({ AB: "Alberta", BC: "British Columbia" }, "aB")
  ).toEqual("Alberta");
});
