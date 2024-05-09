'use strict';

const ColorInterpolate = require('./ColorInterpolate.js');
const { createCanvas } = require('canvas');

function createConicalGradient (
    userContext,
    colorStops = [{ color: '#fff', position: 0 }, { position: 1, color: '#fff' }],
    x = 0,
    y = 0,
    startAngle = 0,
    endAngle = 2 * Math.PI,
    anticlockwise = false
  ) {
    const degStart = Math.floor((startAngle * 180) / Math.PI);
    const degEnd = Math.ceil((endAngle * 180) / Math.PI);
  
    // Off-screen canvas for drawing the gradient
    const canvas = createCanvas(userContext.canvas.width, userContext.canvas.height);
    const ctx = canvas.getContext('2d');
  
    // User canvas corners
    const corners = [
      [0, 0],
      [userContext.canvas.width, 0],
      [userContext.canvas.width, userContext.canvas.height],
      [0, userContext.canvas.height],
    ];
  
    // Gradient radius calculation
    const radius =
      Math.max(
        ...corners.map(([cx, cy]) => Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2)))
      ) +
      10;
  
    ctx.translate(x, y);
    const lineWidth = (2 * Math.PI * (radius + 20)) / 360;
  
    // Color linear interpolate object
    const interpolate = new ColorInterpolate(colorStops, degEnd - degStart + 1);
  
    // Draw gradient image
    for (let i = degStart; i <= degEnd; i++) {
      ctx.save();
      ctx.rotate(((anticlockwise ? -1 : 1) * (Math.PI * i)) / 180);
  
      ctx.beginPath();
  
      ctx.moveTo(0, 0);
      ctx.lineTo(radius, -2 * lineWidth);
      ctx.lineTo(radius, 0);
  
      ctx.fillStyle = interpolate.getColor(i - degStart);
      ctx.fill();
  
      ctx.closePath();
  
      ctx.restore();
    }
  
    // Clip content overflow
    const cvsForClip = createCanvas(userContext.canvas.width, userContext.canvas.height);
    const clipCtx = cvsForClip.getContext('2d');
    clipCtx.beginPath();
    clipCtx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    clipCtx.lineTo(x, y);
    clipCtx.closePath();
    clipCtx.fillStyle = clipCtx.createPattern(canvas, 'no-repeat');
    clipCtx.fill();
  
    return userContext.createPattern(cvsForClip, 'no-repeat');
  }

module.exports.createConicalGradient = createConicalGradient;

/**
 * Used to create a conical gradient
 * https://github.com/parksben/create-conical-gradient/blob/master/src/index.ts
 */