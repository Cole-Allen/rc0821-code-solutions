/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (typeof balance === 'number') {
    if (balance > 0 && (balance % 1) === 0) {
      this.accounts.push(new Account(this.nextAccountNumber, holder));
      this.getAccount(this.nextAccountNumber).deposit(balance);
      this.nextAccountNumber++;
      return this.nextAccountNumber - 1;
    } else {
      return null;
    }
  } else {
    return null;
  }

};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
};
