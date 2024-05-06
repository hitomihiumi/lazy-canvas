# Filter

Class for creating a structure of filters applied to PICTURES.

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
        <td>setType()</td>
        <td>Set filter type, all filter types are presented in the table below</td>
        <td>string</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setOption()</td>
        <td>Sets the value for the filter, if required</td>
        <td>number</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

<br>

<table>
    <tr>
        <th>Filter</th>
        <td>Description</td>
        <td>Data type</td>
    </tr>
    <tr>
        <td>blur</td>
        <td>Fast blur the image by r pixels</td>
        <td>number</td>
    </tr>
    <tr>
        <td>brightness</td>
        <td>Adjust the brighness by a value -1 to +1</td>
        <td>number</td>
    </tr>
    <tr>
        <td>contrast</td>
        <td>Adjust the contrast by a value -1 to +1</td>
        <td>number</td>
    </tr>
    <tr>
        <td>daither565</td>
        <td>Ordered dithering of the image and reduce color space to 16-bits (RGB565)</td>
        <td>-</td>
    </tr>
    <tr>
        <td>gaussian</td>
        <td>Gaussian blur the image by r pixels (VERY slow)</td>
        <td>number</td>
    </tr>
    <tr>
        <td>grayscale</td>
        <td>Remove colour from the image</td>
        <td>-</td>
    </tr>
    <tr>
        <td>invert</td>
        <td>Invert the image colours</td>
        <td>-</td>
    </tr>
    <tr>
        <td>normalize</td>
        <td>Normalize the channels in an imag</td>
        <td>-</td>
    </tr>
    <tr>
        <td>sepia</td>
        <td>Apply a sepia wash to the image</td>
        <td>-</td>
    </tr>
</table>

<br>

# Example

```js
const { LazyCanvas, Filter, ImageLayer } = require('@hitomihiumi/lazy-canvas')

let filter = new Filter()
.setType('brightness')
.setOption(-0.1)

let image = new ImageLayer()
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
.setX(0)
.setY(0)
.setWidth(500)
.setHeight(500)
.setFilter(
    filter
)

const lazy = new LazyCanvas()
.addLayers(
    image
)
//...
```