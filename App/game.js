class Game {
    constructor() {
        this.level = 0;
        this.globalTimer = 0;
        this.player;
        this.totalMoney = 0;
    }
    loadParticularLevel(lvl) {
//         this.bgmusic=new Audio("music/hotline_miami_04.M.O.O.N-Crystals.mp3");
        this.takeTreasureSound=new Audio("sounds/coin.ogg");
        this.destroySound=new Audio("sounds/413665__ironcross32__weapon.wav");
        this.monsterSound=new Audio("sounds/163439__under7dude__zombie-2.wav");
        this.runningSound=new Audio("sounds/446827__mateozugi19__running.wav");
        this.takeTreasureSound.volume = 0.3;
        this.runningSound.volume = 0.5;
        this.destroySound.volume = 0.5;
        
        var tmp = LEVELS[lvl].map.split('\n');           // makes array of strings from 'level1' (for example)
        this.map = [];
        this.holes = [];
        for (let i = 0; i < tmp.length; i++) {
            this.map.push(tmp[i].split(""));                        // stores level as array of arrays  
        }                                                           // this one won't change
        this.objects = [];
        this.player = undefined;
        // set creatures and count total money on this level money
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                switch (this.map[y][x]) {
                    case "H":
                        this.map[y][x] = " ";
                        this.player = new Player(y, x);
                        this.objects.push(this.player);
                        break;
                    case "M":
                        this.map[y][x] = " ";
                        this.objects.push(new Monster(y, x));
                        break;
                    case "$":
                        this.totalMoney++;
                        break;
                }
            }
        }
    }
    // NEW LEVEL LOGIC
    new_level() {
        if (game.player.score == this.totalMoney) {
            this.level++;
            this.totalMoney = 0;
            this.loadParticularLevel(this.level);
        }
    }
    destroyBlock(x, y) {
        this.holes.push({ x: x, y: y, startTick: this.globalTimer, endTick: this.globalTimer + 200 });
        this.player.destroyBlock = 0;
    }
    removeBlock() {
        for (var i = 0; i < this.holes.length; i++) {
            var hole = this.holes[i];
            // если это 1 2 3 4 5 тики то выставлять в карте 0 | / , .
            if (hole.y != this.player.y && hole.x != this.player.x) {
                this.map[hole.y][hole.x] = ':';
            }
            switch (this.globalTimer - hole.startTick) {
                case 1:
                    this.map[hole.y][hole.x] = '0';
                    break;
                case 2:
                    this.map[hole.y][hole.x] = '|';
                    break;
                case 3:
                    this.map[hole.y][hole.x] = '/';
                    break;
                case 4:
                    this.map[hole.y][hole.x] = ',';
                    break;
                case 5:
                    this.map[hole.y][hole.x] = '.';
                    break;
            }
            // если это -1 -2 -3 -4 -5 тики до конца то выставлять в обратном порядке
            switch (hole.endTick - this.globalTimer) {
                case 5:
                    this.map[hole.y][hole.x] = '.';
                    break;
                case 4:
                    this.map[hole.y][hole.x] = ',';
                    break;
                case 3:
                    this.map[hole.y][hole.x] = '/';
                    break;
                case 2:
                    this.map[hole.y][hole.x] = '|';
                    break;
                case 1:
                    this.map[hole.y][hole.x] = '0';
                    break;
            }
            // если это последний тик удалить из массива и сделать i--;
            if (hole.endTick === this.globalTimer) {
                this.map[hole.y][hole.x] = 'B';
                this.holes.splice(i, 1);
                i--;
            }
        }
    }
}
let game = new Game();
game.loadParticularLevel(game.level);

// KEYPRESS EVENTS
document.onkeydown = function (key) {
//     if (!game.bgmusic_played) {
//         game.bgmusic_played=true;
//         game.bgmusic.play();
//     }
    if (!game.player) return;
    switch (key.keyCode) {
        case 37:
            // left
            game.player.directionX = -1;
            game.player.directionY = 0;
            break;
        case 38:
            // up
            game.player.directionY = -1;
            break;
        case 39:
            // right
            game.player.directionX = 1;
            game.player.directionY = 0;
            break;
        case 40:
            // down
            game.player.directionY = 1;
            break;
        case 32:
            // destroy block
            game.player.destroyBlock = 1;
            break;
        case 82:
            if (!game.player.alive) {
                game.totalMoney = 0;
                game.loadParticularLevel(game.level);
            }
    }
};

