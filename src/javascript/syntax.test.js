// import xxx from "./syntax";

// test("numbers working", () => {
//   console.log("we are in syntax");

//   expect(xxx.rUNum()).toBe(123);
// });

import functions from "./syntax";

test("Check if number", () => {
  expect(functions.isNumber(54)).toBe("true");
});

test("Check if string", () => {
  expect(functions.isString("string")).toBe("true");
});

test("Check if boolean", () => {
  expect(functions.isBoolean(true)).toBe("true");
});
test("Check if array", () => {
  expect(functions.isArr([1, 2, 3])).toBe(true);
});
test("Check if object", () => {
  expect(functions.isObj({ name: "bill", age: 30 })).toBe(true);
});
test("Check if undefined", () => {
  expect(functions.isUndef()).toBe(true);
});
test("Check condition", () => {
  expect(functions.isIfElse(15)).toBe("beginning of month");
});
test("Check parameter", () => {
  expect(functions.isParam(15)).toBe(15);
});
test("Check returns", () => {
  expect(functions.isReturn(5)).toBe(7);
});
test("Check array add front", () => {
  expect(functions.isAddFront(5)).toEqual([5, 10, 15, 20]);
});
test("Check array add end", () => {
  expect(functions.isAddEnd(5)).toEqual([10, 15, 20, 5]);
});
test("Check array add update", () => {
  expect(functions.isUpdate(5)).toEqual([5, 15, 20]);
});
test("Check loop for, count the sum of numbers from 1 to 5", () => {
  expect(functions.forLoop()).toEqual(15);
});
test("Check loop for in", () => {
  expect(functions.loopForIn()).toEqual("Tim Horton 25 ");
});
test("Check while loop", () => {
  expect(functions.loopWhile()).toEqual("0, 1, 2, 3, 4, ");
});

test("Check do while loop", () => {
  expect(functions.loopDoWhile()).toEqual("0, 1, 2, 3, 4, ");
});

test("Check forEach", () => {
  expect(functions.checkForEach()).toEqual("cat, dog, fish, ");
});

test("Check Object", () => {
  expect(functions.checkObject({ name: "Tom", age: 35 })).toEqual("Tom is 35");
});

test("Check lookUp key", () => {
  expect(functions.checkLookUpKey("name")).toEqual("Tom");
});
