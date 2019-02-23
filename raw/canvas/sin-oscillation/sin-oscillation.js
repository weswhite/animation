var canvas = document.getElementById("canvas");
canvas.height = window.innerHeight - 20
canvas.width = window.innerWidth - 20
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height);

var ball = {
    x: 0,
    y: canvas.height/2,
    radius: 50,
    speed_x: .7,
    speed_y: .1,
    angle: 0,
    color: 'white'
}

function draw() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, false);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
  ball.y = canvas.height / 2 + Math.sin(radians(ball.angle)) * canvas.height / 2 ;
  ball.x = canvas.width / 2 + Math.cos(radians(ball.angle)) * canvas.width / 2 ;
  ball.angle += ball.speed_x
}

// var times = []
// fps = (times) => {
//   const now = performance.now();
//     while (times.length > 0 && times[0] <= now - 1000) {
//       times.shift();
//     }
//     times.push(now);
//     fps = times.length;
//     console.log(fps)
// }

(function update() {
  draw();
  requestAnimationFrame(() =>{
    update();
  });
}());

function radians (angle) {
  return angle * (Math.PI / 180);
}

// function degrees (angle) {
//   return angle * (180 / Math.PI);
// }

// function randomRange(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; 
// }

// function random(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }



