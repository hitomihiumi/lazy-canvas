# ImageLayer

Rectangular image layer class.

Extends [BaseLayer](./baselayer.md)

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
        <td>setWidth()</td>
        <td>Sets the width of the image</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setHeight()</td>
        <td>Sets the height of the image</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setImage()</td>
        <td>Sets the image by means of a URL or specifying a file path</td>
        <td>string</td>
        <td>true</td>
        <td>Specify the path to the image starting from the root folder of the project</td>
    </tr>
</table>

<br>

## Example

```js
const { LazyCanvas, ImageLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let image = new ImageLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayers(image)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('output.png', pngData)
}

main()
```