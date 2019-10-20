import arrayFunctions from "./arrays.js";

test("Check add array message", () => {
  expect(arrayFunctions.addArrayF(4)).toEqual(
    "Number has been added to the array."
  );
});

test("Check total sum of array", () => {
  expect(arrayFunctions.totalArrayF([4, 7, 9])).toEqual(20);
});

test("Check clear array", () => {
  expect(arrayFunctions.clearArrayF([4, 7, 9])).toEqual([]);
});
