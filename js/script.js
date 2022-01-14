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

//BG IMAGES
let startBG;
let titleBG;
let tenSecondsBG;
let samBG;
let mainLevelBG;
let denialBG;
let angerBG;
let bargainingBG;

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

//SOUNDS
let bell1SFX;
let bell2SFX;
let bell3SFX;
let waveSFX;
let angelSFX;
let denialSONG;
let angerSONG;
let bargainingSONG;

let stoneSFX;
let startSFX;
let gruntSFX;
let hissSFX;
let sineSFX;


let particleObjects = [];


let roomToneSFX;


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
let mediumDeathGIF;

let bigSam;

let giftPNG;
let hatPNG;
let soundIsPlaying = false;



function preload() {
  // IMAGES PRELOAD
  // Alliance of harmony title png
  flowersPNG = loadImage(`assets/images/png/flowers.png`);
  starGIF = loadImage(`assets/gifs/star1.gif`);

  obrigeFONT = loadFont(`assets/fonts/obrige.otf`)
  robotoFONT = loadFont(`assets/fonts/roboto.ttf`)
  ibmFONT = loadFont(`assets/fonts/ibm.ttf`)
  ibmFONTTypewriter = loadFont(`assets/fonts/ibm_typewriter.ttf`)

  // diamond for fake loading page
  loadingCircle = loadImage(`assets/gifs/loader.gif`);
  // sam avatar neutral
  samIMG = loadImage(`assets/images/xmas_break/sam.png`);

  // load white arrow gif
  arrowGIF = loadImage(`assets/gifs/arrow3.gif`);
  mediumDeathGIF = loadImage(`assets/gifs/meddeath.gif`);

  // LOAD intro sound
  introSFX = loadSound(`assets/sounds/music_samples/introSFX.wav`)
  introSFX2 = loadSound(`assets/sounds/music_samples/introSFX2.wav`)

  // start page
  deadRosePNG = loadImage(`assets/images/png/dead_rose_small.png`);

  //BG
  startBG = loadImage('assets/images/png/start.png')

  titleBG = loadImage('assets/images/png/titlebg.png');

  tenSecondsBG = loadImage('assets/images/png/tenSecondsBG.png');
  bargainingBG = loadImage('assets/images/xmas_break/bargainingBG.png');

  samBG = loadImage('assets/images/xmas_break/samBG.png');
  mainLevelBG = loadImage('assets/images/xmas_break/mainlevel2BG.png');
  denialBG = loadImage('assets/images/xmas_break/denialmountainBG.png');
  angerBG = loadImage('assets/images/xmas_break/angerBG.png');


  giftPNG = loadImage('assets/images/xmas_break/gift4.png');
  hatPNG = loadImage('assets/images/xmas_break/bluehat.png');



  // backgrounds gifss
  // purpleBG = loadImage(`assets/gifs/backgrounds/purple.gif`)
  neutralSamGIF = loadImage(`assets/gifs/sam_neutral2.gif`)
  happySamGIF = loadImage(`assets/gifs/happy_sam.gif`)
  sadSamGIF = loadImage(`assets/gifs/sad_sam.gif`)
  bigSam = loadImage('assets/images/xmas_break/bigSam.png');
  roomToneSFX = loadSound(`assets/sounds/music_samples/room.wav`);
  stoneSFX = loadSound(`assets/sounds/music_samples/stone.wav`)
  hissSFX = loadSound(`assets/sounds/music_samples/hiss.wav`)
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

  bell1SFX = loadSound(`assets/sounds/music_samples/bell_1.wav`);
  bell2SFX = loadSound(`assets/sounds/music_samples/bell_2.wav`);
  bell3SFX = loadSound(`assets/sounds/music_samples/bell_3.wav`);
  waveSFX = loadSound(`assets/sounds/music_samples/wave.wav`);
  angelSFX = loadSound(`assets/sounds/music_samples/angel.wav`);
  denialSONG = loadSound(`assets/sounds/music_samples/denialsong.mp3`);
  startSFX = loadSound(`assets/sounds/music_samples/start.wav`);
  gruntSFX = loadSound(`assets/sounds/music_samples/grunt.wav`);
  angerSONG = loadSound(`assets/sounds/music_samples/angersong.mp3`);
  bargainingSONG = loadSound(`assets/sounds/music_samples/bargainingsong.mp3`);
  sineSFX = loadSound(`assets/sounds/music_samples/sine.wav`);
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

  // currentState = new Start(smallHeartIMG, smallDeathIMG);
  // currentState = new Alliance_of_harmony_title(smallHeartIMG, smallDeathIMG);
  // currentState = new Ten_seconds_title(deadRosePNG);
  // currentState = new Loading(loadingCircle);
  // currentState = new Meeting_Sam(samIMG, arrowGIF);
  // currentState = new Meeting_Sam2(samIMG, arrowGIF, bigSam);
  // currentState = new Main_Level_Page_4(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Main_Level_Page_3(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Main_Level_Page_2(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Main_Level_Page_1(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Denial(deathGIF, heartIMG, deadRosePNG);
  // currentState = new Anger(mediumDeathGIF, heartIMG, deadRosePNG);

  // currentState = new Anger();
  // currentState = new BargainingIntro(samIMG, arrowGIF, bigSam);
  // currentState = new Bargaining(smallHeartIMG, smallDeathGIF);
  // currentState = new BargainingEnd();

  // currentState = new DenialInstructions(smallDeathGIF, smallHeartIMG);
currentState = new Depression();
  // add mouse control
  canvasMouse = Mouse.create(p5.canvas);

  mConstraint = MouseConstraint.create(engine, {
    mouse: canvasMouse,
    constraint: {
      stiffness: 0.9,
      render: {
        visible: false
      }
    }
  });
  canvasMouse.pixelRatio = pixelDensity();
  World.add(world, mConstraint);
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

function keyPressed() {
  currentState.keyPressed();
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
