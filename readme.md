<a href="https://www.npmjs.com/package/@hitomihiumi/lazy-canvas"><img src="https://img.shields.io/npm/v/@hitomihiumi/lazy-canvas.svg?maxAge=3600" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/@hitomihiumi/lazy-canvas"><img src="https://img.shields.io/npm/dt/@hitomihiumi/lazy-canvas.svg?maxAge=3600" alt="npm downloads" /></a>

# Introduction
This is a simple module designed to simplify the interaction with canvas, for people who do not know how to work with it.

## Get Started

1. Install the module by using `npm i @hitomihiumi/lazy-canvas`
2. Enjoy!

## Example

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

![Example Image](https://i.imgur.com/pqAft2K.png)

## Documentation

Class documentation can be found below by clicking on the appropriate class names.

### Main Classes

- [LazyCanvas](./docs/lazycanvas.md)
- [Font](./docs/font.md)
- [Gradient](./docs/gradient.md)
- [Filter](./docs/filter.md)

### Layers

- [CircleLayer](./docs/circlelayer.md)
- [EllipseLayer](./docs/ellipselayer.md)
- [SquareLayer](./docs/squarelayer.md)
- [RectangleLayer](./docs/rectanglelayer.md)
- [LineLayer](./docs/linelayer.md)
- [NgonLayer](./docs/ngonlayer.md)
- [ImageLayer](./docs/imagelayer.md)
- [EllipseImageLayer](./docs/ellipseimagelayer.md)
- [TextLayer](./docs/textlayer.md)
- [ArcLayer](./docs/arclayer.md)
- [BezierLayer](./docs/bezierlayer.md)
- [QuadraticLayer](./docs/quadraticlayer.md)

### Extentions

- [BaseLayer](./docs/baselayer.md)
- [BaseMethod](./docs/basemethod.md)
- [Utils](./docs/utils.md)