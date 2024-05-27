# Utils

Utilities that you can use for your methods.

<br>

<table>
    <tr>
        <td>Method</td>
        <td>Description</td>
        <td>Data type</td>
    </tr>
    <tr>
        <td>isValidColor()</td>
        <td>Checks the string or gradient object provided to it for validity</td>
        <td>string, Gradient* or Pattern*</td>
    </tr>
    <tr>
        <td>lazyLoadImage()</td>
        <td>Does a preload of the image</td>
        <td>string</td>
    </tr>
    <tr>
        <td>isImageUrlValid()</td>
        <td>Checks the validity of the image link</td>
        <td>string</td>
    </tr>
    <tr>
        <td>textMetrics()</td>    
        <td>returns a object that contains information about the measured text (such as its width, for example)</td>    
        <td>TextLayer* or LazyCanvas*</td>     
    </tr>
    <tr>
        <td>saveFile()</td>    
        <td>Saves LazyCanvas* as a file</td>    
        <td>LazyCanvas*, string</td>     
    </tr>
    <tr>
        <td>generateRandomName()</td>    
        <td>Generate random string</td>    
        <td>-</td>     
    </tr>
</table>

*[Gradient](./gradient.md)
*[Pattern](./pattern.md)
*[TextLayer](./textlayer.md)
*[LazyCanvas](./lazycanvas.md)

<br>

# Example

```js
const { isValidColor } = require('@hitomihiumi/lazy-canvas')
//...
console.log(isValidColor(`#ff8a8a`)) 
// returns true
```

```js
const { lazyLoadImage } = require('@hitomihiumi/lazy-canvas')
//...
console.log(lazyLoadImage(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
// returns Promise<HTMLimageElement>
console.log(await lazyLoadImage(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
// returns image
```

```js
const { isImageUrlValid } = require('@hitomihiumi/lazy-canvas')
//...
console.log(isImageUrlValid(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
// returns true
```

```js
const { textMetrics, TextLayer } = require('@hitomihiumi/lazy-canvas')
//...
let text = new TextLayer()
.setText(`Hello, World!`)

console.log(textMetrics(text))
// returns {
//      width: 70,
//      actualBoundingBoxLeft: 0,
//      actualBoundingBoxRight: 71,
//      actualBoundingBoxAscent: 9,
//      actualBoundingBoxDescent: 2,
//      emHeightAscent: 11,
//      emHeightDescent: 3,
//      alphabeticBaseline: -1
//  }
```

```js
const { saveFile, LazyCanvas } = require('@hitomihiumi/lazy-canvas')
//...
let lazy = new LazyCanvas()
//...
let data = lazy.renderImage()
await saveFile(data, `png`)
```

```js
const { generateRandomName } = require('@hitomihiumi/lazy-canvas')

console.log(generateRandomName())
// returns random string, example: 'w68i9u4xbo8sp3fwdqxsz' 
```