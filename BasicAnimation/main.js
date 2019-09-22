function init() {

    var cv = document.querySelector('#cv');
    var ctx = cv.getContext('2d');

    ctx.fillRect(0, 0, ctx.width, ctx.height);
    var radius = 1;
    var color = 0;



    function draw() {
        ctx.fillStyle = 'hsl(' + color++ + ',100%,50%';
        ctx.beginPath();
        ctx.arc(500, 500, radius, 0, 2 * Math.PI, false);
        ctx.fill();
        radius += 0.4;


        if (radius < 400) {
            requestAnimationFrame(draw);
        }
    }

    draw()

}


window.addEventListener('load', init, false);