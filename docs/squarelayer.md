# SquareLayer

Layer class for creating a square.

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
        <td>setWidth()</td>
        <td>Sets the width of the figure</td>
        <td>number</td>
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
</table>

*[Gradient](./gradient.md)
*[Pattern](./pattern.md)

<br>

## Example

```js
const { LazyCanvas, SquareLayer } = require('@hitomihiumi/lazy-canvas')

let square = new SquareLayer()
.setX(10)
.setY(10)
.setWidth(150)
.setColor('#FF0000')

const lazy = new LazyCanvas()
.addLayers(square)
//...
```