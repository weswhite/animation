if (module.hot) module.hot.accept(() => window.location.reload())

import * as p5 from 'p5'

const location = new p5.Vector(320, 180);
const velociy = new p5.Vector(5,2);

let r = 25;

export function setup () {
  createCanvas(windowWidth, windowHeight)
  background(52)
}

export function draw () {
    background(52)
    ellipse(location.x, location.y, r*2, r*2);
    location.add(velociy)
    if ((location.x > width) || (location.x < 0)) {
      velocity.x = velocity.x * -1;
    }
    if ((location.y > height) || (location.y < 0)) {
      velocity.y = velocity.y * -1;
    }
}