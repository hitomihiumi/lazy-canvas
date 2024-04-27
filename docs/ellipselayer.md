# EllipseLayer

The class of the layer that allows to create an ellipse.

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
        <td>Sets the width of the figure/td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setHeight()</td>
        <td>Sets the height of the figure</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setRadius()</td>
        <td>Sets the rounding radius</td>
        <td>number</td>
        <td>true</td>
        <td>IMPORTANT! Use a value no greater than half the value of the smallest side</td>
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
        <td>string or Gradient*</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

*[Gradient](./gradient.md)

<br>

## Example

```js
const { LazyCanvas, EllipseLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let ellipse = new EllipseLayer()
.setX(100)
.setY(100)
.setWidth(300)
.setHeight(200)
.setRadius(100)
.setColor('red')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(ellipse)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()
```