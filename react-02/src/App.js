import React from "react";
import logo from "./logo.svg";
import home from "./home.svg";
import tictac from "./tictac.svg";
import bank from "./bank.svg";
import city from "./city.svg";
import Game from "./components/tictactoe/Game";
import Account from "./components/accounts/Accounts";
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
          src={home}
          className="icons"
          id="idApple"
          alt="appleLogo"
          name="mainApp"
          onClick={e => this.onPushMe(e.target.name)}
        />

        <img
          src={tictac}
          className="icons"
          id="idBanana"
          alt="bananaLogo"
          name="titactoeApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={bank}
          className="icons"
          id="idStraw"
          alt="strawberryLogo"
          name="accountApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={city}
          className="icons"
          id="idBlender"
          alt="blenderLogo"
          name="cityApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
      </div>
    );
  };

  showApp = () => {
    if (this.state.whoClicked === "mainApp") {
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
    if (this.state.whoClicked === "accountApp") {
      return (
        <div className="tictacDiv">
          <h4>Accounts</h4>
          <div className="gameDiv">
            <Account />
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
        {/* <div>
          Icons from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div> */}
      </div>
    );
  }
}

export default App;
