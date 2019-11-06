class City {
  constructor(name, latitude, longitude, population) {
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
}

export { City };
