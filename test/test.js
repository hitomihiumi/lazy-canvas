const { LazyCanvas, Font, TextLayer } = require('../src/index')
const fs = require('fs')

const lazy = new LazyCanvas()
.createNewCanvas(600, 200)
//.loadFonts(new Font().setFamily("JoeKubert").setWeight("regular").setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf"))
.addLayers(
    new TextLayer()
    .setText("Hello World! This is a test of the LazyCanvas library.")
    .setFont("Arial")
    .setFontSize(25)
    .setColor("#fff")
    .setMultiline(true)
    .setX(50)
    .setY(100)
    .setHeight(100)
    .setWidth(500)
)

console.log(lazy.data)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()