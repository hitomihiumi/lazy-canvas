# Pattern

Pattern for LazyCanvas layers, used like color.

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
        <td>setPattern()</td>
        <td>Sets the pattern of the figure</td>
        <td>string or LazyCanvas*</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setType()</td>
        <td>Sets the type of the pattern</td>
        <td>string</td>
        <td>false</td>
        <td>types: repeat, no-repeat, repeat-x, repeat-y</td>
    </tr>
</table>

*[LazyCanvas](./lazycanvas.md)

<br>

## Example

```js
const { LazyCanvas, Pattern, SquareLayer } = require('@hitomihiumi/lazy-canvas')

let pattern = new Pattern()
.setPattern('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
.setType('repeat')

let square = new SquareLayer()
.setX(20)
.setY(20)
.setWidth(460)
.setColor(
    pattern
)

const lazy = new LazyCanvas()
.addLayers(square)
//...
```