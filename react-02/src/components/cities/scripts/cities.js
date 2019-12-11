class City {
  constructor(key, name, latitude, longitude, population) {
    this.key = key;
    this.Name = name;
    this.Latitude = latitude;
    this.Longitude = longitude;
    this.Population = population;
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

const functions = {
  //   newCityDiv: (keyId, node, cName, cLat, cLong, cPop) => {
  //     const newCard = document.createElement("div");
  //     newCard.setAttribute("cityId", keyId);
  //     newCard.className = "swiper-slide";
  //     const card = document.createElement("div");
  //     card.className = "card";
  //     const slider = document.createElement("div");
  //     slider.className = "sliderText";
  //     const cardName = document.createElement("h3");
  //     cardName.textContent = cName;
  //     const content = document.createElement("div");
  //     content.className = "content";
  //     const textLat = document.createElement("p");
  //     textLat.textContent = `Latitude: ${cLat}`;
  //     const textLon = document.createElement("p");
  //     textLon.textContent = `Longitude: ${cLong}`;
  //     const textPop = document.createElement("p");
  //     textPop.textContent = `Population: ${cPop}`;

  //     const buttDiv = document.createElement("div");
  //     const amount = document.createElement("input");
  //     const moveIn = document.createElement("input");
  //     const moveOut = document.createElement("input");
  //     const del = document.createElement("input");
  //     let messageDiv = document.createElement("div");
  //     messageDiv.id = "messageDiv";

  //     amount.type = "Number";
  //     amount.id = "idAmount";
  //     moveIn.setAttribute("type", "button");
  //     moveIn.setAttribute("value", "Move In");
  //     moveIn.className = "moveIn";
  //     moveOut.setAttribute("type", "button");
  //     moveOut.setAttribute("value", "Move Out");
  //     moveOut.className = "moveOut";
  //     del.setAttribute("type", "button");
  //     del.setAttribute("value", "Delete City");
  //     del.className = "Del";

  //     newCard.appendChild(card);
  //     card.appendChild(slider);
  //     slider.appendChild(cardName);
  //     card.appendChild(content);
  //     content.appendChild(textLat);
  //     content.appendChild(textLon);
  //     content.appendChild(textPop);
  //     content.appendChild(buttDiv);

  //     buttDiv.appendChild(amount);
  //     buttDiv.appendChild(moveIn);
  //     buttDiv.appendChild(moveOut);
  //     buttDiv.appendChild(del);
  //     content.appendChild(messageDiv);

  //     node.appendChild(newCard);

  //     return newCard;
  //   },
  delCityDiv: card => {
    card.remove();
  }

  //   calculationsDiv: () => {
  //     let mostNorthern = document.createElement("input");
  //     mostNorthern.setAttribute("type", "button");
  //     mostNorthern.id = "mostNorthern";
  //     mostNorthern.value = `Most Northern`;
  //     let mostSouthern = document.createElement("input");
  //     mostSouthern.setAttribute("type", "button");
  //     mostSouthern.id = "mostSouthern";
  //     mostSouthern.value = `Most Southern`;
  //     let totalPop = document.createElement("input");
  //     totalPop.setAttribute("type", "button");
  //     totalPop.id = "totalPop";
  //     totalPop.value = `Total Population`;
  //     let resultDiv = document.createElement("div");
  //     resultDiv.id = "resultDiv";
  //     rightDiv.appendChild(mostNorthern);
  //     rightDiv.appendChild(mostSouthern);
  //     rightDiv.appendChild(totalPop);
  //     rightDiv.appendChild(resultDiv);
  //   }
};

export { City, Community, functions };
