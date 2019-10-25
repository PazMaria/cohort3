const functions = {
  /* Daily exercise - October 24, 2019
loopStaffIn*/
  loopStaffIn: arr => {
    let names = [];
    for (let i in arr) {
      names.push(functions.makeEmailObj(arr[i]));
    }
    return names;
    // return [];
  },

  loopStaffOf: arr => {
    let names = [];
    for (let i of arr) {
      names.push(functions.makeEmailObj(i));
    }
    return names;
    // return [];
  },

  /* Daily exercise - October 21, 2019
loopStaff*/

  loopStaff: arr => {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
      names.push(functions.makeEmailObj(arr[i]));
    }
    return names;
    // return 0;
  },

  /* Daily exercise - October 16-17, 2019
Working with Arrays*/

  //slice
  examSlice: (arr, start, end) => {
    let result = arr.slice(start, end);
    // return 0;
    return result;
  },

  //splice
  examSplice: (arr, pos, rem, ele) => {
    arr.splice(pos, rem, ele);
    // return 0;
    return arr;
  },

  //forEach
  examForEach: arr => {
    let result = "";
    arr.forEach(element => {
      result += element + ", ";
    });
    // return 0;
    return result;
  },

  //map
  examMap: arr => {
    let newArr;
    newArr = arr.map(funcDouble);
    function funcDouble(item) {
      return item * 2;
    }
    // return 0;
    return newArr;
  },

  //reduce
  examReduce: arr => {
    let newArr;
    newArr = arr.reduce((total, amount) => total + amount);
    // return 0;
    return newArr;
  },

  //filter
  examFilter: arr => {
    let newArr;
    newArr = arr.filter(num => num > 18);
    // return 0;
    return newArr;
  },

  //sort
  examSort: arr => {
    let newArr;
    newArr = arr.sort();
    // return 0;
    return newArr;
  },

  /*---------------------------------------*/

  /*
Write the function that will create this output:

*** the two values are not the same:
  p1--> a
  p2--> b
*** the two values are not the same:
  p1--> 1
  p2--> 2
*** the two values are not the same:
  p1--> 2
  p2--> 2
*/

  // Write the function after this comment ---

  assertEquals: (p1, p2) => {
    if (p1 === p2) {
      return "true";
    } else {
      console.log("the two values are not the same");
      console.log("P1-->)" + p1);
      console.log("P2-->)" + p2);
      return "false";
    }
  },

  // and before this comment ---

  // assertEquals("a", "b");
  // assertEquals("a", "a");
  // assertEquals(1, 2);
  // assertEquals(2, 2);
  // assertEquals("2", 2);
  // assertEquals("This value", "This value");

  //make email from array
  makeEmailArr: anArray => {
    return (
      anArray[0].toLowerCase() + "." + anArray[1].toLowerCase() + "@evolveu.ca"
    );
    // return 0;
  },

  //make email from object
  makeEmailObj: anObj => {
    return (
      anObj.fname.toLowerCase() +
      "." +
      anObj.lname.toLowerCase() +
      "@evolveu.ca"
    );
    // return 0;
  },

  //Example of loop for in an array

  forLoop: arr => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[i]);
    }
    // return 0;
    return newArray;
  },

  //Example of loop while in an array

  forLoop: arr => {
    let newArray = [];
    let i = 0;
    while (i < arr.length) {
      newArray.push(arr[i]);
      i++;
    }
    // return 0;
    return newArray;
  },

  //Example of loop do while in an array

  forLoop: arr => {
    let newArray = [];
    let i = 0;
    do {
      newArray.push(arr[i]);
      i++;
    } while (i < arr.length);
    // return 0;
    return newArray;
  },

  //Example of for in, in an array

  loopForIn: () => {
    const person = { fname: "Tim", lname: "Horton", age: 25 };
    let result = "";
    let i;
    for (i in person) {
      result += person[i] + " ";
    }
    // return 0;
    return result;
  },

  //Example of loop for of an array

  forOfLoop: arr => {
    let result = "";
    let i;
    for (i of arr) {
      result += i + " ";
    }
    // return 0;
    return result;
  }
};

export default functions;
