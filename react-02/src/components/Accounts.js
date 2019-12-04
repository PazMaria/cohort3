import React from "react";
import "../../src/accounts.css";
import NewAccount from "./NewAccount.js";
import { AccountController, functions } from "../scripts/functions";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accName: "",
      accAmount: "",
      highAcc: "",
      lowAcc: "",
      highBal: 0,
      lowBal: 0,
      accExist: "",
      message: ""
    };
    this.newAccount = new AccountController();
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClick(e) {
    this.setState({
      accExist: this.newAccount.addAccount(
        this.state.accName,
        this.state.accAmount
      ),
      message: this.state.accExist
    });
    if (this.state.accExist === "Account created") {
      this.setState({
        accName: "",
        accAmount: ""
      });
      // this.calculate();
    }
    e.preventDefault(e);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // calculate = () => {
  //   const highestAcc = this.newAccount.maxBalance().name;
  //   const lowestAcc = this.newAccount.minBalance().name;

  //   this.setState({
  //     highAcc: highestAcc,
  //     lowAcc: lowestAcc
  //   });
  // };

  render() {
    let cards = this.newAccount.userAccounts.map(account => {
      return <NewAccount key={account.key} account={account} />;
    });

    return (
      <div className="container" id="idContainer">
        <h5>New Account</h5>
        <h5>My Accounts</h5>
        <div className="msg"></div>
        <div className="msg">{this.state.message}</div>
        <div className="leftDiv">
          <div className="cardLeft">
            Account Name:
            <input
              className="inputName"
              id="idName"
              type="text"
              name="accName"
              onChange={this.onChange}
            ></input>
            Amount:
            <input
              className="inputNumber"
              id="idInput"
              type="number"
              name="accAmount"
              onChange={this.onChange}
            />
            <input
              className="inputButton"
              id="idNewAccount"
              type="button"
              value="Create Account"
              onClick={this.handleClick}
            />
          </div>
          <div className="balance" id="bottomDiv">
            <div className="result" id="highestDiv">
              Highest Balance Account: <br />
              {/* <div id="idShowHighestDiv">{this.state.highAcc}</div> */}
            </div>
            <div className="result" id="lowestDiv">
              Lowest Balance Account: <br />
              {/* <div id="idShowLowestDiv">{this.state.lowAcc}</div> */}
            </div>
          </div>
        </div>
        <div className="right">{cards}</div>
      </div>
    );
  }
}

export default Account;
