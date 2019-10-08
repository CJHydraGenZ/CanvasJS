var cv = document.querySelector('#cv');


var ctx = cv.getContext('2d')
// console.log(ctx);

cv.width = innerWidth
cv.height = innerHeight

// ctx.fillStyle = 'blue'
// ctx.fillRect(30, 30, 300, 300)

// ctx.fillStyle = 'red'
// ctx.fillRect(350, 30, 200, 200)

let kotak = {
    x: 20,
    y: 20,
    w: 200,
    h: 200
}
let kotak1 = {
    x: 250,
    y: 20,
    w: 200,
    h: 200
}

let lingkaran = {
    x: 600,
    y: 120,
    r: 50,
    StartAngle: 0,
    Endangle: Math.PI * 2

}
let lingkaran1 = {
    x: 600,
    y: 300,
    r: 50,
    StartAngle: 0,
    Endangle: Math.PI * 2

}

ctx.font = 'Bold 40px arial,sans-serif'
ctx.fillStyle = '#c203fc'
// ctx.fillText('Gambar Pda Canvas', 100, 100, 400)

ctx.lineWidth = 2
ctx.strokeStyle = '#e3fc03'
ctx.strokeText('Gambar Pda Canvas', 100, 100, 400)

// ctx.fillStyle = 'blue'
// ctx.fillRect(kotak.x, kotak.y, kotak.w, kotak.h)


// ctx.strokeStyle = 'red'
// ctx.lineWidth = 10
// ctx.strokeRect(kotak.x, kotak.y, kotak.w, kotak.h)



// ctx.strokeStyle = '#f5ce42'
// ctx.lineWidth = 5
// ctx.strokeRect(kotak1.x, kotak1.y, kotak1.w, kotak1.h)


// //harus ada setiap membuat lingkaran
// ctx.beginPath();
// ctx.arc(lingkaran.x, lingkaran.y, lingkaran.r, lingkaran.StartAngle, lingkaran.Endangle)
// // ctx.fill untuk mencetak lingkaran
// ctx.fill()


// ctx.beginPath()
// ctx.arc(lingkaran1.x, lingkaran1.y, lingkaran1.r, lingkaran1.StartAngle, lingkaran1.Endangle)
// ctx.strokeStyle = '#42f54b'
// ctx.stroke()


// ctx.beginPath()
// ctx.moveTo(700, 100)
// ctx.lineTo(850, 150)
// ctx.lineTo(850, 300)
// ctx.lineTo(700, 300)
// ctx.closePath()
// ctx.stroke()


// ctx.beginPath()
// ctx.moveTo(850, 200)
// ctx.lineTo(1000, 400)
// ctx.lineTo(850, 400)
// ctx.closePath()
// ctx.fillStyle = '#03dbfc'
// ctx.fill()