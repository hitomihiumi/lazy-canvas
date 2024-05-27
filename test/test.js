const { LazyCanvas, Gradient, SquareLayer, Pattern, ImageLayer, CircleLayer, textMetrics, saveFile, generateRandomName } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new SquareLayer()
    .setX(20)
    .setY(20)
    .setWidth(460)
    .setColor(
        new Pattern()
        .setPattern('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
        .setType('repeat')
    )
)

console.log(lazy.getData().layers[0].color)

console.log(generateRandomName())

async function main() {
    let data = await lazy.renderImage()
    await saveFile(data, 'png', 'output')
}

main()