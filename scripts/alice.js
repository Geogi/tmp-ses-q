var Alice = function (bankP, bobP) {    
    var myPurseP = bankP.then(function (bank) {
        return Q(bank.openAlice());
    });
    
    var buy = function (desc, price) {
        var paymentP = myPurseP.then(function (purse) {
            return Q(purse.makePurse());    
        });
        var ackP = paymentP.then(function (purse) {
            return Q(purse.deposit(price, myPurse));
        });
        var goodP = ackP.then(function (purse) {
            return Q(bobP.then(function (bob) {
                return bob.sell(desc, paymentP);
            }));
        });
        goodP.fin(function (good) { console.log(good)});
    };
    
    return def({
        buy: buy
    });
};
