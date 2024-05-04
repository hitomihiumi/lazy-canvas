# BaseLayer

Layer base class.

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
        <td>setX()</td>
        <td>Sets the X-axis position of the layer</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setY()</td>
        <td>Sets the Y-axis position of the layer</td>
        <td>number</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setShadowColor()</td>
        <td>Sets the shadow color for the layer</td>
        <td>string</td>
        <td>false</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setShadowBlur()</td>
        <td>Sets the degree of shadow blur</td>
        <td>number</td>
        <td>false</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setShadowOffsetX()</td>
        <td>Sets the X-axis offset of the shadow relative to the layer</td>
        <td>number</td>
        <td>false</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setShadowOffsetY()</td>
        <td>Sets the Y-axis offset of the shadow relative to the layer</td>
        <td>number</td>
        <td>false</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setAlpha()</td>
        <td>Sets the degree of transparency of the layer</td>
        <td>number</td>
        <td>false</td>
        <td>Values can only be from 1 to 0 (fractions are allowed)</td>
    </tr>
    <tr>
        <td>setRotation()</td>
        <td>Sets the rotation value of the layer in the clockwise direction</td>
        <td>number</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

<br>

# Example

```js
const { LazyCanvas, BaseMethod, BaseLayer } = require('@hitomihiumi/lazy-canvas')

class ExampleImage extends BaseLayer {
    constructor(data = {}) {
        super(data)
        this.data.type = 'exampleimage' // name of layer type
    }

    setWidth(width) {
        if (!width) throw new Error('Width must be provided')
        if (isNaN(width)) throw new Error('Width must be a number')
        this.data.width = width
        return this
    }

    setHeight(height) {
        if (!height) throw new Error('Height must be provided')
        if (isNaN(height)) throw new Error('Height must be a number')
        this.data.height = height
        return this
    }

    // Example of function for set image
    setImage(image) {
        if (!image) throw new Error('Image must be provided')
        if (!isImageUrlValid(image)) throw new Error('Image must be a valid URL')
        this.data.image = image
        return this
    }
}

class ExampleRect extends BaseLayer {
    constructor(data = {}) {
        super(data)
        this.data.type = 'examplerect' // name of layer type
    }

    setWidth(width) {
        if (!width) throw new Error('Width must be provided')
        if (isNaN(width)) throw new Error('Width must be a number')
        this.data.width = width
        return this
    }

    setHeight(height) {
        if (!height) throw new Error('Height must be provided')
        if (isNaN(height)) throw new Error('Height must be a number')
        this.data.height = height
        return this
    }

    // Example of function for set color
    setColor(color) {
        if (!color) throw new Error('Color must be provided')
        if (!isValidColor(color)) throw new Error('Color must be a string')
        this.data.color = color
        return this
    }
}

//...

const exampleImage = new ExampleImage()
.setX(100)
.setY(100)
.setWidth(200)
.setHeight(200)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

const exampleRect = new ExampleRect()
.setX(100)
.setY(300)
.setWidth(200)
.setHeight(200)
.setColor('#ff8a8a')

const lazy = new LazyCanvas()
.addLayers(
    exampleImage, exampleRect
)
//...
```