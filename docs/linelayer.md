# LineLayer

Layer class for creating a line.

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
        <td>Sets 2 control points to create a line</td>
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
        <td>string or [Gradient](./gradient.md)</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

<br>

## Example

```js
const { LazyCanvas, LineLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let line = new LineLayer()
.setPoints({ x: 10, y: 10 }, { x: 100, y: 100 })
.setColor('#fff')
.setStroke(5)

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(line)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()
```