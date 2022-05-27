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
let samBG;
let mainLevelBG;
let denialBG;
let angerBG;
let bargainingBG;
let millisecond;
let timePassed;
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
let depressionBG;
let acceptanceBG;
let safeIMG;
let clickSFX;
let bipSFX;
let impactSFX;
let pointsSFX;
// objects
let hatSmallIMG;
let hatBigIMG;
let bookSmallIMG;
let bookBigIMG;
let pendantSmallIMG;
let pendantBigIMG;
let lampSmallIMG;
let lampBigIMG;
let mainLevel4BG;
let endSamBG;
let spotSFX;
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
let bellIntroSFX;
let denialEmotionSFX;
let denialHeartSFX;



//SOUNDS
let bell1SFX;
let bell2SFX;
let bell3SFX;
let waveSFX;
let angelSFX;
let denialSONG;
let angerSONG;
let bargainingSONG;
let thunderGIF;

let stoneSFX;
let startSFX;
let gruntSFX;
let hissSFX;
let sineSFX;
let fireSFX;
let creatureSFX;
let deepSFX;
let unlockSFX;
let doorSFX;

let particleObjects = [];


let roomToneSFX;


let introSFX2;
let introTransitionSFX;

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
let frameIMG;
let sadSamGIF;

// DENIAL game images
let deathGIF;
let heartIMG;
let smallHeartIMG;
let smallDeadRosePNG;
let liveRosePNG;
let smallDeathIMG;
let smallBrokenHeartIMG;
let keyIMG;
let endBoardBG;
let keyboardSFX;
let kickReverbSFX;
let depressionSFX;
let flashSFX;

let generalPoints;

let mConstraint;

// bargaining game img
let smallDeathGIF;
let mediumDeathGIF;

let bigSam;
let velvetIMG;

let giftPNG;
let hatPNG;
let soundIsPlaying = false;
let doorIMG;
let foundObjectSFX;
let angerHitSFX;
let depressionBlocksSFX;

let depressionSONG;

let denialPoints = 0;
let angerPoints = 0;
let bargainingPoints = 0;
let depressionPoints = 0;
let acceptancePoints = 0;
let totalPoints = 0;
let ghostIMG;
let noEnterSFX;
let windSFX;
let bigSamSFX;
let ghostSFX;
let birdsSFX;
let frameSFX;
let thunderSFX;
let keySFX;

