open Reprocessing;

let gravity = 50.0;
let birdHeight = 50.;
let birdX = 50.0;
let floorY = 400.0;

type stateT = {
  birdY: float,
  birdVY: float,
  pipes: list((float, float))
}; 

let setup = (env) => {
  Env.size(~width=600, ~height=600, env);
  {birdY: 50.0, birdVY: 0.0, pipes: [(200., 100.), (400., 100.), (600., 100.), (800., 100.)]}
}

let draw = ({birdY, birdVY} as state, env) => {
  Draw.background(Utils.color(~r=199, ~g=217, ~b=229, ~a=255), env);
  Draw.fill(Utils.color(~r=41, ~g=166, ~b=244, ~a=255), env);
  Draw.rectf(~pos=(birdX, state.birdY), ~width=50.0, ~height=50.0, env);
  Draw.fill(Utils.color(~r=41, ~g=255, ~b=150, ~a=255), env);
  Draw.rectf(~pos=(0., floorY), ~width=float_of_int(Env.width(env)), ~height=float_of_int(Env.height(env)) -. floorY, env);
  { 
    ...state,
    birdY: min(birdY +. birdVY *. Env.deltaTime(env), floorY -. birdHeight),
    birdVY: 
      if (Env.keyPressed(Space, env)){ 
        (-50.0)
      } else {
        birdVY +. gravity *. Env.deltaTime(env)
      }
  }
}; 

run(~setup, ~draw, ());



