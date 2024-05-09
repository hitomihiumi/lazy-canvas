# ArcLayer

Arc layer class.

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
        <td>setRadius()</td>
        <td>Sets the radius of the circle</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setAngles()</td>
        <td>Sets the start and end angles of the arc</td>
        <td>array</td>
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
        <td>string, Gradient* or Pattern*</td>
        <td>false</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setClockwise()</td>
        <td>Sets whether the arc is drawn clockwise or counterclockwise</td>
        <td>boolean</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

*[Gradient](./gradient.md)
*[Pattern](./pattern.md)

<br>

## Example

```js
const { LazyCanvas, ArcLayer } = require('@hitomihiumi/lazy-canvas')

let arc = new ArcLayer()
.setX(400)
.setY(300)
.setRadius(100)
.setColor('#fff')
.setStroke(5)
.setFilled(false)
.setAngles(0, Math.PI / 2)

const lazy = new LazyCanvas()
.addLayers(arc)
//...
```