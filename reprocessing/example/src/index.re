open Reprocessing;

let pipeWidth = 50.;
let halfGap = 70.;
let gravity = 400.0;
let birdSize = 50.;
let birdX = 50.0;
let floorY = 400.0;
let speed = 100.;

type stateT = {
  birdY: float,
  birdVY: float,
  pipes: list((float, float)),
  xOffset: float,
  running: bool,
}; 

let setup = (env) => {
  Env.size(~width=600, ~height=600, env);
  { 
    birdY: 50.0,
    birdVY: 0.0,
    pipes: [(200., 100.), (400., 100.), (600., 100.), (800., 100.)],
    xOffset: 0.,
    running: true
  }
}

let draw = ({birdY, birdVY, pipes, xOffset} as state, env) => {
  Draw.background(Utils.color(~r=199, ~g=217, ~b=229, ~a=255), env);
  Draw.fill(Utils.color(~r=41, ~g=166, ~b=244, ~a=255), env);
  Draw.rectf(~pos=(birdX, state.birdY), ~width=50.0, ~height=50.0, env);
  Draw.fill(Utils.color(~r=41, ~g=255, ~b=150, ~a=255), env);
  Draw.rectf(~pos=(0., floorY), ~width=float_of_int(Env.width(env)), ~height=float_of_int(Env.height(env)) -. floorY, env);
  List.iter(
      ((x, y)) => {
      Draw.rectf(~pos=(x -. xOffset, 0.), ~width=pipeWidth, ~height=y -. halfGap, env);
      Draw.rectf(~pos=(x -. xOffset, y +. halfGap), ~width=pipeWidth, ~height=float_of_int(Env.height(env)), env);
    }, pipes
  );
  let deltaTime = Env.deltaTime(env);
  { 
    ...state,
    birdY: min(birdY +. birdVY *. deltaTime, floorY -. birdSize  ),
    birdVY: 
      if (Env.keyPressed(Space, env)){ 
        (-200.0)
      } else {
        birdVY +. gravity *. deltaTime
      },
    xOffset: xOffset +. speed *. deltaTime
  }
}; 

run(~setup, ~draw, ());



