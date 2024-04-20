# Introduction
This is a simple module designed to simplify the interaction with canvas, for people who do not know how to work with it.

## Get Started

1. Install the module
2. Enjoy!

## Example

```js
const { LazyCanvas, CircleLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

const circle = new CircleLayer()
.setX(100)
.setY(100)
.setDiameter(100)
.setFilled(true)
.setColor('red')

const lazy = new LazyCanvas()
.createNewCanvas(500, 500)
.addLayer(circle)

const pngData = await lazy.renderImage()
fs.writeFileSync('output.png', pngData)
```

## Documentation

Class documentation can be found below by clicking on the appropriate class names.

- [LazyCanvas](./docs/lazycanvas.md)
- [Font](./docs/font.md)

- [BaseLayer](./docs/baselayer.md)
- [CircleLayer](./docs/circlelayer.md)
- [EllipseLayer](./docs/ellipselayer.md)
- [SquareLayer](./docs/squarelayer.md)
- [RectangleLayer](./docs/rectanglelayer.md)
- [LineLayer](./docs/linelayer.md)
- [ImageLayer](./docs/imagelayer.md)
- [EllipseImageLayer](./docs/ellipseimagelayer.md)
- [TextLayer](./docs/textlayer.md)