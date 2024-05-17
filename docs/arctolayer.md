# ArcToLayer

ArcTo layer class.

Extends [BaseLayer](./baselayer.md)

<br>

<table>
    <tr>
        <td>Method</td>
        <td>Description</td>
        <td>Data type</td>
        <td>Required</td>
        <td>Notes</td>
    </tr>
    <tr>
        <td>setRadius()</td>
        <td>Sets the radius of the circle</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setPoints()</td>
        <td>Sets the start and control points of the arc</td>
        <td>array</td>
        <td>true</td>
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
        <td>string, Gradient* or Pattern*</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

*[Gradient](./gradient.md)
*[Pattern](./pattern.md)

<br>

## Example

```js
const { LazyCanvas, ArcToLayer } = require('@hitomihiumi/lazy-canvas')

let arcTo = new ArcToLayer()
.setPoints({ x: 400, y: 50 }, { x: 300, y: 230 }, { x: 150, y: 20 })
.setRadius(120)
.setColor('#fff')
.setStroke(5)

const lazy = new LazyCanvas()
.addLayers(arcTo)
//...
```