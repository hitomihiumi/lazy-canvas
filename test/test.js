const { LazyCanvas, Gradient, CircleLayer } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new CircleLayer()
    .setRadius(100)
    .setColor(
        new Gradient()
        .setPoints({ x: 250, y: 150 }, { x: 250, y: 350 })
        .addColorPoints(
            { color: '#FF0000', position: 0 },
            { color: '#00FF00', position: 0.9 },
            { color: '#0000FF', position: 1 }
        )
        .setType('linear')
        .setRadius(30, 100)
    )
    .setX(250)
    .setY(250)
)

console.log(lazy.data)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()