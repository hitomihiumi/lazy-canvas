const { LazyCanvas, ImageLayer, Filter, EllipseImageLayer } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(
    new ImageLayer()
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setX(0)
    .setY(0)
    .setWidth(500)
    .setHeight(500),
    new EllipseImageLayer()
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setX(0)
    .setY(0)
    .setRadius(250)
    .setWidth(500)
    .setHeight(500)
    .setFilter(
        new Filter()
        .setType('blur')
    )
)

console.log(lazy.data)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()