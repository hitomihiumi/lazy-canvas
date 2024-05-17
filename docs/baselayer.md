# BaseLayer

Layer base class.

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
    <tr>
        <td>setGlobalCompositeOperation()</td>
        <td>Sets the type of compositing operation to apply when drawing new shapes</td>
        <td>string</td>
        <td>false</td>
        <td>-</td>
    </tr>
</table>

<br>

## Global Composite Operation table

<table>
    <tr>
        <td>Value</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>source-over</td>
        <td>This is the default setting and draws new shapes on top of the existing canvas content</td>
    </tr>
    <tr>
        <td>source-in</td>
        <td>The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent</td>
    </tr>
    <tr>
        <td>source-out</td>
        <td>The new shape is drawn where it doesn't overlap the existing canvas content</td>
    </tr>
    <tr>
        <td>source-atop</td>
        <td>The new shape is only drawn where it overlaps the existing canvas content</td>
    </tr>
    <tr>
        <td>destination-over</td>
        <td>New shapes are drawn behind the existing canvas content</td>
    </tr>
    <tr>
        <td>destination-in</td>
        <td>The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent</td>
    </tr>
    <tr>
        <td>destination-out</td>
        <td>The existing content is kept where it doesn't overlap the new shape</td>
    </tr>
    <tr>
        <td>destination-atop</td>
        <td>The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content</td>
    </tr>
    <tr>
        <td>lighter</td>
        <td>Where both shapes overlap, the color is determined by adding color values</td>
    </tr>
    <tr>
        <td>copy</td>
        <td>Only the new shape is shown</td>
    </tr>
    <tr>
        <td>xor</td>
        <td>Shapes are made transparent where both overlap and drawn normal everywhere else</td>
    </tr>
    <tr>
        <td>multiply</td>
        <td>The pixels of the top layer are multiplied with the corresponding pixels of the bottom layer. A darker picture is the result</td>
    </tr>
    <tr>
        <td>screen</td>
        <td>The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)</td>
    </tr>
    <tr>
        <td>overlay</td>
        <td>A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter</td>
    </tr>
    <tr>
        <td>darken</td>
        <td>Retains the darkest pixels of both layers</td>
    </tr>
    <tr>
        <td>lighten</td>
        <td>Retains the lightest pixels of both layers</td>
    </tr>
    <tr>
        <td>color-dodge</td>
        <td>Divides the bottom layer by the inverted top layer</td>
    </tr>
    <tr>
        <td>color-burn</td>
        <td>Divides the inverted bottom layer by the top layer, and then inverts the result</td>
    </tr>
    <tr>
        <td>hard-light</td>
        <td>Like overlay, a combination of multiply and screen — but instead with the top layer and bottom layer swapped</td>
    </tr>
    <tr>
        <td>soft-light</td>
        <td>A softer version of hard-light. Pure black or white does not result in pure black or white</td>
    </tr>
    <tr>
        <td>difference</td>
        <td>Subtracts the bottom layer from the top layer — or the other way round — to always get a positive value</td>
    </tr>
    <tr>
        <td>exclusion</td>
        <td>Like difference, but with lower contrast</td>
    </tr>
    <tr>
        <td>hue</td>
        <td>Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer</td>
    </tr>
    <tr>
        <td>saturation</td>
        <td>Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer</td>
    </tr>
    <tr>
        <td>color</td>
        <td>Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer</td>
    </tr>
    <tr>
        <td>luminosity</td>
        <td>Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer</td>
    </tr>
</table>

<br>

# Example

```js
const { LazyCanvas, BaseMethod, BaseLayer, isImageUrlValid, isValidColor } = require('@hitomihiumi/lazy-canvas')

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