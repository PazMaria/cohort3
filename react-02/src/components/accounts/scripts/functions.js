class Account {
  constructor(key, accountName, balance) {
    this.key = Number(key);
    this.accountName = accountName;
    this.balance = Number(balance);
  }
  deposit(amount) {
    this.balance = Number(this.balance) + Number(amount);
    return this.balance;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
    return this.balance;
  }

  show() {
    return this.balance;
  }
}

class AccountController {
  constructor() {
    this.userAccounts = [];
    this.key = 0;
  }

  addAccount(accountName, balance) {
    let message;
    this.key++;
    if (this.userAccounts.length === 0) {
      const newAccount = new Account(this.key, accountName, balance);
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
        const newAccount = new Account(this.key, accountName, balance);
        this.userAccounts.push(newAccount);
      }
    }
    return message;
  }

  removeAccount(accountName) {
    this.userAccounts = this.userAccounts.filter(
      account => account.accountName !== accountName
    );
  }

  totalBalance() {
    let totalBalance = this.userAccounts.reduce(
      (accumulator, user) => accumulator + user.balance,
      0
    );
    return totalBalance;
  }

  maxBalance() {
    return this.userAccounts.slice().sort((a, b) => b.balance - a.balance)[0];
  }

  minBalance() {
    return this.userAccounts.slice().sort((a, b) => a.balance - b.balance)[0];
  }
}

export { Account, AccountController };
