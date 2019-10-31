import { Account, AccountController } from "./functions.js";

const checkingAccount = new Account("Checking Account", 25000);

idHome.addEventListener("click", event => {
  let curent = event.target.parentNode;
  let amount = Number(document.getElementById("idInput").value);

  switch (event.target.id) {
    case "idDeposit":
      checkingAccount.deposit(amount);
      console.log(checkingAccount.balance);
      break;

    case "idWithdraw":
      checkingAccount.withdraw(amount);
      console.log(checkingAccount.balance);
      break;

    case "idBalance":
      checkingAccount.show();
      console.log(checkingAccount.balance);
      break;
  }

  console.log(event);
});
