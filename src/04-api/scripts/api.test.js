import { City, Community } from "./cities.js";
import apiFunctions from "./api.js";

global.fetch = require("node-fetch");
const url = "http://localhost:5000/";

const cities = [
  { key: 1, Name: "Calgary", Latitude: 34, Longitude: 23, Population: 1500 },
  {
    key: 2,
    Name: "Edmonton",
    Latitude: 78,
    Longitude: 66,
    Population: 43500
  },
  { key: 3, Name: "Cordoba", Latitude: -34, Longitude: 23, Population: 11500 }
];

test("test that the fetch works?", async () => {
  // Check that the server is running and clear any data
  let data = await apiFunctions.postData(url + "clear");

  data = await apiFunctions.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data.length).toBe(0);

  data = await apiFunctions.postData(url + "add", cities[0]);
  expect(data.status).toEqual(200);

  data = await apiFunctions.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data.length).toBe(1);
  expect(data[0].Name).toBe("Calgary");

  //   // add a second with the same key which should be an error
  //   data = await postData(url + "add", cities[0]);
  //   expect(data.status).toEqual(400);

  //   // add a second which should be ok
  //   data = await postData(url + "add", cities[1]);
  //   expect(data.status).toEqual(200);

  //   data = await postData(url + "all");
  //   expect(data.status).toEqual(200);
  //   expect(data.length).toBe(2);
  //   expect(data[1].name).toBe("Lorraine");

  //   data = await postData(url + "read", { key: 1 });
  //   expect(data.status).toEqual(200);
  //   expect(data.length).toBe(1);
  //   expect(data[0].name).toBe("Larry");

  //   data = await postData(url + "update", { key: 1, name: "George" });
  //   expect(data.status).toEqual(200);

  //   data = await postData(url + "read", { key: 1 });
  //   expect(data.status).toEqual(200);
  //   expect(data.length).toBe(1);
  //   expect(data[0].name).toBe("George");

  //   data = await postData(url + "delete", { key: 1 });
  //   expect(data.status).toEqual(200);

  //   data = await postData(url + "read", { key: 1 });
  //   expect(data.status).toEqual(400);
});

test("adds city to server", async () => {
  await apiFunctions.postData(url + "clear");
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285711);
  let newCity = city.cities[city.cities.length - 1];
  await apiFunctions.addCity(newCity);

  let data = await apiFunctions.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data.length).toBe(1);
  expect(data[0].Name).toEqual("Calgary");

  expect(city.cities[0]).toEqual(data[0]);
});

test("deletes city in server", async () => {
  let data = await apiFunctions.postData(url + "clear");
  data = await apiFunctions.postData(url + "add", cities[0]);
  data = await apiFunctions.postData(url + "add", cities[1]);
  data = await apiFunctions.postData(url + "all");
  await apiFunctions.deleteCity(1);
  data = await apiFunctions.postData(url + "all");
  expect(data[0].Name).toBe("Edmonton");
});

test("updates city with moveIn in server", async () => {
  let data = await apiFunctions.postData(url + "clear");
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285700);

  data = await apiFunctions.addCity(city.cities[city.cities.length - 1]);

  data = await apiFunctions.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data[0].Population).toBe(1285700);

  let newCity = city.cities[0];
  newCity.movedIn(200);

  data = await apiFunctions.updateCity(city.cities[0]);

  data = await apiFunctions.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data[0].Population).toBe(1285900);
});

test("updates city with moveOut in server", async () => {
  let data = await apiFunctions.postData(url + "clear");
  const city = new Community();
  city.createCity(1, "Calgary", 51.0447, 114.0719, 1285700);

  data = await apiFunctions.addCity(city.cities[city.cities.length - 1]);

  data = await apiFunctions.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data[0].Population).toBe(1285700);

  let newCity = city.cities[0];
  newCity.movedOut(200);

  data = apiFunctions.updateCity(city.cities[0]);
  data = await apiFunctions.postData(url + "all");
  expect(data.status).toEqual(200);
  expect(data[0].Population).toBe(1285500);
});
