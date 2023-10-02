
class BankAccount{
  constructor(AccountHolderName,Balance){
    this._AccountHolderName=AccountHolderName
    this._Balance=Balance
  }
 checkBalance(){
    console.log(`Acount balance for ${this._AccountHolderName} is Rs.${this._Balance}`);
  }
  withdrow(Amount){
    if (Amount<0) {
      console.log("Invalid deposite Amount Please enter a positive ammount");
    }
    else if (Amount>this._Balance) {
      console.log("Insufficient Balance for withdrol");
    }
    else {
      this._Balance-=Amount
      console.log(`Withdrow Rs. ${Amount},new balance is ${this._Balance}`);
    }
  }
  deposite(Amount){
     if (Amount>0 ) {
          this._Balance+=Amount
          console.log(`Deposite Rs. ${Amount}.New balance is ${this._Balance}`);
     } 
     else{
         console.log("Invalid deposite Amount Please enter a positive amount");
     }
  }

}
const myAccount=new BankAccount("Mithun s",1000)
myAccount.checkBalance()
myAccount.deposite(500)
myAccount.deposite(-50)
myAccount.withdrow(200)
myAccount.withdrow(1500)
myAccount.withdrow(-500)
myAccount.checkBalance()
