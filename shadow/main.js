const cv = document.querySelector('#cv')
const ctx = cv.getContext('2d')

cv.width = innerWidth
cv.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
})

function draw() {

    console.log('X:', mouse.x, 'Y:', mouse.y);

    // // ctx.beginPath();
    // ctx.shadowColor = 'rgba(0,0,0,0.5)'
    // ctx.shadowOffsetX = 5
    // ctx.shadowOffsetY = 5
    // ctx.shadowBlur = 5
    // // ctx.clearPath();


    // ctx.fillStyle = 'red'
    // ctx.fillRect(100, 100, 200, 200)

    ctx.shadowColor = 'rgba(0,255,0,0.5)'
    ctx.shadowOffsetX = 5
    ctx.shadowOffsetY = 5
    ctx.shadowBlur = 5
    // ctx.font = 'Bold 30px arial'
    // ctx.fillText('bayangan', 300, 100)

    var time = new Date()
    ctx.beginPath()
    ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2)
    ctx.strokeStyle = 'blue'
    ctx.moveTo(mouse.x + 10, mouse.y + 10)
    ctx.lineTo(mouse.x + 100, mouse.y + 100)
    ctx.lineTo(mouse.x + -100, mouse.y + -100)
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());

    // ctx.translate(mouse.x, mouse.y)

    ctx.stroke()
    // ctx.closeStroke()
    ctx.closePath()

    requestAnimationFrame(draw)
}

draw();