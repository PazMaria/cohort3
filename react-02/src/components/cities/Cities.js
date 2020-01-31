import React from "react";
import "../../../src/cities.css";
import City from "./City.js";
import { Community, functions } from "./scripts/cities.js";
import apiFunctions from "./scripts/api.js";

let newKey = 0;

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cName: "",
      cLat: 0,
      cLong: 0,
      cPop: 0,
      cityExist: "",
      message: "",
      mostNorth: "",
      mostSouth: "",
      totPop: 0
    };

    this.city = new Community();
  }

  componentDidMount = async () => {
    const errorMessage = await apiFunctions.loadData(this.city);
    if (errorMessage) {
      this.setState({
        message: errorMessage
      });
    } else {
      this.setState({
        cityExist: ""
      });
      if (this.city.cities.length > 0) {
        newKey = this.city.cities[this.city.cities.length - 1].key;
        this.calculationsDiv();
      } else {
        this.setState({
          message: "Server database is empty."
        });
      }
    }
  };

  renderCities = () => {
    return this.city.cities.map(city => {
      return (
        <City
          key={city.key}
          city={city}
          deleteCity={this.deleteCity}
          calculationsDiv={this.calculationsDiv}
        />
      );
    });
  };

  calculationsDiv = () => {
    if (this.city.cities.length > 0) {
      const mostNorthern = this.city.getMostNorthern().Name;
      const mostSouthern = this.city.getMostSouthern().Name;
      const totalPopulation = this.city.getPopulation();

      this.setState({
        mostNorth: mostNorthern,
        mostSouth: mostSouthern,
        totPop: totalPopulation
      });
    } else {
      this.setState({
        mostNorth: "",
        mostSouth: "",
        totPop: 0
      });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addCity = async () => {
    newKey++;
    await this.setState({
      cityExist: this.city.createCity(
        newKey,
        this.state.cName,
        this.state.cLat,
        this.state.cLong,
        this.state.cPop
      ),
      message: this.state.cityExist
    });

    if (this.state.cityExist === "City created") {
      let errorMessage = await apiFunctions.addCity(
        this.city.cities[this.city.cities.length - 1]
      );
      if (errorMessage === "Error from server") {
        this.setState({
          message: errorMessage
        });
        this.city.deleteCity(newKey);
        newKey--;
      } else {
        this.calculationsDiv();
      }
    } else {
      newKey--;
      this.setState({ message: this.state.cityExist });
    }
    await this.setState({
      cName: "",
      cLat: 0,
      cLong: 0,
      cPop: 0
    });
  };

  deleteCity = async cityToDel => {
    const errorMessage = await apiFunctions.deleteCity(cityToDel);
    if (errorMessage) {
      this.setState({
        message: errorMessage
      });
    } else {
      this.city.deleteCity(cityToDel);
      this.setState({
        cityExist: ""
      });
      this.calculationsDiv();
    }
  };

  render() {
    return (
      <div className="cityContainer" id="idContainer">
        <div className="topDiv">
          City Name:
          <input
            id="idName"
            type="text"
            name="cName"
            onChange={this.onChange}
          />
          <br />
          Latitude:
          <input
            id="idLat"
            type="number"
            name="cLat"
            onChange={this.onChange}
          />
          Longitude:
          <input
            id="idLong"
            type="number"
            name="cLong"
            onChange={this.onChange}
          />
          Population:
          <input
            id="idPop"
            type="number"
            name="cPop"
            onChange={this.onChange}
          />
          <input
            id="idNewCity"
            type="button"
            value="Add City"
            onClick={this.addCity}
          />
        </div>
        <div id="idMsg">{this.state.message}</div>
        <div className="calculationDiv">
          <span>Most Northern: {this.state.mostNorth}</span>
          <span>Most Southern: {this.state.mostSouth}</span>
          <span> Total Population:{this.state.totPop}</span>
        </div>
        <div className="cardContain" id="bottomDiv">
          {this.renderCities()}
        </div>
      </div>
    );
  }
}

export default Cities;
