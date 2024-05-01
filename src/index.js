'use strict';

module.exports.CircleLayer = require('./structures/CircleLayer.js');
module.exports.EllipseImageLayer = require('./structures/EllipseImageLayer.js');
module.exports.EllipseLayer = require('./structures/EllipseLayer.js');
module.exports.ImageLayer = require('./structures/ImageLayer.js');
module.exports.LineLayer = require('./structures/LineLayer.js');
module.exports.RectangleLayer = require('./structures/RectangleLayer.js');
module.exports.SquareLayer = require('./structures/SquareLayer.js');
module.exports.TextLayer = require('./structures/TextLayer.js');
module.exports.NgonLayer = require('./structures/NgonLayer.js');
module.exports.BaseLayer = require('./structures/BaseLayer.js');

module.exports.LazyCanvas = require('./LazyCanvas.js');

module.exports.Font = require('./structures/Font.js');
module.exports.Gradient = require('./structures/Gradient.js');

module.exports.BaseMethod = require('./api/BaseMethod.js');

module.exports.color = require('./utils.js').color;
module.exports.isValidColor = require('./utils.js').isValidColor;
module.exports.isImageUrlValid = require('./utils.js').isImageUrlValid;
module.exports.lazyLoadImage = require('./utils.js').lazyLoadImage;