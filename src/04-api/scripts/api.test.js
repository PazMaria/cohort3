import { City, Community } from "./city.js";
import apiFunctions from "./api.js";

global.fetch = require("node-fetch");
const url = "http://localhost:5000/";

test("test that the fetch works?", async () => {
  const cities = [
    { key: 1, name: "Calgary", latitude: 34, longitude: 23, population: 500 }
  ];

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
  expect(data[0].name).toBe("Calgary");

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
