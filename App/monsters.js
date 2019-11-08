class Monster extends Creature {
    constructor(y, x) {
        super(y, x);
        this.face = 'MF';
    }
    can_fall() {
        if (this.y>=game.map.length-1) return false;

        if (
            !game.map[this.y][this.x].match(/^[#_,./|0:]$/) && // Мы не на лестнице и не на веревке
            !game.map[this.y+1][this.x].match(/^[BU#]$/)  // Под нами нет блока или лестницы
        ) return true;
        return false;
    }
    switch_face(){ 
        if (this.directionY && !this.can_fall() && game.map[this.y][this.x]=='#') {                 // stairs animation
            this.face = "MS";
        } else if ((this.directionY && this.can_fall()) ||                                          // staying or falling     
         (!this.directionY && !this.directionX)){
            this.face = "MF";
        } else if (this.directionX && !this.can_fall() && game.map[this.y+1][this.x] != " ") {      // running
            if (this.directionX == 1) {
                this.face = "MR";                                                                   // right
            } else if (this.directionX == -1){                                                      // left
                this.face = "ML";
            }
        } else if (!this.can_fall()){
            if (this.directionX == 1) {                                                             // rope right
                this.face = "MRR"
            } else if (this.directionX == -1) {                                                     // rope left
                this.face = "MRL";
            }
        }
    }
    tick(){
        if (this.x==game.mainPlayer.x && this.y==game.mainPlayer.y) game.mainPlayer.alive = false;
        let tempX, tempY;
        tempX = game.mainPlayer.x - this.x;
        this.directionX = tempX/Math.abs(tempX);
        if (this.y != game.mainPlayer.y && game.map[this.y][this.x] == '#') {
            tempY = game.mainPlayer.y - this.y;
            this.directionY = tempY/Math.abs(tempY);
        } else {
            this.directionY = 0;
        }
    }
}