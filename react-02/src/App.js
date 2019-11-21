import React from "react";
import logo from "./logo.svg";
import apple from "./apple.svg";
import banana from "./banana.svg";
import strawberry from "./strawberry.svg";
import blender from "./blender.svg";
import food from "./food.svg";
import Game from "./components/Game";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      whoClicked: "mainApp"
    };
  }

  async onPushMe(e) {
    await this.setState({
      whoClicked: e
    });
    return this.state.whoClicked;
  }

  showIcons = () => {
    return (
      <div className="iconsDiv">
        <img
          src={apple}
          className="icons"
          id="idApple"
          alt="appleLogo"
          name="mainApp"
          onClick={e => this.onPushMe(e.target.name)}
        />

        <img
          src={banana}
          className="icons"
          id="idBanana"
          alt="bananaLogo"
          name="titactoeApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={strawberry}
          className="icons"
          id="idStraw"
          alt="strawberryLogo"
          name="strawberry"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={blender}
          className="icons"
          id="idBlender"
          alt="blenderLogo"
          name="blender"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={food}
          className="icons"
          id="idFood"
          alt="foodLogo"
          name="food"
          onClick={e => this.onPushMe(e.target.name)}
        />
      </div>
    );
  };

  showApp = () => {
    if (
      this.state.whoClicked === "mainApp" ||
      this.state.whoClicked === "strawberry" ||
      this.state.whoClicked === "blender" ||
      this.state.whoClicked === "food"
    ) {
      return (
        <div>
          <header className="App-header">
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
    if (this.state.whoClicked === "titactoeApp") {
      return (
        <div className="tictacDiv">
          <h4>Tic-Tac-Toe</h4>
          <div className="gameDiv">
            <Game />
          </div>
        </div>
      );
    }
  };

  render() {
    let newDiv = <div>{this.state.whoClicked} </div>;
    return (
      <div className="App">
        {this.showIcons()}
        {newDiv}
        <div>{this.showApp()}</div>
      </div>
    );
  }
}

export default App;
