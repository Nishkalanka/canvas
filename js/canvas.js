

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');


function draw() {
  var ctx4 = document.getElementById('canvas4').getContext('2d');
  for (var i=0;i<20;i++){
    for (var j=0;j<20;j++){
      ctx4.fillStyle = 'rgb(' + Math.floor(255-12.5*i) + ',' +
                       Math.floor(255-12.5*j) + ',0)';
      ctx4.fillRect(j*25,i*25,25,25);
    }
  }
}

draw();


//canvas
for(t = 0; t < 510; t+=20)
{
  ctx.beginPath();
  ctx.moveTo(250, t);
  ctx.lineTo(t,250);
  ctx.stroke();
  
}

for(t = 250; t < 510; t+=20)
{
  ctx.beginPath();
  ctx.moveTo(t+10, 250);
  ctx.lineTo(250,490-t);
  ctx.stroke();
  
}

for(t = 0; t < 250; t+=20)
{
  ctx.beginPath();
  ctx.moveTo(t, 250);
  ctx.lineTo(250,500-t);
  ctx.stroke();
}

ctx.beginPath();
ctx.arc(250,250,10,0,Math.PI*2,true);

ctx.fill();

//canvas2

for (i = 0; i < 250; i+=20)
{
    ctx2.beginPath();
    ctx2.moveTo(250, i);
    ctx2.lineTo(i, 0);
    ctx2.stroke();
}

for (i = 250; i < 510; i+=20)
{
    ctx2.beginPath();
    ctx2.moveTo(250, 510-i);
    ctx2.lineTo(i, 0);
    ctx2.stroke();
}

for (i = 0; i < 250; i+=20)
{
    ctx2.beginPath();
    ctx2.moveTo(250,250+i);
    ctx2.lineTo(250-i,500);
    ctx2.stroke();
}

for (i = 0; i < 250; i+=20)
{
    ctx2.beginPath();
    ctx2.moveTo(250,250+i);
    ctx2.lineTo(250+i,500);
    ctx2.stroke();
}


//canvas3
for (s = 0; s < 250; s+=20) {
    
    ctx3.beginPath();
    ctx3.moveTo(250,s);
    ctx3.lineTo(250-s,250);
    ctx3.stroke();
  
}

for (s = 0; s < 250; s+=20) {
    
    ctx3.beginPath();
    ctx3.moveTo(250,s);
    ctx3.lineTo(250+s,250);
    ctx3.stroke();
  
}

for (s = 0; s < 250; s+=20) {
    
    ctx3.beginPath();
    ctx3.moveTo(250,500-s);
    ctx3.lineTo(250-s,250);
    ctx3.stroke();
  
}

for (s = 0; s < 250; s+=20) {
    
    ctx3.beginPath();
    ctx3.moveTo(250,260+s);
    ctx3.lineTo(510-s,250);
    ctx3.stroke();
  
}


//canvas4


//canvas4