function preload() {
  // IMAGES PRELOAD
  // Alliance of harmony title png
  // flowersPNG = loadImage(`assets/images/png/flowers.png`);
  // starGIF = loadImage(`assets/gifs/star1.gif`);

  obrigeFONT = loadFont(`assets/fonts/obrige.otf`)
  robotoFONT = loadFont(`assets/fonts/roboto.ttf`)
  ibmFONT = loadFont(`assets/fonts/ibm.ttf`)
  ibmFONTTypewriter = loadFont(`assets/fonts/ibm_typewriter.ttf`)

  // diamond for fake loading page
  // loadingCircle = loadImage(`assets/gifs/loader.gif`);
  // sam avatar neutral
  samIMG = loadImage(`assets/images/xmas_break/sam.png`);

  // load white arrow gif
  arrowGIF = loadImage(`assets/gifs/arrow3.gif`);
  // mediumDeathGIF = loadImage(`assets/gifs/meddeath.gif`);

  // LOAD intro sound
  introSFX = loadSound(`assets/sounds/music_samples/allianceTitle.wav`)
  introSFX2 = loadSound(`assets/sounds/music_samples/introSFX2.wav`)

  // start page
  deadRosePNG = loadImage(`assets/images/png/dead_rose_small.png`);

  //BG
  startBG = loadImage('assets/images/png/start.png')

  titleBG = loadImage('assets/images/png/titlebg.png');

  bargainingBG = loadImage('assets/images/xmas_break/bargainingBG.png');

  samBG = loadImage('assets/images/xmas_break/samBG.png');
  mainLevelBG = loadImage('assets/images/xmas_break/mainlevel2BG.png');
  denialBG = loadImage('assets/images/xmas_break/denialmountainBG.png');
  angerBG = loadImage('assets/images/xmas_break/angerBG.png');
  mainLevel4BG = loadImage('assets/images/xmas_break/mainlevel4bg.png');


  giftPNG = loadImage('assets/images/xmas_break/gift4.png');
  hatPNG = loadImage('assets/images/xmas_break/bluehat.png');




  // backgrounds gifss
  // purpleBG = loadImage(`assets/gifs/backgrounds/purple.gif`)
  // neutralSamGIF = loadImage(`assets/gifs/sam_neutral2.gif`)
  // happySamGIF = loadImage(`assets/gifs/happy_sam.gif`)
  // sadSamGIF = loadImage(`assets/gifs/sad_sam.gif`)
  // thunderGIF = loadImage(`assets/gifs/thunder.gif`)
  bigSam = loadImage('assets/images/xmas_break/bigSam.png');
  roomToneSFX = loadSound(`assets/sounds/music_samples/room.wav`);
  stoneSFX = loadSound(`assets/sounds/music_samples/stone.wav`)
  hissSFX = loadSound(`assets/sounds/music_samples/hiss.wav`);
  thunderSFX = loadSound(`assets/sounds/music_samples/thunder.wav`);
  bellIntroSFX = loadSound(`assets/sounds/music_samples/bellIntro.wav`);
  // clickSFX = loadSound(`assets/sounds/music_samples/click.mp3`);
  foundObjectSFX = loadSound(`assets/sounds/music_samples/object.wav`);
  angerHitSFX = loadSound(`assets/sounds/music_samples/angerHit.wav`);
  deepSFX = loadSound(`assets/sounds/music_samples/deep.wav`)
  kickReverbSFX = loadSound(`assets/sounds/music_samples/kickReverb.wav`);
  bigSamSFX = loadSound(`assets/sounds/music_samples/bigSam2.wav`);
  depressionSFX = loadSound('assets/sounds/music_samples/depression.wav');
  depressionBlocksSFX = loadSound('assets/sounds/music_samples/depressionBlocks.wav');
  bipSFX = loadSound('assets/sounds/music_samples/bip.wav');
  unlockSFX = loadSound('assets/sounds/music_samples/unlock.wav');
  doorSFX = loadSound('assets/sounds/music_samples/door.wav');
  spotSFX = loadSound('assets/sounds/music_samples/spot.wav');
  endSamBG = loadImage(`assets/images/xmas_break/endSam.png`);
  ghostSFX = loadSound('assets/sounds/music_samples/ghost.wav');
  birdsSFX = loadSound('assets/sounds/music_samples/birds.wav');
  frameSFX = loadSound('assets/sounds/music_samples/frames.wav');
  flashSFX = loadSound('assets/sounds/music_samples/flash.wav');
  pointsSFX = loadSound('assets/sounds/music_samples/points.wav');
  keySFX = loadSound('assets/sounds/music_samples/key.wav');

  // denial game
  deathGIF = loadImage(`assets/gifs/death1.gif`)
  heartIMG = loadImage(`assets/images/png/heart.png`);
  smallHeartIMG = loadImage(`assets/images/png/small_heart.png`);
  smallDeadRosePNG = loadImage(`assets/images/png/small_rose.png`);
  liveRosePNG = loadImage(`assets/images/png/live_rose.png`);
  smallDeathIMG = loadImage(`assets/images/png/small_death.png`);
  smallBrokenHeartIMG = loadImage(`assets/images/png/small_broken_heart.png`);
  velvetIMG = loadImage(`assets/images/xmas_break/velvet.png`);
  // bargaining game
  smallDeathGIF = loadImage(`assets/gifs/smalldeath.gif`);

  bell1SFX = loadSound(`assets/sounds/music_samples/bell_1.wav`);
  bell2SFX = loadSound(`assets/sounds/music_samples/bell2.wav`);
  bell3SFX = loadSound(`assets/sounds/music_samples/bell3.wav`);
  impactSFX = loadSound(`assets/sounds/music_samples/impact.wav`);
  noEnterSFX = loadSound(`assets/sounds/music_samples/noEnter.wav`);
  windSFX = loadSound(`assets/sounds/music_samples/wind.wav`);
  denialEmotionSFX = loadSound(`assets/sounds/music_samples/denialEmotions.wav`);
  denialHeartSFX = loadSound(`assets/sounds/music_samples/denialHeart.wav`);
  fireSFX = loadSound(`assets/sounds/music_samples/fire.wav`);
  creatureSFX = loadSound(`assets/sounds/music_samples/creature.wav`);
  keyboardSFX = loadSound(`assets/sounds/music_samples/keyboard.wav`);
  waveSFX = loadSound(`assets/sounds/music_samples/wave.wav`);
  angelSFX = loadSound(`assets/sounds/music_samples/angels.wav`);
  denialSONG = loadSound(`assets/sounds/music_samples/denialsong.mp3`);
  startSFX = loadSound(`assets/sounds/music_samples/start.wav`);
  gruntSFX = loadSound(`assets/sounds/music_samples/grunt.wav`);
  introTransitionSFX = loadSound(`assets/sounds/music_samples/introTransition.wav`);
  angerSONG = loadSound(`assets/sounds/music_samples/angersong.mp3`);
  bargainingSONG = loadSound(`assets/sounds/music_samples/bargainingsong.mp3`);
  sineSFX = loadSound(`assets/sounds/music_samples/bug.wav`);
  depressionSONG = loadSound(`assets/sounds/music_samples/depressionsong.wav`);
  depressionBG = loadImage('assets/images/xmas_break/depressionBG.png');
  acceptanceBG = loadImage('assets/images/xmas_break/acceptanceBG.png');
  safeIMG = loadImage('assets/images/xmas_break/safe.png');
  frameIMG = loadImage('assets/images/xmas_break/frame.png')

  hatSmallIMG = loadImage('assets/images/xmas_break/hatSmall.png');
  hatBigIMG = loadImage('assets/images/xmas_break/hatBig.png');
  bookSmallIMG = loadImage('assets/images/xmas_break/bookSmall.png');
  bookBigIMG = loadImage('assets/images/xmas_break/bookBig.png');
  pendantSmallIMG = loadImage('assets/images/xmas_break/pendantSmall.png');
  pendantBigIMG = loadImage('assets/images/xmas_break/pendantBig.png');
  lampSmallIMG = loadImage('assets/images/xmas_break/lampSmall.png');
  lampBigIMG = loadImage('assets/images/xmas_break/lampBig.png');
  keyIMG = loadImage('assets/images/xmas_break/key.png');
  doorIMG = loadImage('assets/images/xmas_break/door.png');
  endBoardBG = loadImage('assets/images/xmas_break/denialBG.png');
  ghostIMG = loadImage('assets/images/xmas_break/ghost.png');

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

  currentState = new Start(smallHeartIMG, smallDeathIMG);
  // currentState = new Alliance_of_harmony_title(smallHeartIMG, smallDeathIMG);
  // currentState = new Ten_seconds_title(deadRosePNG);
  // currentState = new Loading(loadingCircle);
  // currentState = new Meeting_Sam(samIMG, arrowGIF);
  // currentState = new Meeting_Sam2(samIMG, arrowGIF, bigSam);
  // currentState = new Main_Level_Page_5(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Main_Level_Page_4(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Main_Level_Page_3(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Main_Level_Page_2(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new Main_Level_Page_1(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);

  // currentState = new Denial(deathGIF, heartIMG, deadRosePNG);
  // currentState = new Anger(mediumDeathGIF, heartIMG, deadRosePNG);

  // currentState = new BargainingIntro(samIMG, arrowGIF, bigSam);
  // currentState = new Bargaining(smallHeartIMG, smallDeathGIF);
  // currentState = new BargainingEnd();

  // currentState = new DenialInstructions(smallDeathGIF, smallHeartIMG);
  // currentState = new Depression();
  // currentState = new Acceptance();
  // currentState = new EndSam(samIMG, arrowGIF, bigSam)
  // currentState = new EndBoard(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
  // currentState = new GhostScare();

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

  // canvasMouse.pixelRatio = pixelDensity();
  World.add(world, mConstraint);


  waveSFX.amp(0.02);
  pointsSFX.amp(0.05);
  foundObjectSFX.amp(0.12);

  introSFX.amp(0.1);
  bellIntroSFX.amp(0.04);
  introTransitionSFX.amp(0.15);

  roomToneSFX.amp(0.3)
  bell2SFX.amp(0.2);
  keyboardSFX.amp(0.2);
  bell3SFX.amp(0.1);

  noEnterSFX.amp(0.05)

  windSFX.amp(0.02);
  denialEmotionSFX.amp(0.1);
  denialHeartSFX.amp(0.3);
  stoneSFX.amp(0.2);

  fireSFX.amp(0.04)
  angerHitSFX.amp(0.1)
  creatureSFX.amp(0.3)
  hissSFX.amp(0.06);
  deepSFX.amp(0.2);

  sineSFX.amp(0.14);
  bigSamSFX.amp(0.06);
  kickReverbSFX.amp(0.1);

  bargainingSONG.amp(0.05);

  thunderSFX.amp(0.1);
  depressionSFX.amp(0.06);
  depressionBlocksSFX.amp(0.1);
  ghostSFX.amp(0.4);

  bipSFX.amp(0.1);
  unlockSFX.amp(0.2);
  doorSFX.amp(0.1);
  angelSFX.amp(0.1);
  spotSFX.amp(0.2);
  impactSFX.amp(0.1);

  birdsSFX.amp(0.03);
  keySFX.amp(0.1);
  frameSFX.amp(0.1);
  flashSFX.amp(0.5);
}

function draw() {
  currentState.update();
  //  console.log(totalPoints)
  timePassed = millisToMinutesAndSeconds();
  // console.log(timePassed)
}

function millisToMinutesAndSeconds() {
  millisecond = millis();
  var minutes = Math.floor(millisecond / 60000);
  var seconds = ((millisecond % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
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

function keyTyped() {
  currentState.keyTyped();
}

function mouseReleased() {
  currentState.mouseReleased();
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
