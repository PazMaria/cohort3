import functions from "./fetch.js";

const data = [
  { name: "Amelia", surname: "Powell", gender: "female", region: "England" },
  { name: "Σωτήριος", surname: "Ταρσούλη", gender: "male", region: "Greece" },
  { name: "Μενοίτιος", surname: "Παχής", gender: "male", region: "Greece" },
  { name: "Nazan", surname: "Özkan", gender: "female", region: "Turkey" },
  { name: "Anda", surname: "Davidovici", gender: "female", region: "Romania" },
  { name: "Bénfi", surname: "Domokos", gender: "male", region: "Hungary" },
  { name: "Gyöngyösi", surname: "Miklós", gender: "male", region: "Hungary" },
  { name: "Fekete", surname: "Edina", gender: "female", region: "Hungary" },
  { name: "Lotta", surname: "Häyhä", gender: "female", region: "Finland" },
  { name: "Thomas", surname: "Guyot", gender: "male", region: "France" }
];

test("Return first person name", () => {
  expect(functions.getFirstName(data)).toEqual("Amelia");
});

test("Return first name of all persons", () => {
  expect(functions.getAllFirstNames(data)).toEqual([
    "Amelia",
    "Σωτήριος",
    "Μενοίτιος",
    "Nazan",
    "Anda",
    "Bénfi",
    "Gyöngyösi",
    "Fekete",
    "Lotta",
    "Thomas"
  ]);
});
