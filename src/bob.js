var Bob = function (bankP) {
    var belongings = {
        book: { price: 10, author: "Bob", content: "-text-" }
    };
    
    var myPurseP = bankP.then(function (bank) {
        console.log("Bob got his main purse.");
        return bank.openBob(); 
    });
    
    var sell = function (desc, paymentP) {
        console.log("Transaction started on Bob's side.");
        var goodP = Q.all([myPurseP, paymentP]).then(function (purses) {
            console.log(purses[1].getBalance())
            Nat(purses[1].getBalance() - belongings[desc].price);
            console.log("Bob: got and checked Alice's payment.");
            purse[0].deposit(price, purse[1]);
            console.log("Bob: sending good to Alice.");
            return belongings[desc];
        });
        return goodP;
    };
    
    return def({
        sell: sell
    });
};
