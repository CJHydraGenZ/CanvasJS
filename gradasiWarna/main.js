const cv = document.querySelector('#cv');
const ctx = cv.getContext('2d')


cv.width = innerWidth;
cv.height = innerHeight;


let g = ctx.createLinearGradient(100, 100, 200, 100)
g.addColorStop(0, 'red')
g.addColorStop(0.5, 'yellow')
g.addColorStop(1, 'blue')

let g2 = ctx.createLinearGradient(100, 100, 200, 100)
g2.addColorStop(0, 'blue')
g2.addColorStop(0.5, 'yellow')
g2.addColorStop(1, 'red')

ctx.fillStyle = g
ctx.fillRect(100, 100, 200, 150)

ctx.strokeStyle = g2
ctx.lineWidth = 20
ctx.strokeRect(100, 100, 200, 150)

let gl = ctx.createRadialGradient(500, 100, 0, 500, 100, 200)
gl.addColorStop(0, 'red')
gl.addColorStop(1, 'green')

ctx.fillStyle = gl
ctx.fillRect(400, 100, 200, 150)