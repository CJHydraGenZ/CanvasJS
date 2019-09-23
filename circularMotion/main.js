// import utils from '/.utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66', '#03d7fc', '#a503fc', '#24ff50', '#000000', '#fc0303', '#f4fc03']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

// Objects
function Partikel(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05
    this.distanceFromCenter = {
        x: randomIntFromRange(50, 120),
        y: randomIntFromRange(50, 120)
    };

    this.lastMouse = {
        x: x,
        y: y
    }
    this.update = function () {

        const lasthpoint = {
            x: this.x,
            y: this.y
        }
        // drag effect
        this.lastMouse.x += (
            mouse.x - this.lastMouse.x
        ) * 0.05
        this.lastMouse.y += (
            mouse.y - this.lastMouse.y
        ) * 0.05

        // circularMotion
        this.radians += this.velocity;
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter.x
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter.y;


        this.draw(lasthpoint)
    }


    this.draw = lasthpoint => {
        c.beginPath()
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.fillStyle = this.color
        // c.fill()
        c.strokeStyle = this.color
        c.lineWidth = this.radius
        c.moveTo(lasthpoint.x, lasthpoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        c.closePath()
    }


}
// Implementation
let partikel

function init() {
    partikel = []

    for (let i = 0; i < 100; i++) {
        // objects.push()

        const radius = (Math.random() * 2) + 1;
        partikel.push(new Partikel(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
    }
    // console.log(partikel);

}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = `rgba(255,255,255,0.3)`
    c.fillRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    partikel.forEach(partikel => {
        partikel.update();
    })
}

init()
animate()