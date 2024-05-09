'use strict';

const { createCanvas } = require('canvas');

class ColorInterpolate {

    constructor(stops = [], segment = 100) {
      const canvas = createCanvas(segment, 1);
      this.ctx = canvas.getContext('2d');
  
      const gradient = this.ctx.createLinearGradient(0, 0, segment, 0);
      for (const stop of stops) {
        gradient.addColorStop(stop.position, stop.color);
      }
  
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, segment, 1);
  
      this.rgbaSet = new Uint8ClampedArray(this.ctx.getImageData(0, 0, segment, 1).data);
    }
  
    getColor(offset) {
      const rgba = this.rgbaSet.slice(4 * offset, 4 * offset + 4);
      return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3] / 255})`;
    }
  }

module.exports = ColorInterpolate;

/**
 * Used to create a conical gradient
 * https://github.com/parksben/create-conical-gradient/blob/master/src/ColorInterpolate.ts
 */