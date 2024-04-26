# Gradient

Create's gradient class. Can be used in all figure and text layers.

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
        <td>Sets 2 control points to create a gradient</td>
        <td>array</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>addColorPoints</td>
        <td>Add's color point to your gradient</td>
        <td>array</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setType()</td>
        <td>Sets the type of gradient</td>
        <td>string</td>
        <td>true</td>
        <td>Can be only: linear and radial</td>
    </tr>
    <tr>
        <td>setRadius()</td>
        <td>Sets the radii of gradient circle's</td>
        <td>number, number</td>
        <td>false</td>
        <td>Use only for radial gradient</td>
    </tr>
</table>

<br>

## Example
```js
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
```