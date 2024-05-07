const { LazyCanvas, Gradient, CircleLayer } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new CircleLayer()
    .setX(50)
    .setY(50)
    .setRadius(200)
    .setColor(
        new Gradient()
        .addColorPoints(
            { color: '#ff0000', position: 0 },
            { color: '#00ff00', position: 0.5 },
            { color: '#0000ff', position: 1 }
        ).setPoints(
            { x: 250, y: 250 }
        ).setType('radial')
        .setRadius(200)
    )
)

console.log(lazy.getData().layers[0].color)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()