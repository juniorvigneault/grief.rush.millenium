"use strict";
// This is a project about grief and the future of gamification and how we need
// lots of crazy shit to stay focused and feel emotions nowadays.
// by Junior

// VARIABLES DECLARATION

// canvas size variable
let cnvX = 1300;
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

// Current active OOP state
let currentState;

let avatar_typewriter;

let message;

function preload() {
  // IMAGES PRELOAD
  // Alliance of harmony title png
  flowersPNG = loadImage(`assets/images/png/flowers.png`)
  starGIF = loadImage(`assets/gifs/star1.gif`)

  obrigeFONT = loadFont(`assets/fonts/obrige.otf`)

}

function setup() {
  // Create the p5 canvas
  let canvas = createCanvas(cnvX, cnvY);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  // currentState = new Ten_seconds_title();
  currentState = new Alliance_of_harmony_title();
  // currentState = new Avatar_intro();
  // currentState = new Start();

}

function draw() {
  background(255);
  currentState.update();
}

function mousePressed() {
  currentState.mousePressed();
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
