class Player {
    constructor(name) {
        this.name = name;
        this.lvl = 1;
        this.points = 0; 
    }

    gainXp(xp) {
        this.points += xp;

        if (this.points >= 10) {
            this.lvl++;
            this.points -= 10;
        }

    }

    describe() {
        return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
    }
}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe());
console.log(player2.describe());