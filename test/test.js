const { LazyCanvas, TextLayer } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new TextLayer()
    .setText('Hello, World!')
    .setX(200)
    .setAlign('right')
    .setY(100)
    .setFont('Arial')
    .setFontSize(30)
    .setColor('#fff')
    .setWeight('bold')
    .setRotation(45)
)

console.log(lazy.data)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()