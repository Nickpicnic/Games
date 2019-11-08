var w = window.innerWidth;
var h = window.innerHeight;
var scale = window.devicePixelRatio;
var w2 = w/2;
var h2 = h/2;

var canvas = document.getElementById('canvas');
canvas.width = w * scale;
canvas.height = h * scale;
canvas.style.width = w;
canvas.style.height = h;

var img1=document.createElement("img");
img1.src="images/ship1.png";
	console.log(img1);

var ctx = canvas.getContext('2d');
ctx.scale(scale, scale);



var animate = function() {
	// Clear the screen - note that .globalAlpha is still honored,
	// so this will only "darken" the sceen a bit
	ctx.globalCompositeOperation = 'source-over';
	ctx.fillRect(0,0,w,h);

	// Use the additive blend mode to draw the bezier curves
	ctx.globalCompositeOperation = 'lighter';

	// Calculate curve positions and draw
	/*for( var i = 0; i < maxCurves; i++ ) {
		var curve = curves[i];
		curve.current += curve.inc;
		for( var j = 0; j < p.length; j+=2 ) {
			var a = Math.sin( curve.current * (j+3) * 373 * 0.0001 );
			var b = Math.sin( curve.current * (j+5) * 927 * 0.0002 );
			var c = Math.sin( curve.current * (j+5) * 573 * 0.0001 );
			p[j] = (a * a * b + c * a + b) * w * c + w2;
			p[j+1] = (a * b * b + c - a * b *c) * h2 + h2;
		}

		ctx.beginPath();
		ctx.moveTo( p[0], p[1] );
		ctx.bezierCurveTo( p[2], p[3], p[4], p[5], p[6], p[7] );
		ctx.strokeStyle = curve.color;
		ctx.stroke();
	}*/
	ctx.drawImage(img1,200,200,102,130);
};

ctx.fillStyle = '#000000';
ctx.fillRect( 0, 0, w, h );

ctx.globalAlpha = 0.05;
ctx.lineWidth = 2;
setInterval( animate, 16 );
