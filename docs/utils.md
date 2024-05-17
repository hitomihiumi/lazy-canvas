# Utils

Utilities that you can use for your methods.

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
        <td>isValidColor()</td>
        <td>Checks the string or gradient object provided to it for validity</td>
        <td>string, Gradient* or Pattern*</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>lazyLoadImage()</td>
        <td>Does a preload of the image</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>isImageUrlValid()</td>
        <td>Checks the validity of the image link</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
</table>

*[Gradient](./gradient.md)
*[Pattern](./pattern.md)

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