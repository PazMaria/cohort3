class City {
  constructor(key, name, latitude, longitude, population) {
    this.key = key;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
  }

  show() {
    return `${this.name} is located at ${this.latitude} ${this.longitude} and it has a population of ${this.population}`;
  }

  movedIn(num) {
    this.population += num;
  }

  movedOut(num) {
    this.population -= num;
  }

  howBig() {
    switch (true) {
      case 1 < this.population && this.population <= 100:
        return "Hamlet - population 1 - 100";
        break;
      case this.population < 1000:
        return "Village - larger than a hamlet but smaller than a town";
        break;
      case this.population < 20000:
        return "Town - a town has a population of 1,000 to 20,000";
        break;
      case this.population <= 100000:
        return "Large town - a large town has a population of 20,000 to 100,000";
        break;
      case this.population > 100000:
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
        if (element.latitude === lat && element.longitude === long) {
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

  deleteCity(cityKey) {
    let cityToRemove;
    this.cities.forEach(function(element) {
      if (element.key === cityKey) {
        cityToRemove = element;
      }
    });
    this.cities.splice(this.cities.indexOf(cityToRemove), 1);
  }

  whichSphere(city) {
    let message;
    this.cities.forEach(function(element) {
      if (element.name === city) {
        if (element.latitude > 0) {
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

  mapObject() {
    return this.cities.map(function(city) {
      return city.latitude;
    });
  }

  getMostNorthern(arrayLatitude) {
    return Number(Math.max(...arrayLatitude));
  }

  getMostSouththern(arrayLatitude) {
    return Number(Math.min(...arrayLatitude));
  }

  getPopulation() {
    let totalPop = this.cities.reduce(
      (accumulator, city) => accumulator + city.population,
      0
    );
    return totalPop;
  }
}

const functions = {
  keyId: 0,

  newCityDiv: (node, cName, aValue) => {
    functions.keyId++;
    const newCard = document.createElement("div");

    node.appendChild(newCard);
    newCard.className = "card";
    newCard.setAttribute("cityId", functions.keyId);
    const name = document.createElement("span");
    const amount = document.createElement("input");
    const moveIn = document.createElement("input");
    const moveOut = document.createElement("input");
    const del = document.createElement("input");
    name.textContent = cName;
    amount.setAttribute("type", "number");
    amount.setAttribute("id", "idAmount");

    moveIn.setAttribute("type", "button");
    moveIn.setAttribute("value", "Move In");
    moveIn.setAttribute("id", "idMoveIn");
    moveOut.setAttribute("type", "button");
    moveOut.setAttribute("value", "Move Out");
    moveOut.setAttribute("id", "idMoveOut");
    del.setAttribute("type", "button");
    del.setAttribute("value", "Delete City");
    del.setAttribute("id", "idDel");

    newCard.appendChild(name);
    newCard.appendChild(amount);
    newCard.appendChild(moveIn);
    newCard.appendChild(moveOut);
    newCard.appendChild(del);
    console.log(functions.keyId);
    return newCard;
  },
  delCityDiv: card => {
    card.remove();
  }
};

export { City, Community, functions };
