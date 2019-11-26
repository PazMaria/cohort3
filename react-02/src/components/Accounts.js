import React from "react";
import "../../src/accounts.css";

class Account extends React.Component {
  render() {
    return (
      <div className="main">
        <div id="idHome">
          <h1>Welcome</h1>
        </div>
        <div class="container" id="idContainer">
          <p>New Account</p>
          <p>My Accounts</p>
          <div></div>
          <div id="idMsg"></div>

          <div id="leftDiv">
            Account Name:
            <input id="idName" type="text" />
            <br />
            Amount:
            <input id="idInput" type="number" />
            <input id="idNewAccount" type="button" value="Create Account" />
          </div>

          <div class="cardContain" id="rightDiv"></div>
          <div class="balance" id="bottomDiv">
            <div class="balance" id="highestDiv">
              Highest Balance Account:
              <div id="idShowHighestDiv"></div>
            </div>
            <div class="balance" id="lowestDiv">
              Lowest Balance Account:
              <div id="idShowLowestDiv"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
