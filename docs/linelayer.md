# LineLayer

Layer class for creating a line.

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
        <td>-</td>
    </tr>
    <tr>
        <td>setColor()</td>
        <td>Sets the figure color</td>
        <td>string, Gradient* or Pattern*</td>
        <td>false</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setLineDash()</td>
        <td>Sets the line dash pattern used when stroking lines</td>
        <td>array</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

*[Gradient](./gradient.md)
*[Pattern](./pattern.md)

<br>

## Example

```js
const { LazyCanvas, LineLayer } = require('@hitomihiumi/lazy-canvas')

let line = new LineLayer()
.setPoints({ x: 10, y: 10 }, { x: 100, y: 100 })
.setColor('#fff')
.setStroke(5)
.setLineDash([10, 5])

const lazy = new LazyCanvas()
.addLayers(line)
//...
```