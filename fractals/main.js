  //Variables
  var a;
  var b;
  var c;
  var x;
  var y;
  var z;
  var j;
  var dots;
  var xp;
  var yp;
  var i;
  var colors;
  var randomColour;
  var canvas = document.getElementById("cv");
  var context = canvas.getContext("2d");

  //Resize and fill in canvas
  canvas.width = screen.width;
  canvas.height = screen.height;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);


  a = Math.random();
  b = 0.9998;
  c = 2 - 2 * a;
  dots = 80000;
  x = 0;
  j = 0;
  y = Math.random() * 12 + 0.1;

  i = 0;

  function draw() {
      if (i <= dots) {
          z = x;
          x = b * y + j;
          j = a * x + (c * (Math.pow(x, 2))) / (1 + Math.pow(x, 2));
          y = j - z;
          xp = (x * 20) + (canvas.width / 2);
          yp = (y * 20) + (canvas.height / 2);
          context.fillRect(xp, yp, 2, 2);
          i++;
          setTimeout(draw);
      };
  };
  setTimeout(draw)
  timeout();

  function timeout() {

      colors = ["#FF0000", "#FFD700", "#008000", "#0000FF"]
      randomColour = colors[Math.floor(Math.random() * colors.length)];
      context.fillStyle = randomColour;
      setTimeout(function () {

          a = Math.random();
          b = 0.9998;
          c = 2 - 2 * a;
          dots = 50000;
          x = 0;
          j = 0;
          y = Math.random() * 12 + 0.1;

          i = 0;

          function draw() {
              if (i <= dots) {
                  z = x;
                  x = b * y + j;
                  j = a * x + (c * (Math.pow(x, 2))) / (1 + Math.pow(x, 2));
                  y = j - z;
                  xp = (x * 20) + (canvas.width / 2);
                  yp = (y * 20) + (canvas.height / 2);
                  context.fillRect(xp, yp, 2, 2);
                  i++;
                  setTimeout(draw);
              };
          };
          setTimeout(draw)
          timeout();
      }, 6000);
  }

  timeout();