import React from "react";
import apiFunctions from "./scripts/api.js";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPop: 0
    };
  }

  inputChange = e => {
    this.setState({
      inputPop: e.target.value
    });
  };

  handleMoveIn = async () => {
    this.props.city.movedIn(Number(this.state.inputPop));
    const errorMessage = await apiFunctions.updateCity(this.props.city);
    if (errorMessage) {
      this.props.city.movedOut(Number(this.state.inputPop));
    }
    this.props.calculationsDiv();

    this.setState({
      inputPop: 0
    });
  };

  handleMoveOut = async () => {
    this.props.city.movedOut(Number(this.state.inputPop));
    const errorMessage = await apiFunctions.updateCity(this.props.city);
    if (errorMessage) {
      this.props.city.movedIn(Number(this.state.inputPop));
    }
    this.props.calculationsDiv();

    this.setState({
      inputPop: 0
    });
  };

  render() {
    return (
      <div className="cityCard">
        <span id="name">{this.props.city.Name}</span>
        <span id="latitude">Latitude: {this.props.city.Latitude}</span>
        <span id="longitude">Longitude: {this.props.city.Longitude}</span>
        <span id="population">Population: {this.props.city.Population}</span>
        <input type="number" id="idAmount" onChange={this.inputChange} />
        <input
          className="moveIn"
          type="button"
          value="Move In"
          onClick={this.handleMoveIn}
        />
        <input
          className="delete"
          type="button"
          value="Delete City"
          onClick={() => this.props.deleteCity(this.props.city.key)}
        />
        <input
          className="moveOut"
          type="button"
          value="Move Out"
          onClick={this.handleMoveOut}
        />
      </div>
    );
  }
}

export default City;
