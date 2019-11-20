import React, { Component } from "react";
import logo from "./logo.svg";
import apple from "./apple.svg";
import banana from "./banana.svg";
import strawberry from "./strawberry.svg";
import blender from "./blender.svg";
import food from "./food.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      whoClicked: ""
    };
  }

  onPushMe = e => {
    this.setState({
      whoClicked: `The ${e.target.alt} was clicked.`
    });
    return this.state.whoClicked;
  };

  render() {
    let newDiv = <div>{this.state.whoClicked} </div>;
    return (
      <div className="App">
        <header className="App-header">
          <div className="icons">
            <img
              src={apple}
              className="icons"
              id="idApple"
              alt="appleLogo"
              onClick={this.onPushMe}
            />

            <img
              src={banana}
              className="icons"
              id="idBanana"
              alt="bananaLogo"
              onClick={this.onPushMe}
            />
            <img
              src={strawberry}
              className="icons"
              id="idStraw"
              alt="strawberryLogo"
              onClick={this.onPushMe}
            />
            <img
              src={blender}
              className="icons"
              id="idBlender"
              alt="blenderLogo"
              onClick={this.onPushMe}
            />
            <img
              src={food}
              className="icons"
              id="idFood"
              alt="foodLogo"
              onClick={this.onPushMe}
            />
          </div>
          {newDiv}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
