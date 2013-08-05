var Bob = function (bankP) {
    var belongings = {
        book: { price: 10, author: "Bob", content: "-text-" }
    };
    
    var myPurseP = bankP.then(function (bank) {
       return bank.openBob(); 
    });
    
    var sell = function (desc, paymentP) {
        return (myPurseP.then(function (purse) {
            Nat(purse.getBalance() - belongings[desc].price);
            return Q(purse.deposit(10, paymentP));
        }).then(function() {
            return belongings[desc];
        }));
    };
    
    return def({
        sell: sell
    });
};
