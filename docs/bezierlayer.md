# BezierLayer

Layer class of the bezier curve.

Extends [BaseLayer](./baselayer.md)

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
        <td>Sets the start and end points</td>
        <td>array</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setControlPoints()</td>
        <td>Sets the deviation points of the line</td>
        <td>array</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setStroke()</td>
        <td>Sets the line thickness</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
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
const { LazyCanvas, BezierLayer } = require('@hitomihiumi/lazy-canvas')

let bezier = new BezierLayer()
.setColor('#fff')
.setStroke(5)
.setPoints({ x: 10, y: 10 }, { x: 300, y: 200 })
.setControlPoints({ x: 200, y: 100 }, { x: 100, y: 300 })

const lazy = new LazyCanvas()
.addLayers(bezier)
//...
```