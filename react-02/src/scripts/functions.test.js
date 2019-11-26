import { Account, AccountController } from "./functions.js";

const checkingAccount = new Account("checking", 25000);
const savingAccount = new Account("savings", 25000);
test("check starting balance", () => {
  expect(checkingAccount.balance).toBe(25000);
  expect(savingAccount.balance).toBe(25000);
});

test("check added balance", () => {
  expect(checkingAccount.deposit(10000)).toBe(35000);
  expect(savingAccount.deposit(10000)).toBe(35000);
});

test("check balance after withdraw", () => {
  expect(checkingAccount.withdraw(5000)).toBe(30000);
  expect(savingAccount.withdraw(5000)).toBe(30000);
});

test("check show balance", () => {
  expect(checkingAccount.show()).toBe(30000);
  expect(savingAccount.show()).toBe(30000);
});

//  EXERCISE 130.C
const controller1 = new AccountController();

test("check create account ", () => {
  controller1.addAccount("checking", 50);

  expect(controller1.userAccounts[0].accountName).toBe("checking");

  let expected = controller1.addAccount("checking", 100);
  expect(expected).toBe("Account Exists");

  controller1.addAccount("savings", 100);
  expect(controller1.userAccounts[1].accountName).toBe("savings");
});

test("check remove account", () => {
  let userAccountsLength = controller1.userAccounts.length;
  controller1.removeAccount("checking");
  expect(userAccountsLength).toEqual(userAccountsLength--);
});

test("check total balance", () => {
  controller1.addAccount("checking", 150);
  expect(controller1.totalBalance()).toEqual(250);
});

test("check map account list", () => {
  expect(controller1.mapObject()).toEqual([100, 150]);

  controller1.addAccount("student", 50);
  expect(controller1.mapObject()).toEqual([100, 150, 50]);
});

test("check max balance", () => {
  let arrayOfBalances = controller1.mapObject();
  expect(controller1.maxBalance(arrayOfBalances)).toEqual(150);
});

test("check min balance", () => {
  let arrayOfBalances = controller1.mapObject();
  expect(controller1.minBalance(arrayOfBalances)).toEqual(50);
});
