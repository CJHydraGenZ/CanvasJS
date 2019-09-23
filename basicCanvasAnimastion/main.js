window.addEventListener('load', () => {

    function init() {
        ctx = document.querySelector('#cv').getContext('2d');
        tick();
    }

    function tick() {
        draw();
        setTimeout(() => {
            tick();
        }, 1000)
    }

    function draw() {

        for (var j = 0; j <= 400; j += 10) {

            for (var i = 0; i <= 400; i += 10) {

                var rgb1 = Math.ceil(Math.random() * 255)
                var rgb2 = Math.ceil(Math.random() * 255)
                var rgb3 = Math.ceil(Math.random() * 255)


                var rgbValue = `rgb(${rgb1},${rgb2},${rgb3})`;

                ctx.fillStyle = rgbValue;
                ctx.fillRect(i, j, 10, 10);
            }
        }
    }


    init();
});


//Complate