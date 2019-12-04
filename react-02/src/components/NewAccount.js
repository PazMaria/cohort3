import React from "react";

class NewAccount extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     balance: ""
  //   };
  // }
  render() {
    return (
      <div className="card">
        <span id="name">{this.props.account.accountName}</span>
        <input type="number" id="idAmount" />
        <span id="bal">{this.props.account.balance}</span>
        <input type="button" value="Deposit" id="idDeposit" />
        <input type="button" value="Delete Account" id="idDel" />
        <input type="button" value="Withdraw" id="idWithdraw" />
      </div>
    );
  }
}

export default NewAccount;
