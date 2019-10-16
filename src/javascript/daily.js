import { arrayExpression } from "@babel/types";

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
// const equal (num1, num2) => {

const functions = {
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
