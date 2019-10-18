import functions from "./daily";

/* Daily exercise - October 16-17, 2019
Working with Arrays */

//array method slice
test("method slice", () => {
  expect(functions.examSlice(["banana", "apple", "orange"], 1, 2)).toEqual([
    "apple"
  ]);
});

//array method splice
test("method splice", () => {
  expect(
    functions.examSplice(["banana", "apple", "orange"], 1, 0, "mango")
  ).toEqual(["banana", "mango", "apple", "orange"]);
});

//forEach
test("Check forEach", () => {
  expect(functions.examForEach(["cat", "dog", "fish"])).toEqual(
    "cat, dog, fish, "
  );
});

//map
test("Check map", () => {
  expect(functions.examMap([4, 7, 9])).toEqual([8, 14, 18]);
});

//reduce
test("Check reduce", () => {
  expect(functions.examReduce([4, 7, 9])).toEqual(20);
});

//filter
test("Check filter", () => {
  expect(functions.examFilter([4, 7, 9, 22, 45])).toEqual([22, 45]);
});

//sort
test("Check sort", () => {
  expect(functions.examSort(["Smith", "Johnson", "Williams", "Jones"])).toEqual(
    ["Johnson", "Jones", "Smith", "Williams"]
  );
});

//----------------------------------------------------

test("assertEquals", () => {
  console.log("daily");
  expect(functions.assertEquals("a", "b")).toBe("false");
  expect(functions.assertEquals("a", "a")).toBe("true");
  expect(functions.assertEquals(1, 2)).toBe("false");
  expect(functions.assertEquals(2, 2)).toBe("true");
  expect(functions.assertEquals("2", 2)).toBe("false");
  expect(functions.assertEquals("This value", "This value")).toBe("true");
});

/*
    Write a function to format an email based on an array.
*/

test("email builder from an array", () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"])).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual(
    "bill.smith@evolveu.ca"
  );
});

/*	
	Write the function to format an email based on an object / map
*/

test("email builder from an object / map", () => {
  const name = { fname: "first", lname: "last" };
  expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "First", lname: "Last" })).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual(
    "bill.smith@evolveu.ca"
  );
});

/* Create an example for: 
  -loop for
  - while
  - do while
  - for in
  - for of*/

test("Check loop for in an array", () => {
  expect(functions.forLoop(["BMW", "Volvo", "Audi"])).toEqual([
    "BMW",
    "Volvo",
    "Audi"
  ]);
});

test("Check loop while in an array", () => {
  expect(functions.forLoop(["BMW", "Volvo", "Audi"])).toEqual([
    "BMW",
    "Volvo",
    "Audi"
  ]);
});

test("Check loop do while in an array", () => {
  expect(functions.forLoop(["BMW", "Volvo", "Audi"])).toEqual([
    "BMW",
    "Volvo",
    "Audi"
  ]);
});

test("Check loop for in", () => {
  expect(functions.loopForIn()).toEqual("Tim Horton 25 ");
});

test("Check loop for of an array", () => {
  expect(functions.forOfLoop(["BMW", "Volvo", "Audi"])).toEqual(
    "BMW Volvo Audi "
  );
});
