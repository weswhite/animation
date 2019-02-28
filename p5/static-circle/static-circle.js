if (module.hot) module.hot.accept(() => window.location.reload())

import * as p5 from 'p5'

export function setup () {
  createCanvas(600, 600)
}

export function draw () {
    background(0)
    translate( width/2, height/2)
    stroke(255)
    noFill()
    beginShape()
    for(var i = 0; i <= TWO_PI; i+=.05){
        let r = random(180, 200)
        let x = r * cos(i)
        let y = r * sin(i)
        vertex(x, y)
    }
    endShape(CLOSE)
}