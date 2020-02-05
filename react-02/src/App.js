import React from "react";
import logo from "./logo.svg";
import home from "./home.svg";
import tictac from "./tictac.svg";
import bank from "./bank.svg";
import city from "./city.svg";
import link from "./link.svg";
import stack from "./coins.svg";
import settings from "./settings.svg";
import Game from "./components/tictactoe/Game";
import Account from "./components/accounts/Accounts";
import Cities from "./components/cities/Cities";
import LinkedLists from "./components/linkedLists/LinkedLists";
import FifoLifos from "./components/fifoLifo/FifoLifos";
import Settings from "./components/context/Settings";
import { ThemeContext } from "./components/context/context";
// import ThemeProvider from "./components/context/Settings";
import "./App.css";

class App extends React.Component {
  static contextType = ThemeContext;

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
          alt="homeLogo"
          name="mainApp"
          onClick={e => this.onPushMe(e.target.name)}
        />

        <img
          src={tictac}
          className="icons"
          id="idBanana"
          alt="tictacLogo"
          name="titactoeApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={bank}
          className="icons"
          id="idStraw"
          alt="accountLogo"
          name="accountApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={city}
          className="icons"
          id="idBlender"
          alt="cityLogo"
          name="cityApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={link}
          className="icons"
          id="idLink"
          alt="linkLogo"
          name="linkedListApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={stack}
          className="icons"
          id="idStack"
          alt="stackLogo"
          name="lifoFifoApp"
          onClick={e => this.onPushMe(e.target.name)}
        />
        <img
          src={settings}
          className="icons"
          id="idSettings"
          alt="settingsLogo"
          name="settingsApp"
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
    if (this.state.whoClicked === "cityApp") {
      return (
        <div className="tictacDiv">
          <h4>Cities</h4>
          <div className="gameDiv">
            <Cities />
          </div>
        </div>
      );
    }
    if (this.state.whoClicked === "linkedListApp") {
      return (
        <div className="tictacDiv">
          <h4>Linked List</h4>
          <div className="gameDiv">
            <LinkedLists />
          </div>
        </div>
      );
    }
    if (this.state.whoClicked === "lifoFifoApp") {
      return (
        <div className="tictacDiv">
          <h4>Lifo Fifo</h4>
          <div className="gameDiv">
            <FifoLifos />
          </div>
        </div>
      );
    }
    if (this.state.whoClicked === "settingsApp") {
      return (
        <div className="tictacDiv">
          <h4>Settings</h4>
          <div className="gameDiv">
            <Settings />
          </div>
        </div>
      );
    }
  };

  render() {
    // const { isLightTheme, green, white } = this.context;
    // const theme = isLightTheme ? green : white;
    let newDiv = <div>{this.state.whoClicked} </div>;
    return (
      <div className="App">
        {this.showIcons()}
        {newDiv}
        <div className="appContainer">{this.showApp()}</div>
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
