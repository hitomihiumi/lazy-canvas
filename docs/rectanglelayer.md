# RectangleLayer

Layer class for creating a rectangle.

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
        <td>setHeight()</td>
        <td>Sets the height of the figure</td>
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
        <td>string or Gradient*</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

*[Gradient](./gradient.md)

<br>

## Example

```js
const { LazyCanvas, RectangleLayer } = require('@hitomihiumi/lazy-canvas')

let rectangle = new RectangleLayer()
.setX(10)
.setY(10)
.setWidth(200)
.setHeight(100)
.setColor('#FF0000')

const lazy = new LazyCanvas()
.addLayers(rectangle)
//...
```