import { City, Community } from "./cities.js";
const url = "http://localhost:5000/";

const apiFunctions = {
  async postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    const json = await response.json(); // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
  },

  async loadData(newCity) {
    try {
      let data = await this.postData(url + "all");
      newCity.cities = data.map(
        city =>
          new City(
            city.key,
            city.Name,
            city.Latitude,
            city.Longitude,
            city.Population
          )
      );
      return false;
    } catch (error) {
      return "Error from server.";
    }
  },

  async addCity(city) {
    try {
      await this.postData(url + "add", city);
      return false;
    } catch (error) {
      console.log(error);
      return "Error from server";
    }
  },

  async deleteCity(ckey) {
    try {
      await this.postData(url + "delete", { key: ckey });
      return false;
    } catch (error) {
      console.log(error);
      return "Server not responding. Failed to delete city.";
    }
  },

  async updateCity(city) {
    try {
      await this.postData(url + "update", city);
      return false;
    } catch (error) {
      console.log(error);
      return "Failed to update city population.";
    }
  },

  async getAllCities() {
    return await this.postData(url + "all");
  },

  async clearAllCities() {
    await this.postData(url + "clear");
  }
};

export default apiFunctions;
