var Alice = function (bankP, bobP) {    
    var myPurseP = bankP.then(function (bank) {
        console.log("Alice can reach the bank, asking for her main purse.");
        return bank.openAlice();
    });
    
    
    var buy = function (desc, price) {
        var paymentP = myPurseP.then(function (purse) {
            console.log("Alice has her main purse, asking for a payment purse.");
            return purse.makePurse();    
        });
        var ackP = paymentP.then(function (purse) {
            console.log("Alice has her payment purse, trying to deposit the amount.");
            purse.deposit(price, myPurseP);
            console.log(purse.getBalance())
            return purse;
        });
        var goodP = ackP.then(function (purse) {
            console.log("Alice has the amount deposited, waiting for Bob.");
            return bobP.then(function (bob) {
                console.log("Alice can reach Bob, sending the payment purse.");
                return bob.sell(desc, purse);
            });
        });
        return goodP.then(function (good) {
            console.log("Alice got: " + JSON.stringify(good));
        });
    };
    
    return def({
        buy: buy
    });
};
