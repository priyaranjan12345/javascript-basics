class Bank {
    #accountBalance;

    constructor(intialAmount) {
        this.#accountBalance = intialAmount
    }

    static getBalance(obj) {
        return obj.#accountBalance
    }

    diposite(amount) {
        this.#accountBalance += amount
    }

    withdrawal(amount) {
        if (amount > 0) {
            if (this.#accountBalance > amount) {
                this.#accountBalance -= amount
            } else {
                throw "Insufficient balance"
            }
        }else{
            throw "Invalid amount"
        }
    }
}

const bank = new Bank(1000)

let balance = 0
balance = Bank.getBalance(bank)
console.log("Current balance: "+balance);

bank.diposite(100)
console.log("balance after diposite: "+Bank.getBalance(bank));

try {
    bank.withdrawal(10)
    console.log("balance after withdrawal: "+Bank.getBalance(bank));
} catch (error) {
    console.log(error);
}
