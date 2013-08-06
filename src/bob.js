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
        var goodP = myPurseP.then(function (purse) {
            purse.deposit(Nat(belongings[desc].price), paymentP);
            var item = belongings[desc];
            delete(belongings[desc]);
            return item;
        });
        return goodP;
    };
    
    return def({
        sell: sell
    });
};
