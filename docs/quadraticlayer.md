# QuadraticLayer

Class of the quadratic curve layer.

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
        <td>setControlPoint()</td>
        <td>Sets the deviation point of the line</td>
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
        <td>string or Gradient*</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

*[Gradient](./gradient.md)

<br>

## Example

```js
const { LazyCanvas, QuadraticLayer } = require('@hitomihiumi/lazy-canvas')

let quadratic = new QuadraticLayer()
.setColor('#fff')
.setStroke(5)
.setPoints({ x: 10, y: 10 }, { x: 300, y: 200 })
.setControlPoint({ x: 200, y: 100 })

const lazy = new LazyCanvas()
.addLayers(quadratic)
//...
```