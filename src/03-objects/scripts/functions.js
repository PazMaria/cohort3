class Account {
  constructor(accountName, balance) {
    this.accountName = accountName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
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
  }

  addAccount(accountName, balance) {
    let message;
    const newAccount = new Account(accountName, balance);

    if (this.userAccounts.length === 0) {
      this.userAccounts.push(newAccount);
    } else {
      this.userAccounts.forEach(function(element) {
        if (element.accountName === newAccount.accountName) {
          message = "Account Exists";
        } else {
          message = "Account created";
        }
      });
      if (message === "Account created") {
        this.userAccounts.push(newAccount);
      }
      return message;
    }
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
    let totalBalance = 0;
    this.userAccounts.forEach(function(element) {
      totalBalance += element.balance;
    });
    return totalBalance;
  }

  // compareBalance () {
  //}
}

export { Account, AccountController };
