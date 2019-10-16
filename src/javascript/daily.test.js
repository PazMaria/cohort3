import functions from "./daily";

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
