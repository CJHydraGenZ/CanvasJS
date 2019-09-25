window.addEventListener('load', () => {
    var cv = document.querySelector('#cv');
    var ctx = cv.getContext('2d');

    cv.width = innerWidth;
    cv.height = innerHeight;

    var mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2
    }

    var a = document.querySelector('#a');
    var b = document.querySelector('#b');
    var fps = document.querySelector('#fps');

    addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        a.textContent = mouse.x;
        b.textContent = mouse.y;



    })

    var preverusFremeTime = 0;

    function draw(time) {

        var FPS = Math.floor(1000 / (time - preverusFremeTime))

        preverusFremeTime = time;

        fps.textContent = FPS;

        ctx.beginPath();
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 3;

        ctx.moveTo(mouse.x, mouse.y);
        // ctx.lineTo(mouse.x, mouse.y);
        // ctx.lineTo(800, 400);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = 15;
        ctx.moveTo(mouse.x, mouse.y);
        ctx.arcTo(500, 100, 800, 400, Math.sin(2))
        ctx.clearRect(mouse.x, mouse.y, cv.width, cv.height)
        ctx.stroke();


        requestAnimationFrame(draw);
    }

    draw();
})