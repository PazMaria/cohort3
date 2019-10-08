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

// test("Check the sizes", () => {
//   console.log("daily");
// });
