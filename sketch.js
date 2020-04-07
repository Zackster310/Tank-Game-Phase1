// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

var engine, world;
var ground;
var tank;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1500,700)

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);

    tank = new Tanker(300,690,100,200);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(200);

    Engine.update(engine);

    ground.display();

    tank.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}