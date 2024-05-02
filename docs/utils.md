# Utils

Utilities that you can use for your methods.

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
        <td>color()</td>
        <td>A method for checking the color of a user-set color. If a gradient is assigned to the color, returns a gradient ready to use</td>
        <td>canvas context, string or Gradient*</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>isValidColor()</td>
        <td>Checks the string or gradient object provided to it for validity</td>
        <td>string or Gradient*</td>
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

<br>

# Example

```js
const { color } = require('@hitomihiumi/lazy-canvas')
//...
console.log(color(`#ff8a8a`)) 
// returns color
```

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
// returns Promise<image>
console.log(await lazyLoadImage(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
// returns image
```

```js
const { isImageUrlValid } = require('@hitomihiumi/lazy-canvas')
//...
console.log(isImageUrlValid(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
// returns true
```