var Alice = function (bankP, bobP) {    
    var myPurseP = bankP.then(function (bank) {
        console.log("Alice can reach the bank, asking for her main purse.");
        return Q(bank.openAlice());
    });
    
    
    var buy = function (desc, price) {
        var paymentP = myPurseP.then(function (purse) {
            console.log("Alice has her main purse, asking for a payment purse.");
            return [purse, Q(purse.makePurse())];    
        });
        var ackP = paymentP.then(function (purses) {
            console.log("Alice has her payment purse, trying to deposit the amount.");
            return Q(purses[1].deposit(price, purses[0]));
        });
        var goodP = ackP.then(function (purse) {
            console.log("Alice has the amount deposited, waiting for Bob.");
            return Q(bobP.then(function (bob) {
                console.log("Alice can reach Bob, sending the payment purse.");
                return bob.sell(desc, paymentP);
            }));
        });
        goodP.then(function (good) {
            console.log("Alice got: " + JSON.stringify(good));
        });
    };
    
    return def({
        buy: buy
    });
};
