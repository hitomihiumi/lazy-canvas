const { LazyCanvas, RectangleLayer, CircleLayer } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new RectangleLayer()
    .setX(100)
    .setY(100)
    .setWidth(300)
    .setHeight(300)
    .setColor('#FF0000'),
    new RectangleLayer()
    .setX(150)
    .setY(150)
    .setWidth(300)
    .setHeight(300)
    .setColor('#00FF00')
    .setGlobalCompositeOperation('source-out'),
    new CircleLayer()
    .setX(250)
    .setY(150)
    .setRadius(100)
    .setColor('#0000FF')
    .setShadowColor('#000000')
    .setShadowBlur(20)
    .setShadowOffsetX(10)
)

console.log(lazy.getData())

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()