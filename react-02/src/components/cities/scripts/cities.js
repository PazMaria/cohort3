class City {
  constructor(key, name, latitude, longitude, population) {
    this.key = key;
    this.Name = name;
    this.Latitude = latitude;
    this.Longitude = longitude;
    this.Population = Number(population);
  }

  show() {
    return `${this.Name} is located at ${this.Latitude} ${this.Longitude} and it has a population of ${this.Population}`;
  }

  movedIn(num) {
    this.Population += num;
  }

  movedOut(num) {
    this.Population -= num;
  }

  howBig() {
    switch (true) {
      case 1 < this.Population && this.Population <= 100:
        return "Hamlet - population 1 - 100";
        break;
      case this.Population < 1000:
        return "Village - larger than a hamlet but smaller than a town";
        break;
      case this.Population < 20000:
        return "Town - a town has a population of 1,000 to 20,000";
        break;
      case this.Population <= 100000:
        return "Large town - a large town has a population of 20,000 to 100,000";
        break;
      case this.Population > 100000:
        return "City - a population > 100,000";
        break;
    }
  }
}

class Community {
  constructor() {
    this.cities = [];
  }

  createCity(key, name, lat, long, pop) {
    let message;
    if (this.cities.length === 0) {
      const newCity = new City(key, name, lat, long, pop);
      this.cities.push(newCity);
      message = "City created";
    } else {
      this.cities.forEach(function(element) {
        if (element.Latitude === lat && element.Longitude === long) {
          message = "City already entered";
        } else {
          message = "City created";
        }
      });
      if (message === "City created") {
        const newCity = new City(key, name, lat, long, pop);
        this.cities.push(newCity);
      }
    }
    return message;
  }

  deleteCity(ckey) {
    this.cities = this.cities.filter(city => city.key !== ckey);
  }

  whichSphere(city) {
    let message;
    this.cities.forEach(function(element) {
      if (element.Name === city) {
        if (element.Latitude > 0) {
          message = "Northern Hemisphere";
        } else {
          message = "Southern Hemisphere";
        }
      } else {
        message = "City doesn't exist";
      }
    });
    return message;
  }

  getMostNorthern() {
    return this.cities.slice().sort((a, b) => b.Latitude - a.Latitude)[0];
  }

  getMostSouthern() {
    return this.cities.slice().sort((a, b) => a.Latitude - b.Latitude)[0];
  }

  getPopulation() {
    let totalPop = this.cities.reduce(
      (accumulator, city) => accumulator + city.Population,
      0
    );
    return totalPop;
  }
}

export { City, Community };
