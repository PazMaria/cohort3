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
      cLat: "",
      cLong: "",
      cPop: "",
      cityExist: "",
      message: ""
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
      if (this.city.cities.length > 0) {
        newKey = this.city.cities[this.city.cities.length - 1].key;
      } else {
        this.setState({
          message: "Server database is empty."
        });
      }
    }
  };

  renderCities = () => {
    return this.city.cities.map(city => {
      return <City key={city.key} city={city} />;
    });
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
      )
      //   message: this.state.cityExist
    });

    if (this.state.cityExist === "City created") {
      let errorMessage = await apiFunctions.addCity(
        this.city.cities[this.city.cities.length - 1]
      );
      if (errorMessage === "Error from server") {
        //   idMsg.textContent = errorMessage;
        this.city.deleteCity(newKey);
        newKey--;
      } else {
        //   functions.newCityDiv(
        //       newKey,
        //       idWrapper,
        //       idName.value,
        //       Number(idLat.value),
        //       Number(idLong.value),
        //       Number(idPop.value)
        //   );
        //   if (!rightDiv.hasChildNodes()) {
        //       functions.calculationsDiv();
        //   }
        // idName.value = "";
        // idLat.value = "";
        // idLong.value = "";
        // idPop.value = "";
      }
    } else {
      newKey--;
      //   idMsg.textContent = cityExist;
    }
    this.setState({
      cName: "",
      cLat: "",
      cLong: "",
      cPop: ""
    });
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
        <div id="idMsg">Message</div>
        <div className="cardContain" id="bottomDiv">
          {this.renderCities()}
        </div>
      </div>
    );
  }
}

export default Cities;
