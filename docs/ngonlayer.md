# NgonLayer

Layer class to create proper ngons

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
        <td>Sets the control points that will be the corners of the shape</td>
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
        <td></td>
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
const { LazyCanvas, NgonLayer } = require('@hitomihiumi/lazy-canvas')

let ngon = new NgonLayer()
.setRadius(50)
.setSides(6)
.setColor('#fff')

const lazy = new LazyCanvas()
.addLayers(ngon)
//...
```
