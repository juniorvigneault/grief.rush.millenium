class DenialInstructions {
  constructor(smallDeathGIF, smallHeartIMG) {

    this.backgroundColor = {
      h: 38,
      s: 63,
      l: 90,
      alpha: 0
    }

    this.smallDeathGIF = {
      gif: smallDeathGIF,
      x: 130,
      y: 310
    }

    this.heartIMG = {
      img: smallHeartIMG,
      x: 130,
      y: 570
    }

    this.blackSquares = {
      w: 30,
      h: 30,
      x: 130,
      y: 410,
      fill: 0
    }

    this.coloredSquares = {
      w: 30,
      h: 30,
      x: 130,
      y: 480,
      fill: {
        r: 220,
        g: 77,
        b: 60
      }
    }

    this.whiteRectangle = {
      w: 80,
      h: 30,
      x: 130,
      y: 640,
      fill: 255
    }

    this.fade = new Fade(0, 1, false, true, 255, 255, 255);
    this.fadeIn = false;

    this.denialExplained = 'You are in a state of shock. Denial initially helps protect you, making you cope with your loss by pacing your feelings of grief.'
    this.deathExplained = 'This skull is the root of your overwhelming emotions. It spits them out and your task is to pace those emotions accordingly.'
    this.blackSquaresExplained = 'Dark emotions! You are not ready to absorb those yet and must wait before facing them.'
    this.coloredSquaresExplained = 'These emotions are ready to be confronted! Absorb them quickly to gain points, before they turn black again!'
    this.heartsExplained = 'Your hearts must stay protected from dark emotions and be fed emotions ready to be confronted!'
    this.whiteRectangleExplained = 'Block dark emotions by CLICKING to add obstacles. Press SPACE to delete all blocks. Be careful, you can only use two obstacles at a time!'

    setInterval(() => {
      this.clickToStartAppear = true;
    }, 1000);

    setInterval(() => {
      this.clickToStartAppear = false;
    }, 2000);

  }


  update() {
    this.display();
  }


  background() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.l);
    rect(400, 400, 800, 800);
    pop();

    push();
    image(denialInstructionsBG, 0,0);
    pop();
  }

  display() {
    this.background();
    this.displayInstructionsTitle();
    // this.displayColoredSquare();
    // this.displayDenialExplanation();
    this.displayBlackSquares();
    this.displaySmallDeathGif();
    this.displayHeartGif();
    // this.displayWhiteRect();

    if (this.clickToStartAppear) {
      this.displayClickToStart();
    }

    if (this.fadeIn) {
      this.fade.update();
      setTimeout(() => {
        currentState = new Denial(deathGIF, heartIMG, deadRosePNG);
      }, 5000);
    }

  }



  displayInstructionsTitle() {
    push();
    fill(30, 30, 30);
    textSize(50);
    textAlign(CENTER, CENTER);
    textFont(ibmFONTTypewriter);
    text('Instructions', 400, 60);
    line(300, 125, 500, 125);
    pop();
  }


  displayColoredSquare() {
    this.coloredSquares.fill.r = random(220, 360);
    push();
    noStroke();
    fillHsluv(this.coloredSquares.fill.r, this.coloredSquares.fill.g, this.coloredSquares.fill.b);
    rectMode(CENTER);
    rect(this.coloredSquares.x, this.coloredSquares.y, this.coloredSquares.w, this.coloredSquares.h);
    pop();

    push();
    fill(30, 30, 30);
    textSize(14)
    textAlign(LEFT, CENTER)
    textFont(ibmFONTTypewriter)
    text(this.coloredSquaresExplained, 200, 378, 500, 200)
    pop();
  }

  displayBlackSquares() {
    push();
    noStroke();
    fill(0);
    rectMode(CENTER);
    rect(this.blackSquares.x, this.blackSquares.y, this.blackSquares.w, this.blackSquares.h);
    pop();

    push();
    fill(30, 30, 30);
    textSize(14)
    textAlign(LEFT, CENTER)
    textFont(ibmFONTTypewriter)
    text(this.blackSquaresExplained, 200, 308, 500, 200)
    pop();
  }

  displayWhiteRect() {
    push();
    noStroke();
    rectMode(CENTER);
    fill(this.whiteRectangle.fill);
    rect(this.whiteRectangle.x, this.whiteRectangle.y, this.whiteRectangle.w, this.whiteRectangle.h);
    pop();

    push();
    fill(30, 30, 30);
    textSize(14)
    textAlign(LEFT, CENTER)
    textFont(ibmFONTTypewriter)
    text(this.whiteRectangleExplained, 200, 540, 500, 200)
    pop();
  }

  displayDenialExplanation() {
    push();
    fill(30, 30, 30);
    textSize(17)
    textAlign(CENTER, CENTER)
    textFont(ibmFONTTypewriter)
    text(this.denialExplained, 205, 80, 400, 200)
    pop();
  }


  displaySmallDeathGif() {
    push();
    imageMode(CENTER);
    image(this.smallDeathGIF.gif, this.smallDeathGIF.x, this.smallDeathGIF.y)
    pop();

    push();
    fill(30, 30, 30);
    textSize(14)
    textAlign(LEFT, CENTER)
    textFont(ibmFONTTypewriter)
    text(this.deathExplained, 200, 260, 500, 100)
    pop();
  }

  displayHeartGif() {
    push();
    imageMode(CENTER);
    image(this.heartIMG.img, this.heartIMG.x, this.heartIMG.y)
    pop();

    push();
    fill(30, 30, 30);
    textSize(14)
    textAlign(LEFT, CENTER)
    textFont(ibmFONTTypewriter)
    text(this.heartsExplained, 200, 466, 500, 200)
    pop();
  }

  displayClickToStart() {
    push();
    fill(30, 30, 30);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(ibmFONTTypewriter);
    text('Click to start!', 400, 720);
    pop();
  }


  mousePressed() {
    this.fadeIn = true;
  }

  mouseDragged() {

  }


}
