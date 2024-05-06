# EllipseImageLayer

Layer class that creates an image with rounded corners.

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
        <td>setRadius()</td>
        <td>Sets the rounding radius</td>
        <td>number</td>
        <td>true</td>
        <td>IMPORTANT! Use a value no greater than half the value of the smallest side</td>
    </tr>
    <tr>
        <td>setImage()</td>
        <td>Sets the image by means of a URL or specifying a file path</td>
        <td>string</td>
        <td>true</td>
        <td>Specify the path to the image starting from the root folder of the project</td>
    <tr>
        <td>setFilter()</td>
        <td>Allows you to apply a filter to an image</td>
        <td>*Filter</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

*[Filter](./filter.md)

<br>


## Example

```js
const { LazyCanvas, EllipseImageLayer } = require('@hitomihiumi/lazy-canvas')

let ellipseImage = new EllipseImageLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setRadius(50)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

const lazy = new LazyCanvas()
.addLayers(ellipseImage)
//...
```