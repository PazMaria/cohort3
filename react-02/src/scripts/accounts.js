import { AccountController, functions } from "../components/NewAccount.js";

const newAccount = new AccountController();

idContainer.addEventListener("click", event => {
  let accExist;
  let index = 0;
  let newBal = 0;
  let arrayOfBalances = [];
  switch (event.target.id) {
    case "idNewAccount":
      accExist = newAccount.addAccount(idName.value, Number(idInput.value));

      if (accExist === "Account created") {
        functions.newAccountDiv(rightDiv, idName.value, Number(idInput.value));
        idName.value = "";
        idInput.value = "";
        arrayOfBalances = newAccount.mapObject();
        idShowHighestDiv.textContent = newAccount.maxBalance(arrayOfBalances);
        idShowLowestDiv.textContent = newAccount.minBalance(arrayOfBalances);
      }
      idMsg.textContent = accExist;
      break;

    case "idDeposit":
      newAccount.userAccounts.forEach(function(element) {
        if (
          element.accountName ===
          event.target.parentNode.children[0].textContent
        ) {
          index = newAccount.userAccounts.indexOf(element);

          newBal = newAccount.userAccounts[index].deposit(
            Number(event.target.parentNode.children[2].value)
          );
          event.target.parentNode.children[1].textContent = newBal;
        }
      });

      arrayOfBalances = newAccount.mapObject();
      idShowHighestDiv.textContent = newAccount.maxBalance(arrayOfBalances);
      idShowLowestDiv.textContent = newAccount.minBalance(arrayOfBalances);

      break;

    case "idWithdraw":
      newAccount.userAccounts.forEach(function(element) {
        if (
          element.accountName ===
          event.target.parentNode.children[0].textContent
        ) {
          index = newAccount.userAccounts.indexOf(element);

          newBal = newAccount.userAccounts[index].withdraw(
            Number(event.target.parentNode.children[2].value)
          );
          event.target.parentNode.children[1].textContent = newBal;
        }
      });
      arrayOfBalances = newAccount.mapObject();
      idShowHighestDiv.textContent = newAccount.maxBalance(arrayOfBalances);
      idShowLowestDiv.textContent = newAccount.minBalance(arrayOfBalances);

      break;

    case "idDel":
      newAccount.removeAccount(event.target.parentNode.children[0].textContent);
      functions.delAccountDiv(event.target.parentNode);
      arrayOfBalances = newAccount.mapObject();
      idShowHighestDiv.textContent = newAccount.maxBalance(arrayOfBalances);
      idShowLowestDiv.textContent = newAccount.minBalance(arrayOfBalances);
      break;
  }
});
