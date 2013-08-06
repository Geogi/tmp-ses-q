// Futures
var bankP = Q.defer();
var bobP = Q.defer();

// Actors
var bank = Bank();
var alice = Alice(bankP.promise, bobP.promise);
var bob = Bob(bankP.promise);
console.log("Actors bank, alice and bob created.");

// Fulfill
bankP.resolve(bank);
bobP.resolve(bob);
console.log("Promises fullfiled.");

// Act
alice.buy("book", 10);
console.log("Action defined.");
