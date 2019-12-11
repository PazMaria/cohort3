import React from "react";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAmount: ""
    };
  }

  inputChange = e => {
    this.setState({
      inputAmount: e.target.value
    });
  };

  handleDeposit = e => {
    this.props.account.deposit(this.state.inputAmount);
    this.setState({
      inputAmount: ""
    });

    this.props.calculate();
  };

  handleWithdraw = e => {
    this.props.account.withdraw(this.state.inputAmount);
    this.setState({
      inputAmount: ""
    });

    this.props.calculate();
  };

  render() {
    return (
      <div className="card">
        <span id="name">{this.props.account.accountName}</span>
        <input type="number" id="idAmount" onChange={this.inputChange} />
        <span id="bal">{this.props.account.balance}</span>
        <input
          type="button"
          value="Deposit"
          id="idDeposit"
          onClick={this.handleDeposit}
        />
        <input
          type="button"
          value="Delete Account"
          id="idDel"
          onClick={() =>
            this.props.handleDelete(this.props.account.accountName)
          }
        />
        <input
          type="button"
          value="Withdraw"
          id="idWithdraw"
          onClick={this.handleWithdraw}
        />
      </div>
    );
  }
}

export default NewAccount;
