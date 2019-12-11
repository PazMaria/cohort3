import React from "react";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAmount: ""
    };
  }

  render() {
    return (
      <div className="cityCard">
        <span id="name">{this.props.city.Name}</span>
        <span id="latitude">Latitude: {this.props.city.Latitude}</span>
        <span id="longitude">Longitude: {this.props.city.Longitude}</span>
        <span id="population">Population: {this.props.city.Population}</span>
        <input type="number" id="idAmount" />
        <input className="moveIn" type="button" value="Move In" />
        <input
          className="delete"
          type="button"
          value="Delete City"
          onClick={() => this.props.deleteCity(this.props.city.key)}
        />
        <input className="moveOut" type="button" value="Move Out" />
      </div>
    );
  }
}

export default City;
