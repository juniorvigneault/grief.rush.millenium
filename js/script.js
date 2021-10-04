"use strict";
// This is a project about grief and the future of gamification and how we need
// lots of crazy shit to stay focused and feel emotions nowadays.
// by Junior

// VARIABLES DECLARATION

// module aliases // create engine variable
let Engine = Matter.Engine;
// let Render = Matter.Render
let World = Matter.World;
let Bodies = Matter.Bodies;
let Constraint = Matter.Constraint;
let MouseConstraint = Matter.MouseConstraint;
let Mouse = Matter.Mouse;


let canvasMouse;
// create an engine variable for the physics engine
let engine;

// create a world variable in which bodies will exist
let world;

// blood variables for the title poster
let blood;
let bloodDrops = [];

let emotion;
let emotions = [];

// ground variable
let ground;
let grounds = [];


// canvas size variable
let cnvX = 800;
let cnvY = 800;

// IMAGE VARIABLES
// Alliance of harmony title variable
let alliancePNG;
let ofPNG;
let harmonyPNG;
let flowersPNG;
let decorationPNG;
let starGIF;
let obrigeFONT;

// classic font
let robotoFONT;
let ibmFONT;
let ibmFONTTypewriter;

// Current active OOP state
let currentState;

let samIMG;


let message;



// loading page loading diamond
let loadingCircle;

// arrow gif for text box
let arrowGIF;

// sound for intro
let introSFX;

let introSFX2;

// name of the player
let userName;

//start page png
let deadRosePNG;

// typewriter to use with jquery
let typewriter2

// backgrounds
let purpleBG;

// sam gifs
let neutralSamGIF;
let happySamGIF;
let sadSamGIF;

// DENIAL game images
let deathGIF;
let heartIMG;
let smallHeartIMG;
let smallDeadRosePNG;
let liveRosePNG;
let smallDeathIMG;
let smallBrokenHeartIMG;

let generalPoints;

let mConstraint;

// bargaining game img
let smallDeathGIF;


function preload() {
  // IMAGES PRELOAD
  // Alliance of harmony title png
  flowersPNG = loadImage(`assets/images/png/flowers.png`)
  starGIF = loadImage(`assets/gifs/star1.gif`)

  obrigeFONT = loadFont(`assets/fonts/obrige.otf`)
  robotoFONT = loadFont(`assets/fonts/roboto.ttf`)
  ibmFONT = loadFont(`assets/fonts/ibm.ttf`)
  ibmFONTTypewriter = loadFont(`assets/fonts/ibm_typewriter.ttf`)

  // diamond for fake loading page
  loadingCircle = loadImage(`assets/gifs/loader.gif`);
  // sam avatar neutral
  samIMG = loadImage(`assets/images/png/sam.png`);

  // load white arrow gif
  arrowGIF = loadImage(`assets/gifs/arrow3.gif`);

  // LOAD intro sound
  introSFX = loadSound(`assets/sounds/music_samples/introSFX.wav`)
  introSFX2 = loadSound(`assets/sounds/music_samples/introSFX2.wav`)

  // start page
  deadRosePNG = loadImage(`assets/images/png/dead_rose_small.png`)

  // backgrounds gifss
  // purpleBG = loadImage(`assets/gifs/backgrounds/purple.gif`)
  neutralSamGIF = loadImage(`assets/gifs/sam_neutral2.gif`)
  happySamGIF = loadImage(`assets/gifs/happy_sam.gif`)
  sadSamGIF = loadImage(`assets/gifs/sad_sam.gif`)


  // denial game
  deathGIF = loadImage(`assets/gifs/death1.gif`)
  heartIMG = loadImage(`assets/images/png/heart.png`);
  smallHeartIMG = loadImage(`assets/images/png/small_heart.png`);
  smallDeadRosePNG = loadImage(`assets/images/png/small_rose.png`);
  liveRosePNG = loadImage(`assets/images/png/live_rose.png`);
  smallDeathIMG = loadImage(`assets/images/png/small_death.png`);
  smallBrokenHeartIMG = loadImage(`assets/images/png/small_broken_heart.png`);

  // bargaining game
  smallDeathGIF = loadImage(`assets/gifs/smalldeath.gif`);
}

function setup() {
  // Create the p5 canvas
  let canvas = createCanvas(cnvX, cnvY);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');


  $("#name_form").hide();
  $("#about_box").hide();

  // MATTER.JS
  // create engine
  engine = Engine.create();
  // run the engine
  Engine.run(engine);
  // create the physics in the world
  world = engine.world;


  // currentState = new Ten_seconds_title(deadRosePNG);
  // currentState = new Alliance_of_harmony_title(smallHeartIMG, smallDeathIMG);
  // currentState = new Start(smallHeartIMG);
  // currentState = new Loading(loadingCircle);
  // currentState = new Meeting_Sam(neutralSamGIF, arrowGIF);
  // currentState = new Meeting_Sam2(neutralSamGIF, arrowGIF, happySamGIF);
  // currentState = new Main_Level_Page_1(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Denial(deathGIF, heartIMG, deadRosePNG);
  // currentState = new Anger();
  currentState = new Bargaining(liveRosePNG, smallDeathGIF);
  // currentState = new DenialInstructions(smallDeathGIF, smallHeartIMG);

}

function draw() {
  currentState.update();
}

function mousePressed() {
  currentState.mousePressed();
}

function mouseDragged() {
  currentState.mouseDragged()
}

function keyIsDown() {
  currentState.keyIsDown();
}

// functions to translate RGB to HSLuv for fill and stroke
function fillHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
