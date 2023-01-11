class Game {
    constructor() {
        this.level = 1;
        this.points = 0;
    }
    upgrade() {
        this.points -= this.level * 10;
        this.level += 1;
    }
    earnPoints(points) {
        this.points += points;
    }
}

const game = new Game();

while (true) {
    // simulate earning points over time
    game.earnPoints(game.level);
    console.log("Points: ", game.points);
    if (game.points >= game.level * 10) {
        game.upgrade();
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
}
