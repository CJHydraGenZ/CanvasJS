window.addEventListener('load', () => {
    var cv = document.querySelector('#cv');
    var ctx = cv.getContext('2d');

    cv.width = innerWidth;
    cv.height = innerHeight;

    ctx.beginPath();


    for (var i = 0, j = 0; i < 20; i++) {
        for (var k = 0; k < 20; k++) {
            ctx.fillStyle = `hsl(${j},100%,50%)`;
            ctx.fillRect(i * 25, k * 25, 24, 24);
            j += 17;
        }
    }


})