      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');

      var canvas2 = document.getElementById('canvas2');
      var ctx2 = canvas2.getContext('2d');

      var canvas3 = document.getElementById('canvas3');
      var ctx3 = canvas3.getContext('2d');


      /*function draw() {
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

      Xt = X1*(t) + X2*(1 - t);*/



      //canvas
      for (t = 0; t < 510; t += 20) {
        ctx.beginPath();
        ctx.moveTo(250, t);
        ctx.lineTo(t, 250);
        ctx.stroke();

      }

      for (t = 250; t < 510; t += 20) {
        ctx.beginPath();
        ctx.moveTo(t + 10, 250);
        ctx.lineTo(250, 490 - t);
        ctx.stroke();

      }

      for (t = 0; t < 250; t += 20) {
        ctx.beginPath();
        ctx.moveTo(t, 250);
        ctx.lineTo(250, 500 - t);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(250, 250, 10, 0, Math.PI * 2, true);
      ctx.fill();

      //canvas2

      for (i = 0; i < 250; i += 20) {
        ctx2.beginPath();
        ctx2.moveTo(250, i);
        ctx2.lineTo(i, 0);
        ctx2.stroke();
      }

      for (i = 250; i < 510; i += 20) {
        ctx2.beginPath();
        ctx2.moveTo(250, 510 - i);
        ctx2.lineTo(i, 0);
        ctx2.stroke();
      }

      for (i = 0; i < 250; i += 20) {
        ctx2.beginPath();
        ctx2.moveTo(250, 250 + i);
        ctx2.lineTo(250 - i, 500);
        ctx2.stroke();
      }

      for (i = 0; i < 250; i += 20) {
        ctx2.beginPath();
        ctx2.moveTo(250, 250 + i);
        ctx2.lineTo(250 + i, 500);
        ctx2.stroke();
      }


      //canvas3
      for (s = 0; s < 250; s += 20) {

        ctx3.beginPath();
        ctx3.moveTo(250, s);
        ctx3.lineTo(250 - s, 250);
        ctx3.stroke();

      }

      for (s = 0; s < 250; s += 20) {

        ctx3.beginPath();
        ctx3.moveTo(250, s);
        ctx3.lineTo(250 + s, 250);
        ctx3.stroke();

      }

      for (s = 0; s < 250; s += 20) {

        ctx3.beginPath();
        ctx3.moveTo(250, 500 - s);
        ctx3.lineTo(250 - s, 250);
        ctx3.stroke();

      }

      for (s = 0; s < 250; s += 20) {

        ctx3.beginPath();
        ctx3.moveTo(250, 260 + s);
        ctx3.lineTo(510 - s, 250);
        ctx3.stroke();

      }


      function draw2() {
        var ctx4 = document.getElementById('canvas4').getContext('2d');
        var x1 = 50;
        var x2 = 450;
        var y1 = 50;
        var y2 = 450;
        var c1 = [0, 255, 0];
        var c2 = [0, 0, 255];
        for (var i = 0; i <= 1; i += 0.1) {
          var xt = x2 * (i) + x1 * (1 - i);
          var yt = y2 * (i) + y1 * (1 - i);
          var rt = c1[0] * (i) + c2[0] * (1 - i);
          var gt = c1[1] * (i) + c2[1] * (1 - i);
          var bt = c1[2] * (i) + c2[2] * (1 - i);

          ctx4.beginPath();
          ctx4.arc(xt, yt, 15, 0, Math.PI * 2, true);
          ctx4.fillStyle = 'rgb(' + rt + ',' + gt + ',' + bt + ')';
          ctx4.fill();

        }
      }

      draw2();

      function fractal() {
        var canvas = document.getElementById('canvas5');
        var ctx5 = canvas.getContext('2d');
        rect([50, 50], [450, 50], [450, 450], [50, 450], s, ctx5);
      }

      function rect(a, b, c, d, s, ctx5) {
        ctx5.beginPath();
        ctx5.moveTo(a[0], a[1]);
        ctx5.lineTo(b[0], b[1]);
        ctx5.lineTo(c[0], c[1]);
        ctx5.lineTo(d[0], d[1]);
        ctx5.closePath();
        ctx5.stroke();

        if (s > 0) {
          var step = 0.1;
          var ta = [];
          ta[0] = a[0]*(step) + b[0]*(1 - step);
          ta[1] = a[1]*(step) + b[1]*(1 - step);

          var tb = [ ];
          tb[0] = b[0]*(step) + c[0]*(1 - step);
          tb[1] = b[1]*(step) + c[1]*(1 - step);
          
          var tc = [ ];
          tc[0] = c[0]*(step) + d[0]*(1 - step);
          tc[1] = c[1]*(step) + d[1]*(1 - step);
          
          var td = [ ];
          td[0] = d[0]*(step) + a[0]*(1 - step);
          td[1] = d[1]*(step) + a[1]*(1 - step);
   
          rect(ta,tb,tc,td, s-1 ,ctx5);
        }

      }

      fractal();