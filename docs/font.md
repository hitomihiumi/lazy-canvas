# Font

A class designed to create a font object that can be loaded into LazyCanvas using the loadFonts() method.

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
        <td>setFamily()</td>
        <td>Sets the name of the font</td>
        <td>string</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setWeight()</td>
        <td>Sets the font weight</td>
        <td>string</td>
        <td>true</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setPath()</td>
        <td>Sets the path to the font file</td>
        <td>string</td>
        <td>true</td>
        <td>The font file MUST be in the same directory as the project. Specify the path to the font starting from the root folder of the project</td>
    </tr>
</table>

<br>

## Example

```js
const { LazyCanvas, Font } = require('@hitomihiumi/lazy-canvas')

let fontOne = new Font()
.setFamily("JoeKubert")
.setWeight("regular")
.setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let fontTwo = new Font()
.setFamily("Koulen")
.setWeight("regular")
.setPath("./fonts/Koulen-Regular.ttf")

const lazy = new LazyCanvas()
.loadFonts(fontOne, fontTwo)
//...
```