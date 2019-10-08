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
  }
};

export default functions;

// and before this comment ---

// assertEquals("a", "b");
// assertEquals("a", "a");
// assertEquals(1, 2);
// assertEquals(2, 2);
// assertEquals("2", 2);
// assertEquals("This value", "This value");
