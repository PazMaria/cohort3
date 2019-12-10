import React from "react";
import "../../../src/accounts.css";
import NewAccount from "./NewAccount.js";
import { AccountController, functions } from "./scripts/functions";

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

  async handleClick(e) {
    await this.setState({
      accExist: this.newAccount.addAccount(
        this.state.accName,
        this.state.accAmount
      ),
      message: this.state.accExist
    });
    if (this.state.accExist === "Account created") {
      this.calculate();
    }
    await this.setState({
      accName: "",
      accAmount: ""
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  calculate = () => {
    if (this.newAccount.userAccounts.length > 0) {
      const highestAcc = this.newAccount.maxBalance().accountName;
      const lowestAcc = this.newAccount.minBalance().accountName;
      const highestBal = this.newAccount.maxBalance().balance;
      const lowestBal = this.newAccount.minBalance().balance;

      this.setState({
        highAcc: highestAcc,
        lowAcc: lowestAcc,
        highBal: highestBal,
        lowBal: lowestBal
      });
    } else {
      this.setState({
        highAcc: "",
        lowAcc: "",
        highBal: 0,
        lowBal: 0
      });
    }
  };

  handleDelete = accountToDel => {
    this.newAccount.removeAccount(accountToDel);
    this.calculate();
    this.setState({
      accExist: ""
    });
  };

  render() {
    let cards = this.newAccount.userAccounts.map(account => {
      return (
        <NewAccount
          key={account.key}
          account={account}
          calculate={this.calculate}
          handleDelete={this.handleDelete}
        />
      );
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
            <div id="highestDiv">
              Highest Balance Account: <br />
              <div className="result" id="idShowHighestDiv">
                <span> {this.state.highAcc}</span>
                <span>{this.state.highBal}</span>
              </div>
            </div>
            <div id="lowestDiv">
              Lowest Balance Account: <br />
              <div className="result" id="idShowLowestDiv">
                <span>{this.state.lowAcc}</span>
                <span>{this.state.lowBal}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">{cards}</div>
      </div>
    );
  }
}

export default Account;
