const { CircleLayer } = require('../index.js')

let circle = new CircleLayer()
.setX(100)
.setY(100)
.setDiameter(100)
.setFilled(true)
.setColor('red')

console.log(circle.toJSON()) // { x: 100, y: 100, diameter: 100, fill: true, color: 'red', type: 'circle' }
