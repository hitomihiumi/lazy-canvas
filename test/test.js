const { LazyCanvas, CircleLayer } = require('../index.js')
const fs = require('fs')

const circle = new CircleLayer()
.setX(100)
.setY(100)
.setDiameter(100)
.setFilled(true)
.setColor('red')

console.log(circle)

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayer(circle)

console.log(lazy.data)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()