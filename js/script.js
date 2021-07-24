"use strict";
// This is a project about grief and the future of gamification and how we need
// lots of crazy shit to stay focused and feel emotions nowadays.
// by Junior

// VARIABLES DECLARATION

// canvas size variable
let cnvX = 1000;
let cnvY = 700;

// IMAGE VARIABLES
// Alliance of harmony title variable
let alliancePNG;
let ofPNG;
let harmonyPNG;
let flowersPNG;
let decorationPNG;
let starGIF;
let eleganteFONT;

// Current active OOP state
let currentState;

function preload(){
  // IMAGES PRELOAD
  // Alliance of harmony title png
  alliancePNG = loadImage(`assets/images/png/alliance.png`)
  harmonyPNG = loadImage(`assets/images/png/harmony.png`)
  ofPNG = loadImage(`assets/images/png/of.png`)
  flowersPNG = loadImage(`assets/images/png/flowers.png`)
  decorationPNG = loadImage(`assets/images/png/decoration.png`)
  starGIF = loadImage(`assets/gifs/star_2.gif`)

  eleganteFONT = loadFont(`assets/fonts/elegante.ttf`)

}

function setup() {
  createCanvas(cnvX, cnvY);
  currentState = new Alliance_of_harmony_title(alliancePNG, ofPNG, harmonyPNG, flowersPNG, decorationPNG, starGIF);
}

function draw() {
  background(240);
  currentState.update();
}

function mousePressed(){
  currentState.mousePressed();
}

function keyIsDown(){
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
