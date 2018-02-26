
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//ctx.fillStyle = '#cccccc';
ctx.rect(50, 50, 100, 200);
ctx.moveTo(75, 75);
ctx.lineTo(25,25);
ctx.lineTo(25,0);
ctx.stroke();
