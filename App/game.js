class Game {
    constructor() {
        this.level = 1;
        this.globalTimer = 0;
        this.mainPlayer;
        this.holes = [];
    }
    loadParticularLevel(level_name) {
        var tmp = LEVELS[0][level_name].map.split('\n');           // makes array of strings from 'level1' (for example)
        this.map = [];
        for (let i = 0; i < tmp.length; i++) {
            this.map.push(tmp[i].split(""));                        // stores level as array of arrays  
        }                                                           // this one won't change
        this.objects = [];

        // set creatures
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                switch (this.map[y][x]) {
                    case "H":
                        this.map[y][x] = " ";
                        this.mainPlayer = new Player(y, x);
                        this.objects.push(this.mainPlayer);

                        break;
                    case "M":
                        this.map[y][x] = " ";
                        this.objects.push(new Monster(y, x));
                        break;
                }
            }
        }
    }
    // NEW LEVEL LOGIC
    new_level() {
        this.level++;
    }
    destroyBlock(x,y){
        this.holes.push({x:x,y:y,startTick:this.globalTimer,endTick:this.globalTimer+200});
        this.mainPlayer.destroyBlock = 0;
    }
    removeBlock(){
        for (var i=0;i<this.holes.length;i++) {
            var hole=this.holes[i];
            // если это 1 2 3 4 5 тики то выставлять в карте 0 | / , .
            if (hole.y != this.mainPlayer.y && hole.x != this.mainPlayer.x) {
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
                this.holes.splice(i,1);
                i--;
            }
        }
    }
}

let game = new Game();
game.loadParticularLevel("level1");

let player;
for (let i = 0; i < game.objects.length; i++) {
    if  (game.objects[i] instanceof Player) {
        player = game.objects[i];
    }
}

// KEYPRESS EVENTS
document.onkeydown = function (key) {
    switch (key.keyCode) {
        case 37:
            // left
            player.directionX = -1;
            player.directionY = 0;
            break;
        case 38:
            // up
            player.directionY = -1;
            break;
        case 39:
            // right
            player.directionX = 1;
            player.directionY = 0;
            break;
        case 40:
            // down
            player.directionY = 1;
            break;
        case 32:
            // destroy block
            player.destroyBlock = 1;
            break;
    }
};