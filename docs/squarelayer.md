# SquareLayer

Layer class for creating a square.

Extends [BaseLayer](./baselayer.md)

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
        <td>setWidth()</td>
        <td>Sets the width of the figure</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setFilled()</td>
        <td>Indicates the presence of filling in the figure</td>
        <td>boolean</td>
        <td>false</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setStroke()</td>
        <td>Sets the line thickness</td>
        <td>number</td>
        <td>false</td>
        <td>Specify only if the fill value is false</td>
    </tr>
    <tr>
        <td>setColor()</td>
        <td>Sets the figure color</td>
        <td>string or Gradient</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

<br>

## Example

```js
const { LazyCanvas, SquareLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let square = new SquareLayer()
.setX(10)
.setY(10)
.setWidth(150)
.setColor('#FF0000')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(square)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()
```