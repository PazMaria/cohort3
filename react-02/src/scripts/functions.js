class Account {
  constructor(accountName, balance) {
    this.accountName = accountName;
    this.balance = Number(balance);
  }
  deposit(amount) {
    this.balance = Number(this.balance) + Number(amount);
    idAmount.value = "";
    return this.balance;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
    idAmount.value = "";
    return this.balance;
  }

  show() {
    return this.balance;
  }
}

class AccountController {
  constructor() {
    this.userAccounts = [];
  }

  addAccount(accountName, balance) {
    let message;

    if (this.userAccounts.length === 0) {
      const newAccount = new Account(accountName, balance);
      this.userAccounts.push(newAccount);
      message = "Account created";
    } else {
      this.userAccounts.forEach(function(element) {
        if (element.accountName === accountName) {
          message = "Account Exists";
        } else {
          message = "Account created";
        }
      });
      if (message === "Account created") {
        const newAccount = new Account(accountName, balance);
        this.userAccounts.push(newAccount);
      }
    }
    return message;
  }

  removeAccount(accountName) {
    let itemToRemove;
    this.userAccounts.forEach(function(element) {
      if (element.accountName === accountName) {
        itemToRemove = element;
      }
    });
    this.userAccounts.splice(this.userAccounts.indexOf(itemToRemove), 1);
  }

  totalBalance() {
    let totalBalance = this.userAccounts.reduce(
      (accumulator, user) => accumulator + user.balance,
      0
    );
    return totalBalance;
  }

  mapObject() {
    return this.userAccounts.map(function(user) {
      return user.balance;
    });
  }

  maxBalance(arrayBalance) {
    return Number(Math.max(...arrayBalance));
  }

  minBalance(arrayBalance) {
    return Number(Math.min(...arrayBalance));
  }
}

const functions = {
  accountId: 0,

  newAccountDiv: (node, aName, aValue) => {
    functions.accountId++;
    const newCard = document.createElement("div");

    node.appendChild(newCard);
    newCard.className = "card";
    newCard.setAttribute("accountId", functions.accountId);
    const name = document.createElement("span");
    const bal = document.createElement("span");
    const amount = document.createElement("input");
    const deposit = document.createElement("input");
    const withdraw = document.createElement("input");
    const del = document.createElement("input");

    name.setAttribute("id", "name");
    name.textContent = aName;
    bal.setAttribute("id", "bal");
    bal.textContent = Number(aValue);
    amount.setAttribute("type", "number");
    amount.setAttribute("id", "idAmount");
    deposit.setAttribute("type", "button");
    deposit.setAttribute("value", "Deposit");
    deposit.setAttribute("id", "idDeposit");
    withdraw.setAttribute("type", "button");
    withdraw.setAttribute("value", "Withdraw");
    withdraw.setAttribute("id", "idWithdraw");
    del.setAttribute("type", "button");
    del.setAttribute("value", "Delete Account");
    del.setAttribute("id", "idDel");
    newCard.appendChild(name);
    newCard.appendChild(bal);
    newCard.appendChild(amount);
    newCard.appendChild(deposit);
    newCard.appendChild(withdraw);
    newCard.appendChild(del);

    return newCard;
  },
  delAccountDiv: card => {
    card.remove();
  }
};

export { Account, AccountController, functions };
