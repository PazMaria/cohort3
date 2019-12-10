import React from "react";
import "../../../src/cities.css";

class City extends React.Component {
  render() {
    return (
      <div className="cityContainer" id="idContainer">
        <div className="topDiv">
          City Name:
          <input id="idName" type="text" />
          <br />
          Latitude:
          <input id="idLat" type="number" />
          Longitude:
          <input id="idLong" type="number" />
          Population:
          <input id="idPop" type="number" />
          <input id="idNewCity" type="button" value="Add City" />
        </div>
        <div id="idMsg"></div>
        <div className="cardContain" id="bottomDiv"></div>
      </div>

      /* <div className="main" id="idMain">
          <div className="swiper-container">
            <div className="swiper-wrapper" id="idWrapper"></div>
          </div>
        </div> */
    );
  }
}

export default City;
