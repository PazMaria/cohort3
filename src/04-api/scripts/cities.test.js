import { City, Community } from "./cities.js";

test("check show method", () => {
  const city = new City(1, "Calgary", 51.0447, 114.0719, 1285711);

  expect(city.show()).toBe(
    "Calgary is located at 51.0447 114.0719 and it has a population of 1285711"
  );
});

test("check movedIn method", () => {
  const city = new City(1, "Calgary", 51.0447, 114.0719, 1285711);
  city.movedIn(200);
  expect(city.Population).toEqual(1285911);
});

test("check movedOut method", () => {
  const city = new City(1, "Calgary", 51.0447, 114.0719, 1285711);
  city.movedOut(200);
  expect(city.Population).toEqual(1285511);
});
test("check howBig method", () => {
  const city1 = new City(1, "Calgary", 51.0447, 114.0719, 1285711);
  expect(city1.howBig()).toBe("City - a population > 100,000");

  const city2 = new City(2, "Hamlet", 51.0447, 114.0719, 99);
  expect(city2.howBig()).toBe("Hamlet - population 1 - 100");

  const city3 = new City(3, "Village", 51.0447, 114.0719, 500);
  expect(city3.howBig()).toBe(
    "Village - larger than a hamlet but smaller than a town"
  );

  const city4 = new City(4, "Town", 51.0447, 114.0719, 18000);
  expect(city4.howBig()).toBe(
    "Town - a town has a population of 1,000 to 20,000"
  );

  const city5 = new City(5, "Large", 51.0447, 114.0719, 80000);
  expect(city5.howBig()).toBe(
    "Large town - a large town has a population of 20,000 to 100,000"
  );
});

test("check createCity method", () => {
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285711);
  expect(city.cities[0].Name).toBe("Calgary");
});

test("check whichSphere method", () => {
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285711);
  expect(city.whichSphere("Calgary")).toBe("Northern Hemisphere");

  const city2 = new Community();
  city2.createCity(2, "Cordoba", -31.4201, 64.1888, 1391000);
  expect(city2.whichSphere("Cordoba")).toBe("Southern Hemisphere");
});

test("check getMostNorthern method", () => {
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285711);
  city.createCity(2, "Cordoba", -31.4201, 64.1888, 1391000);

  expect(city.getMostNorthern()).toEqual({
    key: 1,
    Name: "Calgary",
    Latitude: 51.0447,
    Longitude: 114.0719,
    Population: 1285711
  });
});

test("check getMostSouthern method", () => {
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285711);
  city.createCity(2, "Cordoba", -31.4201, 64.1888, 1391000);
  expect(city.getMostSouthern()).toEqual({
    key: 2,
    Name: "Cordoba",
    Latitude: -31.4201,
    Longitude: 64.1888,
    Population: 1391000
  });
});

test("check getPopulation method", () => {
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285711);
  city.createCity(2, "Cordoba", -31.4201, 64.1888, 1391000);
  expect(city.getPopulation()).toEqual(2676711);
});

test("check deleteCity method", () => {
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285711);
  city.createCity(2, "Cordoba", -31.4201, 64.1888, 1391000);
  let citiesLength = city.cities.length;
  city.deleteCity(1);
  expect(citiesLength).toEqual(citiesLength--);
});

test("130E-Create myCity", () => {
  let myCity = new City(1, "Calgary", 51.0447, 114.0719, 1285711);
  let myFav = myCity;
  expect(myCity.Population).toEqual(myFav.Population);

  myCity.movedIn(200);
  expect(myCity.Population).toEqual(1285911);

  expect(myCity.Population).toEqual(myFav.Population);
});
