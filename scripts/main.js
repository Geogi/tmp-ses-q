// Futures
var bankP = Q.defer();
var bobP = Q.defer();

// Actors
var bank = new Bank();
var alice = new Alice(bankP.promise, bobP.promise);
var bob = new Bob(bankP.promise);
console.log("Actors bank, alice and bob created.");

// Fulfill
bankP.resolve(bank);
bobP.resolve(bob);
console.log("Promises fullfiled");

// Act
alice.buy("book", 10);
console.log("Action complete.");
