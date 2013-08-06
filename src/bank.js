var Bank = function () {
    var makeMint = function () {
        var m = WeakMap();
        var makePurse = function () { return mint(0) };

        var mint = function (balance) {
            var purse = def({
                getBalance: function () { return balance; },
                makePurse: makePurse,
                
                deposit: function (amount, srcP) {
                    Q(srcP).then(function (src) {
                        Nat(balance + amount);
                        m.get(src)(Nat(amount));
                        balance += amount;
                    });    
                }
            });
            
            var decr = function (amount) { balance = Nat(balance - amount); };
            m.set(purse, decr);
            return purse;
        };
        return mint;
    };
    
    // bank dollar mint
    var dollarMint = makeMint();
    
    // agreed opening of alice's and bob's purses
    var openAlice = function () { 
        console.log("Give Alice her main purse.");
        return dollarMint(100);
    };
    var openBob = function () {
        console.log("Give Bob his main purse.")
        return dollarMint(0);
    };
    
    return {
        openAlice: openAlice,
        openBob: openBob
    };
};
