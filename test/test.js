const { LazyCanvas, Gradient, SquareLayer, Pattern, ImageLayer, CircleLayer, textMetrics, saveFile, generateRandomName } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new SquareLayer()
    .setX(50)
    .setY(50)
    .setWidth(400)
    .setColor(
        new Pattern()
            .setPattern(
                new LazyCanvas()
                    .createNewCanvas(15, 15)
                    .addLayers(
                        new CircleLayer()
                        .setX(1)
                        .setY(1)
                        .setRadius(7)
                        .setColor(
                            new Gradient()
                                .addColorPoints(
                                    { position: 0, color: 'red' },
                                    { position: 1, color: '#ff8a8a' }
                                ).setType('linear')
                                .setPoints(
                                    { x: 0, y: 0 },
                                    { x: 12, y: 12 }
                                )
                        ),
                        new SquareLayer()
                        .setX(9)
                        .setY(4.5)
                        .setWidth(6)
                        .setColor('white')
                    ))
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