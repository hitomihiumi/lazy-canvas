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
        <td>Can be only: linear, radial and conic </td>
    </tr>
    <tr>
        <td>setRadius()</td>
        <td>Sets the radius of gradient circle's</td>
        <td>number</td>
        <td>false</td>
        <td>Use only for radial gradient</td>
    </tr>
</table>

<br>

## Example

### Linear
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
.setX(50)
.setY(50)
.setRadius(200)
.setColor(
    gradient
)

const lazy = new LazyCanvas()
.addLayers(
    circle
)
//...
```

### Radial
```js
const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas')

let gradient = new Gradient()
.addColorPoints(
    { color: '#ff0000', position: 0 },
    { color: '#00ff00', position: 0.5 },
    { color: '#0000ff', position: 1 }
).setPoints(
    { x: 250, y: 250 }
).setType('radial')
.setRadius(200)

let circle = new CircleLayer()
.setX(50)
.setY(50)
.setRadius(200)
.setColor(
    gradient
)

const lazy = new LazyCanvas()
.addLayers(
    circle
)
//...
```

### Conic
```js
const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas')

let gradient = new Gradient()
.addColorPoints(
    { color: '#ff0000', position: 0 },
    { color: '#00ff00', position: 0.5 },
    { color: '#0000ff', position: 1 }
).setPoints(
    { x: 250, y: 250 }
).setType('conic')

let circle = new CircleLayer()
.setX(50)
.setY(50)
.setRadius(200)
.setColor(
    gradient
)

const lazy = new LazyCanvas()
.addLayers(
    circle
)
//...
```