# LazyCanvas

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
        <td>createNewCanvas()</td>
        <td>Creates a new canvas for creation requires width and height to be specified</td>
        <td>number, number</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>clearCanvas()</td>
        <td>Cleans the canvas completely</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>addLayers()</td>
        <td>Adds a layers to the canvas</td>
        <td>layer</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>removeLayer()</td>
        <td>Adds a layer to the canvas</td>
        <td>layer</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>moveLayer()</td>
        <td>Moves a layer in the array to the specified position</td>
        <td>layer, number</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>modifyLayer()</td>
        <td>Modifies a layer without extracting it from the canvas structure</td>
        <td>number, string, data</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getLayer()</td>
        <td>Gets a layer by its index</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getIndexOfLayer()</td>
        <td>Gets the index of a layer based on its schema</td>
        <td>layer</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setData()</td>
        <td>Sets the canvas data</td>
        <td>array</td>
        <td>-</td>
        <td>Use it ONLY if you're sure of what you're doing.</td>
    </tr>
    <tr>
        <td>getData()</td>
        <td>Gives you canvas data</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setName()</td>
        <td>Sets the name of the canvas</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setDescription()</td>
        <td>Sets the description of the canvas</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setEmoji()</td>
        <td>Sets the canvas emoji</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>loadFonts()</td>
        <td>Loads custom fonts used in the canvas</td>
        <td>array</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>set404Image()</td>
        <td>Sets a blanking image when the image set by the layer cannot be loaded</td>
        <td>string</td>
        <td>-</td>
        <td>Use MUST if you create layers with images. Specify the path to the image starting from the root folder of the project</td>
    </tr>
    <tr>
        <td>renderImage()</td>
        <td>Use only for rendering the final image</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
</table>

<br>

# Example

```js
const { LazyCanvas, EllipseImageLayer, EllipseLayer, TextLayer, Font, CircleLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let font = new Font()
.setFamily("JoeKubert")
.setWeight("regular")
.setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let background = new EllipseImageLayer()
.setX(0)
.setY(0)
.setWidth(600)
.setHeight(200)
.setRadius(50)
.setImage('https://static.zerochan.net/Otosora.full.3420604.jpg')

let blackout = new EllipseLayer()
.setX(0)
.setY(0)
.setWidth(600)
.setHeight(200)
.setRadius(50)
.setColor('#000')
.setAlpha(0.4)

let border = new EllipseLayer()
.setX(1)
.setY(1)
.setWidth(598)
.setHeight(198)
.setRadius(50)
.setColor('#fff')
.setFilled(false)
.setStroke(2)

let avatar = new EllipseImageLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setRadius(50)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

let avatarBorder = new EllipseLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setRadius(50)
.setColor('#fff')
.setFilled(false)
.setStroke(1.5)

let bgprogress = new EllipseLayer()
.setX(190)
.setY(125)
.setWidth(365)
.setHeight(35)
.setRadius(17.5)
.setColor('#fff')

let progress = new EllipseLayer()
.setX(192.5)
.setY(127.5)
.setWidth(180)
.setHeight(30)
.setRadius(15)
.setColor('#ff8a8a')

let lvlbg = new CircleLayer()
.setX(140)
.setY(140)
.setRadius(20)
.setColor('#ff8a8a')

let lvlborder = new CircleLayer()
.setX(140)
.setY(140)
.setRadius(20)
.setColor('#fff')
.setFilled(false)
.setStroke(1.5)

let name = new TextLayer()
.setX(200)
.setY(120)
.setText('LazyCanvas')
.setFont("JoeKubert")
.setFontSize(25)
.setColor('#fff')
.setAlign('left')

let xp = new TextLayer()
.setX(550)
.setY(120)
.setText('50/100')
.setFont("JoeKubert")
.setFontSize(20)
.setColor('#fff')
.setAlign('right')

let lvl = new TextLayer()
.setX(159)
.setY(172)
.setText('1')
.setFont("JoeKubert")
.setFontSize(33)
.setColor('#fff')
.setAlign('center')

const lazy = new LazyCanvas()
.createNewCanvas(600, 200)
.loadFonts(font)
.addLayers(background, blackout, border, avatar, avatarBorder, bgprogress, progress, lvlbg, lvlborder, name, xp, lvl)

async function main() {
    const pngData = await lazy.renderImage()
    fs.writeFileSync('example.png', pngData)
}

main()
```