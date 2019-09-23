window.addEventListener('load', () => {


    var cv = document.querySelector('#cv');
    var ctx = cv.getContext('2d');



    var w = window.innerWidth;
    var h = window.innerHeight;

    cv.width = w;
    cv.height = h;
    //gambar
    var np = 225;
    var partikel = [];

    // console.log(partikel);
    var rgb = [];
    // console.log(rba);


    for (var i = 0; i < np; i++) {
        partikel.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 6 + 1,
            d: Math.random() * np
        });
    }

    for (var i = 0; i < np; i++) {
        rgb.push({
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255),

        })
    }

    // console.log(rgb);


    function draw() {

        ctx.clearRect(0, 0, w, h);
        rgb.forEach(rgb => {
            // console.log(rgb);

            ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.8)`;
        });
        // ctx.fillStyle = `rgba(255,255,255,0.8)`;

        ctx.beginPath();

        for (var i = 0; i < np; i++) {
            var p = partikel[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    var angle = 6;

    function update() {

        angle += 0.01;
        for (var i = 0; i < np; i++) {
            // var RGB = rgb[i];
            var p = partikel[i];
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;


            if (p.x > w + 7 || p.x < -7 || p.y > h) {
                if (i % 3 > 0) {
                    partikel[i] = {
                        x: Math.random() * w,
                        y: -10,
                        r: p.r,
                        d: p.d
                    };

                } else {
                    if (Math.sin(angle) > 0) {
                        partikel[i] = {
                            x: -5,
                            y: Math.random() * h,
                            r: p.r,
                            d: p.d

                        }
                    } else {
                        partikel[i] = {
                            x: w + 7,
                            y: Math.random() * h,
                            r: p.r,
                            d: p.d
                        }
                    }
                }
            }
        }

    }
    setInterval(draw, 33);
})






// });