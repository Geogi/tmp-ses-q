// Futures
var bankP = Q.defer();
var bobP = Q.defer();

// Actors
var bank = new Bank();
var alice = new Alice(bankP, bobP);
var bob = new Bob(bankP);

// Fulfill
bankP.resolve(bank);
bobP.resolve(bob);

// Act
alice.buy("book", 10);