if (module.hot) module.hot.accept(() => window.location.reload())

import * as p5 from 'p5'

let noiseMax = 5
let zoff = 0

export function setup () {
  createCanvas(600, 600)
}

export function draw () {
    background(0)
    translate( width/2, height/2)
    stroke(255)
    noFill()
    beginShape()
    for(var a = 0; a <= TWO_PI; a+=.1){
        let xoff = map(cos(a), -1, 1, 0, noiseMax)
        let yoff = map(sin(a), -1, 1, 0, noiseMax)
        let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200)
        let x = r * cos(a)
        let y = r * sin(a)
        vertex(x, y)
    }
    endShape(CLOSE)
    zoff += .1
}