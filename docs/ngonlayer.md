# NgonLayer

Layer class to create proper ngons

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
        <td>setPoints()</td>
        <td>Sets the control points that will be the corners of the shape</td>
        <td>array</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setStroke()</td>
        <td>Sets the line thickness</td>
        <td>number</td>
        <td>true</td>
        <td></td>
    </tr>
    <tr>
        <td>setColor()</td>
        <td>Sets the figure color</td>
        <td>string</td>
        <td>true</td>
        <td>-</td>
    </tr>
</table>

<br>

## Example

```js
const { LazyCanvas, NgonLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let ngon = new NgonLayer()
.setRadius(50)
.setSides(6)
.setColor('#fff')
.setFilled(true)

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(ngon)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()
```
