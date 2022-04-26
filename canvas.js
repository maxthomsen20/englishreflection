var canvas = document.querySelector('canvas');
canvas.width = 500;
canvas.height = 500;

var c = canvas.getContext('2d');
var x = -2;
var y = 250;
var shift = 0;
/*c.beginPath();
c.moveTo(x,y);*/

function animate() {
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);
		c.beginPath();
		c.moveTo(x, y);
		for (i=0; i<(3.3*(Math.PI)); i+=0.1) {
			c.lineTo(x + i*50, y + Math.cos(i)*50*Math.sin(i+shift));
		}
		c.stroke();
		shift += 0.05;
}

animate();
/*$(canvas).click(function() {
	animate();
});

		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);
		c.beginPath();
		c.arc(x, y, 30, 0, Math.PI * 2, false);
		c.stroke();
		console.log(x);
		x += 1;*/