# BaseMethod

A class to create a new method structure to be loaded into LazyCanvas.

<br>

<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Data type</th>
        <th>Required</th>
        <th>Notes<th>
    </tr>
    <tr>
        <td>setName()</td>
        <td>Sets the layer type specified in the custom layer class</td>
        <td>string</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setMethod()</td>
        <td>Sets the function to draw a layer with the specified type</td>
        <td>function</td>
        <td>true</td>
        <td>-</td>
    </tr>
</table>

<br>

# Example

```js
const { LazyCanvas, BaseMethod } = require('@hitomihiumi/lazy-canvas')
//...
function exampleRectFunc(ctx, data) {
    ctx.fillStyle = color(ctx, data.color)
    ctx.fillRect(data.x, data.y, data.width, data.height)
}

const exampleRectMethod = new BaseMethod()
.setName('examplerect')
.setMethod(exampleRectFunc)

const lazy = new LazyCanvas()
.loadMethods(
    exampleRectMethod
)
//...
```