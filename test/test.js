const { LazyCanvas, CircleLayer, RectangleLayer } = require('../src/index')
const fs = require('fs')

const circle = new CircleLayer()
.setX(100)
.setY(100)
.setRadius(100)
.setFilled(true)
.setColor("#FF8A8A")
.setAlpha(0.5)

const rectangle = new RectangleLayer()
.setX(300)
.setY(300)
.setWidth(100)
.setHeight(120)
.setFilled(true)
.setColor('blue')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(circle, rectangle)

console.log(lazy.data)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()