var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

for(t = 0; t < 100; t+=10)
{
  ctx.moveTo(t, 0);
  ctx.lineTo(100,t);
}

ctx.stroke();