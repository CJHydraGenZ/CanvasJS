window.addEventListener('load', () => {



    // console.log(ctx);



    function draw() {

        var cv = document.querySelector('#cv');
        var ctx = cv.getContext('2d');

        var rdl = ctx.createRadialGradient(175, 175, 25, 175, 175, 100);
        rdl.addColorStop(0.0, '#f00');
        rdl.addColorStop(0.5, '#00f');
        rdl.addColorStop(1.0, '#0f0');

        setInterval(() => {
            ctx.beginPath();
            ctx.fillStyle = rdl;
            ctx.arc(175, 175, 100, 0, 2 * Math.PI);
            ctx.fill();
            ctx.translate(175, 175);
            ctx.rotate(2);
        }, 50)



    }

    draw();


})