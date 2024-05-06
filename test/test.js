const { LazyCanvas, LineLayer, ArcLayer, BezierLayer, QuadraticLayer } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new ArcLayer()
    .setRadius(100)
    .setColor('#fff')
    .setStroke(5)
    .setFilled(false)
    .setAngles(0, Math.PI / 2),
    new LineLayer()
    .setPoints({ x: 10, y: 10 }, { x: 200, y: 100 })
    .setStroke(5)
    .setColor('#fff')
    .setLineDash([10, 5]),
    new BezierLayer()
    .setColor('#fff')
    .setStroke(5)
    .setPoints({ x: 10, y: 10 }, { x: 300, y: 200 })
    .setControlPoints({ x: 200, y: 100 }, { x: 100, y: 300 }),
    new QuadraticLayer()
    .setColor('#fff')
    .setStroke(5)
    .setPoints({ x: 10, y: 10 }, { x: 300, y: 200 })
    .setControlPoint({ x: 200, y: 100 })
)

console.log(lazy.getData().layers[0])

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()