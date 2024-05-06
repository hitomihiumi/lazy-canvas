# Gradient

Create's gradient class. Can be used in all figure and text layers.

<br>

<table>
    <tr>
        <td>Method</td>
        <td>Description</td>
        <td>Data type</td>
        <td>Required</td>
        <td>Notes<td>
    </tr>
    <tr>
        <td>setPoints()</td>
        <td>Sets 2 control points to create a gradient</td>
        <td>array</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>addColorPoints()</td>
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
const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas')

let gradient = new Gradient()
.setPoints({ x: 250, y: 150 }, { x: 250, y: 350 })
.addColorPoints(
    { color: '#FF0000', position: 0 },
    { color: '#00FF00', position: 0.9 },
    { color: '#0000FF', position: 1 }
)
.setType('linear')
.setRadius(30, 100)

let circle = new CircleLayer()
.setRadius(100)
.setColor(
    gradient
)
.setX(250)
.setY(250)

const lazy = new LazyCanvas()
.addLayers(
    circle
)
//...
```