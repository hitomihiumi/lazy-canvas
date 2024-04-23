# Font

A class designed to create a font object that can be loaded into LazyCanvas using the loadFonts() method.

<br>

<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Data type</th>
        <th>Required</th>
        <th>Notes<th>
    </tr>
    <tr>
        <td>setFamily()</td>
        <td>Sets the name of the font</td>
        <td>string</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setWeight()</td>
        <td>Sets the font weight</td>
        <td>string</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setPath()</td>
        <td>Sets the path to the font file</td>
        <td>string</td>
        <td>true</td>
        <td>The font file MUST be in the same directory as the project. Specify the path to the font starting from the root folder of the project</td>
    </tr>
</table>

<br>

## Example

```js
const { LazyCanvas, Font, TextLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let fontOne = new Font()
.setFamily("JoeKubert")
.setWeight("regular")
.setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let fontTwo = new Font()
.setFamily("Koulen")
.setWeight("regular")
.setPath("./fonts/Koulen-Regular.ttf")

// Multiline text
let textOne = new TextLayer()
.setText("This is a test of the LazyCanvas library.")
.setFont("JoeKubert")
.setFontSize(25)
.setWeight("regular")
.setColor("#fff")
.setMultiline(true)
.setX(50)
.setY(50)
.setHeight(100)
.setWidth(500)

// Single line text
let textTwo = new TextLayer()
.setText("Amazing text with amazing font!")
.setFont("Koulen")
.setFontSize(20)
.setWeight("regular")
.setColor("#fff")
.setMultiline(false)
.setX(50)
.setY(130)

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.loadFonts(fontOne, fontTwo)
.addLayers(textOne, textTwo)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()
```