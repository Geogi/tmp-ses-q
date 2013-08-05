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
    
    // bank dollar funds (needs to be >= 100, e.g. 2000)
    var dollarMint = makeMint(2000);
    
    // agreed opening of alice's and bob's purses
    var openAlice = function () { return dollarMint.mint(100); };
    var openBob = function () { return dollarMint.mint(0); };
    
    return def({
        openAlice: openAlice,
        openBob: openBob
    });
};
