import functions from "./daily";

/* Daily exercise - November 22, 2019*/

let myArray = [
  { num: 5, str: "apples", origin: "BC" },
  { num: 7, str: "oranges", origin: "Florida" },
  { num: 2, str: "lemons", origin: "Mexico" },
  { num: 8, str: "bananas", origin: "Ecuador" },
  { num: 6, str: "avocados", origin: "Mexico" },
  { num: 4, str: "pineapple", origin: "Brazil" },
  { num: 3, str: "blueberries", origin: "Chile" },
  { num: 9, str: "pears", origin: "Oregon" },
  { num: 1, str: "cantaloupe", origin: "California" }
];
//
// Do the statements below 3 times, one for each type of function
//
// myArray.sort(.....enter code here
// );
// console.log("myArray = ", myArray);

//Anonymous function that returns array sort by number ascending
test("return array sort by number ascending", () => {
  expect(functions.anonyFunc(myArray)).toEqual([
    { num: 1, str: "cantaloupe", origin: "California" },
    { num: 2, str: "lemons", origin: "Mexico" },
    { num: 3, str: "blueberries", origin: "Chile" },
    { num: 4, str: "pineapple", origin: "Brazil" },
    { num: 5, str: "apples", origin: "BC" },
    { num: 6, str: "avocados", origin: "Mexico" },
    { num: 7, str: "oranges", origin: "Florida" },
    { num: 8, str: "bananas", origin: "Ecuador" },
    { num: 9, str: "pears", origin: "Oregon" }
  ]);
});
//Named function that returns array sort by fruit name
test("return array sort by fruit name", () => {
  expect(functions.namedFunc(myArray)).toEqual([
    { num: 5, str: "apples", origin: "BC" },
    { num: 6, str: "avocados", origin: "Mexico" },
    { num: 8, str: "bananas", origin: "Ecuador" },
    { num: 3, str: "blueberries", origin: "Chile" },
    { num: 1, str: "cantaloupe", origin: "California" },
    { num: 2, str: "lemons", origin: "Mexico" },
    { num: 7, str: "oranges", origin: "Florida" },
    { num: 9, str: "pears", origin: "Oregon" },
    { num: 4, str: "pineapple", origin: "Brazil" }
  ]);
});
//Arrow function that returns array sort by origin in reverse order
test("return array sort by origin in reverse", () => {
  expect(functions.arrowFunc(myArray)).toEqual([
    { num: 9, str: "pears", origin: "Oregon" },
    { num: 6, str: "avocados", origin: "Mexico" },
    { num: 2, str: "lemons", origin: "Mexico" },
    { num: 7, str: "oranges", origin: "Florida" },
    { num: 8, str: "bananas", origin: "Ecuador" },
    { num: 3, str: "blueberries", origin: "Chile" },
    { num: 1, str: "cantaloupe", origin: "California" },
    { num: 4, str: "pineapple", origin: "Brazil" },
    { num: 5, str: "apples", origin: "BC" }
  ]);
});

/* Daily exercise - November 8, 2019*/
const callFunc = obj => {
  return obj;
};

const people = [
  { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
  { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
  { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
  { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
  { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
  { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
  { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
  { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
  { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
  { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
  { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
  { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
  { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
  { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
  { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
  { fname: "James", lname: "Kramer", province: "AB", age: 57 },
  { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
  { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
  { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
  { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
  { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
  { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
  { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
  { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
  { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
  { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
  { fname: "Luis", lname: "Price", province: "BC", age: 23 },
  { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
  { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
  { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
  { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
  { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
  { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
  { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
  { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
  { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
  { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
  { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
  { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
  { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
  { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
  { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

//Create a function that returns object  with totals

test("return object with total population, total age and average age", () => {
  let expectObj = functions.calculateTotal(people);

  expect(expectObj).toEqual({ totalPop: 22, totalAge: 838, averageAge: 38 });
});

//Return people from BC or Alberta
test("return people from BC or Alberta", () => {
  expect(functions.onlyBcAb(people, callFunc)).toEqual([
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 }
  ]);
});

//Create an array of full names
test("return array of full names", () => {
  let expectArr = [];
  for (let i = 0; i < people.length; i++) {
    expectArr.push(functions.fullNames(people[i]));
  }
  expect(expectArr).toEqual([
    "Alex Smith",
    "Angela Jones",
    "Anne Bird",
    "Brent Riddle",
    "Byron Cardenas",
    "Carrie Ramirez",
    "Cheryl Glenn",
    "Dima Curry",
    "Dustin Bullock",
    "Eva Keiths",
    "Faith Liu",
    "Fawad Bowman",
    "Forest Vaughn",
    "Giovanni Browning",
    "Greg Hogan",
    "Harpreet Ramsey",
    "Ian Fitzgerald",
    "James Kramer",
    "Jarvis Ortega",
    "Jawad Huerta",
    "Jinbong Robinson",
    "Jingnan Hatfield",
    "Joe Banks",
    "Kristina Dalton",
    "Latora Matthews",
    "Lauren McClure",
    "Licedt Rasmussen",
    "Linden Pierce",
    "Luis Price",
    "Marcela Perez",
    "Marilou Graham",
    "Matt Novak",
    "Monica Giles",
    "Niloufar Carson",
    "Omar Olson",
    "Roger Woodard",
    "Roman Swanson",
    "Seun Kelly",
    "Shane Frost",
    "Steven Haynes",
    "Thomas Hart",
    "Trent Kerr",
    "Darrell Koch",
    "Tylor Torres"
  ]);
});

//Return an array with full names of people from AB or BC

test("return array of full names from BC or AB", () => {
  expect(functions.onlyBcAb(people, functions.fullNames)).toEqual([
    "Alex Smith",
    "Angela Jones",
    "Byron Cardenas",
    "Carrie Ramirez",
    "Dustin Bullock",
    "Eva Keiths",
    "Forest Vaughn",
    "Giovanni Browning",
    "Ian Fitzgerald",
    "James Kramer",
    "Jinbong Robinson",
    "Jingnan Hatfield",
    "Latora Matthews",
    "Lauren McClure",
    "Luis Price",
    "Marcela Perez",
    "Monica Giles",
    "Niloufar Carson",
    "Roman Swanson",
    "Seun Kelly",
    "Thomas Hart",
    "Trent Kerr"
  ]);
});

const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 }
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

/* Daily exercise - November 6, 2019*/

//array with balances >= 1000
test("return balances >= 1000", () => {
  expect(functions.balanceAbove(data.staff)).toEqual([1000, 1330]);
});

/* Daily exercise - October 29, 2019*/

//total balance
test("return total balances", () => {
  expect(functions.totalBalance(data.staff)).toEqual(3823);
});

//average balance
test("return average balances", () => {
  expect(functions.averageBalance(data.staff)).toEqual(3823 / 7);
});

/* Daily exercise - October 25, 2019
loopStaffForEach*/
test("email staff with forEach", () => {
  const staffEmail = functions.loopStaffForEach(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

// loopStaffMap

test("email staff with Map", () => {
  const staffEmail = functions.loopStaffMap(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

/* Daily exercise - October 24, 2019
loopStaffIn*/
test("email staff with loop in", () => {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

// loopStaffOf
test("email staff with loop of", () => {
  const staffEmail = functions.loopStaffOf(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

/* Daily exercise - October 21, 2019
loopStaff*/
test("email builder for company", () => {
  const staffEmail = functions.loopStaff(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

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
  expect(
    functions.examSort(["Smith", "Johnson", "Williams", "Jones"])
  ).toEqual(["Johnson", "Jones", "Smith", "Williams"]);
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
