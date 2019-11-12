// ALL CANVAS CODE GOES HERE
var w = window.innerWidth;
var h = window.innerHeight;
var scale = window.devicePixelRatio;
scale=1;
var w2 = w/2;
var h2 = h/2;

var canvas = document.getElementById('canvas');
canvas.width = w * scale;
canvas.height = h * scale;
canvas.style.width = w;
canvas.style.height = h;

const TILESET = document.createElement("img");
TILESET.src = "images/tileset.png";

const SPRITESET = document.createElement("img");
SPRITESET.src = "images/sprite_animation.png";

var ctx = canvas.getContext('2d');
ctx.scale(scale, scale);

let tile;
let tileSize = ((w / 40));

let animate = function() {
    game.new_level();
    if (!game.player.alive) {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,w,h);  
        ctx.font = "270px VT323";
        ctx.fillStyle = "#75ABF8";
        ctx.fillText('GAME OVER',w/5,h2);
        ctx.font = "75px VT323";
        ctx.fillStyle = `rgba(117,171,248,${Math.round(game.globalTimer / 100 % 1)})`;
        ctx.fillText('press R to restart',w/3,h/1.5);
        return;
    }
    ctx.fillRect(0,0,w,h);    

    var player;
    for (let i = 0; i < game.objects.length; i++) {
        game.objects[i].tick();
        game.objects[i].move();
        game.objects[i].switch_face();
        if (game.objects[i] instanceof Player) {
            player=game.objects[i];
        } 
    }

    var cameraX=0,cameraY=0;
    if (player) {
        var plX=tileSize*(player.x+player.smallX/SMALL);
        var plY=tileSize*(player.y+player.smallY/SMALL);
        cameraX=Math.round(plX - w/2);
        cameraY=Math.round(plY - h/2);
        if (cameraX < 0) {
            cameraX = 0;
        }
        if (cameraY < 0) {
            cameraY = 0;
        }
    }

    for (let y = 0; y < game.map.length; y++){
        for (let x = 0; x < game.map[y].length; x++){
            tile = mapTilesLegend[game.map[y][x]];
            ctx.drawImage(TILESET,                                          // from this PNG
                tile[0],tile[1] * game.level,
                128,128,                                                  // look into symbols map and return it's coordinates from TILES LEGEND
                tileSize*x - cameraX, tileSize*y - cameraY,                                     // set SCREEN POSITION of the block 
                tileSize, tileSize                                          // set SIZE of each block 
            );
        }
    }
    for (let i=0;i<game.objects.length;i++) {
        var object=game.objects[i];
        tile = charactersTilesLegend[object.face];
        if (object.tileno>=tile.length) object.tileno=0;
        tile=tile[object.tileno];
        ctx.drawImage(SPRITESET,
            tile[0],tile[1],
            128,128,
            tileSize*(object.x+object.smallX/SMALL) - cameraX, tileSize*(object.y+object.smallY/SMALL) - cameraY,
            tileSize, tileSize
        );
    }
    // SHOW SCORE
    ctx.fillRect(0,0.9*h,w,h);  
    ctx.font = "90px VT323";
    ctx.fillStyle = "#75ABF8";
    ctx.fillText(`LEVEL: ${game.level} | TREASURE LEFT: ${game.totalMoney - player.score} | YOUR SCORE: ${player.score}`, 0.04*w, 0.98*h);
    ctx.fillStyle ='black';
}

// DRAW BLACK BACKGROUND    
ctx.fillStyle = '#000000';
ctx.fillRect( 0, 0, w, h);

ctx.globalAlpha = 1;//0.05;
ctx.lineWidth = 2;
setInterval(() => {
        animate();
        game.globalTimer++;
}, 16 );
