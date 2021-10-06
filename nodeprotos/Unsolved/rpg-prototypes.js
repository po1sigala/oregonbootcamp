// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
// YOUR CODE HERE
//
function Character(name, strength, hp) {
    this.name = name;
    this.strength = strength;
    this.hp = hp;
}
// Create a prototype method called `printStats()` which prints all of the stats for a character
// YOUR CODE HERE
//
Character.prototype.printStats = function () {
    console.log(
        `Name: ${this.name}\nStrength: ${this.strength}\n"HP: ${this.hp}`
    );
    console.log(`\n---------------------\n`);
};
// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their `hitpoints` are above or below zero
// YOUR CODE HERE
//
Character.prototype.isAlive = function () {
    if (this.hp > 0) {
        console.log("....still alive");
        console.log(`\n---------------------\n`);
    } else {
        console.log("YOU DIED");
        console.log(`\n---------------------\n`);
    }
};

// Create a prototype method called `attack()` which takes in a second character
// and subtracts this character's `strength` from their `hitpoints`
// YOUR CODE HERE
//
Character.prototype.attack = function (opponent) {
    opponent.hp = opponent.hp - this.strength;
    console.log(
        `${this.name} attacked ${opponent.name}\n${this.strength} dmg dealt\n${opponent.name} has ${opponent.hp} hp left`
    );
    console.log(`\n---------------------\n`);
};
// =============================================================

let warrior = new Character("Crusher", 10, 75);
let rogue = new Character("Dodger", 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
