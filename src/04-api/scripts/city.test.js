import { City } from "./city.js";

test("check show method", () => {
  const city = new City("Calgary", "51.0447° N", "114.0719° W", 1285711);

  expect(city.show()).toBe(
    "Calgary is located at 51.0447° N 114.0719° W and it has a population of 1285711"
  );
});

test("check movedIn method", () => {
  const city = new City("Calgary", "51.0447° N", "114.0719° W", 1285711);
  city.movedIn(200);
  expect(city.population).toBe(1285911);
});

test("check movedOut method", () => {
  const city = new City("Calgary", "51.0447° N", "114.0719° W", 1285711);
  city.movedOut(200);
  expect(city.population).toBe(1285511);
});
