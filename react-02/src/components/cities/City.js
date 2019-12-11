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
      <div className="card">
        <span id="name">{this.props.city.Name}</span>
        <span id="latitude">{this.props.city.Latitude}</span>
        <span id="longitude">{this.props.city.Longitude}</span>
        <span id="population">{this.props.city.Population}</span>
        <input type="number" id="idAmount" />
        <input type="button" value="Move In" />
        <input type="button" value="Delete City" />
        <input type="button" value="Move Out" />
      </div>
    );
  }
}

export default City;
