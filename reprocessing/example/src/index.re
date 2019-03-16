open Reprocessing;

let gravity = 50.0;

let birdX = 50.0;

type stateT = {
  birdY: float,
  birdVY: float
}; 

let setup = (env) => {
  Env.size(~width=600, ~height=600, env);
  {birdY: 50.0, birdVY: 0.0}
}

let draw = ({birdY, birdVY} as state, env) => {
  Draw.background(Utils.color(~r=199, ~g=217, ~b=229, ~a=255), env);
  Draw.fill(Utils.color(~r=41, ~g=166, ~b=244, ~a=255), env);
  Draw.rectf(~pos=(birdX, state.birdY), ~width=50.0, ~height=50.0, env);
  { 
    ...state,
    birdY: birdY +. birdVY *. Env.deltaTime(env),
    birdVY: 
      if (Env.keyPressed(Space, env)){ 
        (-50.0)
      } else {
        birdVY +. gravity *. Env.deltaTime(env)
      }
  }
}; 

run(~setup, ~draw, ());



