import { City, Community } from "./city.js";

test("check show method", () => {
  const city = new City("Calgary", 51.0447, "114.0719 W", 1285711);

  expect(city.show()).toBe(
    "Calgary is located at 51.0447 114.0719 W and it has a population of 1285711"
  );
});

test("check movedIn method", () => {
  const city = new City("Calgary", 51.0447, "114.0719 W", 1285711);
  city.movedIn(200);
  expect(city.population).toBe(1285911);
});

test("check movedOut method", () => {
  const city = new City("Calgary", 51.0447, "114.0719 W", 1285711);
  city.movedOut(200);
  expect(city.population).toBe(1285511);
});
test("check howBig method", () => {
  const city1 = new City("Calgary", 51.0447, "114.0719 W", 1285711);
  expect(city1.howBig()).toBe("City - a population > 100,000");

  const city2 = new City("Hamlet", 51.0447, "114.0719 W", 99);
  expect(city2.howBig()).toBe("Hamlet - population 1 - 100");

  const city3 = new City("Village", 51.0447, "114.0719 W", 500);
  expect(city3.howBig()).toBe(
    "Village - larger than a hamlet but smaller than a town"
  );

  const city4 = new City("Town", 51.0447, "114.0719 W", 18000);
  expect(city4.howBig()).toBe(
    "Town - a town has a population of 1,000 to 20,000"
  );

  const city5 = new City("Large", 51.0447, "114.0719W", 80000);
  expect(city5.howBig()).toBe(
    "Large town - a large town has a population of 20,000 to 100,000"
  );
});

test("check createCity method", () => {
  const city = new Community();
  city.createCity("Calgary", 51.0447, "114.0719 W", 1285711);
  expect(city.cities[0].name).toBe("Calgary");
});

test("check whichSphere method", () => {
  const city = new Community();
  city.createCity("Calgary", 51.0447, "114.0719 W", 1285711);
  expect(city.whichSphere("Calgary")).toBe("Northern Hemisphere");

  const city2 = new Community();
  city2.createCity("Cordoba", -31.4201, "64.1888 W", 1391000);
  expect(city2.whichSphere("Cordoba")).toBe("Southern Hemisphere");
});

test("check getMostNorthern method", () => {
  const city = new Community();
  let arrayOfLatitudes = [-31.4201, 51.0447, 53.5461];
  expect(city.getMostNorthern(arrayOfLatitudes)).toEqual(53.5461);
});

test("check getMostSouthern method", () => {
  const city = new Community();
  let arrayOfLatitudes = [-31.4201, 51.0447, 53.5461];
  expect(city.getMostSouththern(arrayOfLatitudes)).toEqual(-31.4201);
});

test("check getPopulation method", () => {
  const city = new Community();
  city.createCity("Calgary", 51.0447, "114.0719 W", 1285711);
  expect(city.getPopulation()).toEqual(1285711);
});

test("check deleteCity method", () => {
  const city = new Community();
  city.createCity("Calgary", 51.0447, "114.0719 W", 1285711);
  let citiesLength = city.cities.length;
  city.deleteCity("Calgary");
  expect(citiesLength).toEqual(citiesLength--);
});
