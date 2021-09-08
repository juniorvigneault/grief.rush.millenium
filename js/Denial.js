class Denial {
  constructor(deathGIF, heartGIF, deadRose) {

    this.denialText = {
      string: `DENIAL`,
      size: 200,
      x: 400,
      y: 350,
      vx: 0,
      vy: 0,
      speed: 5,
      finaleY: 350
    };

    this.level1Text = {
      string: `LEVEL 1`,
      size: 170,
      x: 400,
      y: -450,
      vx: 0,
      vy: 0,
      speed: 5,
      finaleY: 260
    };

    this.goTitleText = {
      string: `GO`,
      size: 200,
      x: 400,
      y: 320,
      font: ibmFONTTypewriter,
      color: 0
    };

    this.denialTitleAppear = false;
    this.denialTextMoving = false;
    this.level1TextAppear = true;
    this.GoTitleTextAppear = false;
    this.GoTitleFontChange = false;

    this.death = {
      gif: deathGIF,
      x: 400,
      y: 130,
      vx: 0,
      speed: 1.4
    }

    this.heart = {
      img: heartIMG,
      img2: heartIMG,
      img3: heartIMG,
      img4: heartIMG,
      life1: false,
      life2: false,
      life3: false,
      life4: false,
      x1: 120,
      y1: 610,
      x2: 300,
      y2: 690,
      x3: 500,
      y3: 690,
      x4: 680,
      y4: 610,
      vx: 0,
      speed: 1.4
    }

    this.backgroundColor = {
      h: 305,
      s: 34.8,
      l: 90,
      alpha: 0
    }

    this.deadRose = {
      img: deadRosePNG,
      x: 400,
      y: -100,
      vx: 0,
      vy: 0,
      speed: 4.8,
      finaleY: 580
    }

    this.deadRoseAppear = true;
    this.displayGameElements = false;

    this.basicPoints = 0;
    this.addedPoints = 0;
    this.winsBasicPoints = false;
    this.pointsAlpha = 75;

    this.gameFailed = false;
    this.fade = new Fade(0, 1, false, true, 0, 0, 0)

    this.moveDeathBack = false;
    this.lifeLineIsThere = true;

    setTimeout(() => {
      this.denialTitleAppear = true;
    }, 2000);

    setTimeout(() => {
      this.denialTextMoving = true;
      this.level1TextMoving = true;
    }, 4000);

    setTimeout(() => {
      this.level1TextAppear = false;
      this.deadRoseAppear = false;
      this.displayGameElements = true;
    }, 8000);

    setTimeout(() => {
      this.GoTitleTextAppear = true;
    }, 8700);
    setTimeout(() => {
      this.GoTitleFontChange = true;
      this.flashingBackground = true;
    }, 8800);
    setTimeout(() => {
      this.GoTitleTextAppear = false;
      this.flashingBackground = false;
      this.backgroundColor.l = 90;

      this.startGame = true;

    }, 9200);

    this.feelingEmotions = true;

    setInterval(() => {
      this.emotionsAreReady = true;
    }, 4000);

    setInterval(() => {
      this.emotionsAreReady = false;
    }, 8000);

    this.paddleX = undefined;
    this.paddleY = undefined;
    // World.add(world, this.body)

    this.lifeRect = {
      x: 0,
      y: 0,
      w: 800,
      h: 15,
      color: {
        r: 0,
        g: 0,
        b: 0
      },
      flashes: false
    }


    this.flashingBackground = false;
    this.startGame = false;
    this.intro = true;

    this.emotionsAreReady = false;
    this.win = false;
    this.grievingPointsTitle = false;

  }


  update() {
    this.background();
    if (this.intro) {
      if (this.displayGameElements) {
        this.displayDeath();
        this.displayHearts();
        // this.moveDeath();
      }
      this.displayIntro()
      if (this.deadRoseAppear) {
        this.displayDeadRose();
      }
      if (this.denialTextMoving) {
        this.moveDenialText();
        this.moveLevel1Text();
        this.moveDeadRose();
      }
    }



    if (this.startGame) {

      this.gainPoints();
      this.background();
      this.removeHeart();
      this.endGame();
      this.displayDeath();
      this.displayHearts();
      this.moveDeath();
      this.deleteGrounds();
      this.success();

      if (this.winsBasicPoints) {
        this.displayEarnedPoints();
      }
      // draw the ground





      for (let i = 0; i < grounds.length; i++) {
        grounds[i].update();
      }

      this.emotionsDrop();
      this.displayLifeLine();
      this.lifeRect.w = this.lifeRect.w - .5

      if (this.gameFailed) {
        this.fade.update();
      }

      if (this.emotionsAreReady) {
        this.emotionsReady();
      } else {
        for (let i = 0; i < emotions.length; i++) {
          emotions[i].fill.r = 0;
          emotions[i].fill.g = 0;
          emotions[i].fill.b = 0;
          emotions[i].fill.alpha = 255;
        }
      }
      if (this.background2Appear) {
        this.background2();
      }
      if (this.win) {
        this.displayFinalPoints();
      }
      if (this.addPoints) {
        this.addFinalPoints();
      }
      if (this.background3Appear){
        this.background3();
      }
    }

  }

  displayIntro() {

    if (this.denialTitleAppear) {
      this.denialTitle();
    }

    if (this.level1TitleAppear) {
      this.displayLevel1Title();
    }

    if (this.level1TextAppear) {
      this.displayLevel1Title();
    }

    if (this.GoTitleTextAppear) {
      this.displayGoTitle();
    }

    if (this.GoTitleFontChange) {
      this.goTitleText.font = ibmFONT;
      this.goTitleText.size = 300;
      this.goTitleText.color = random(0, 150);
      if (this.flashingBackground) {
        this.backgroundColor.l = random(90, 100);
      }
    }
  }

  displayDeadRose() {
    push();
    imageMode(CENTER);
    image(this.deadRose.img, this.deadRose.x, this.deadRose.y)
    pop();
  }

  denialTitle() {
    push();
    textFont(ibmFONT);
    textAlign(CENTER, CENTER);
    textSize(this.denialText.size);
    text(this.denialText.string, this.denialText.x, this.denialText.y)
    pop();
  }

  background() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.l)
    rect(400, 400, 800, 800)
    pop();
  }

  background2() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.l)
    rect(400, 400, 800, 800)
    pop();
  }

  background3(){
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.l, this.backgroundColor.alpha)
    rect(400, 400, 800, 800)
    pop();
  }

  moveDenialText() {
    this.denialText.y = this.denialText.y += this.denialText.vy;
    if (this.denialText.y < this.denialText.finaleY) {
      this.denialText.vy = 0;
    } else {
      this.denialText.vy = this.denialText.speed;
    }
  }

  moveDeadRose() {
    this.deadRose.y = this.deadRose.y += this.deadRose.vy;
    if (this.deadRose.y > this.deadRose.finaleY) {
      this.deadRose.vy = 0;
    } else {
      this.deadRose.vy = this.deadRose.speed;
    }
  }

  moveLevel1Text() {
    this.level1Text.y = this.level1Text.y += this.level1Text.vy;

    if (this.level1Text.y > this.level1Text.finaleY) {
      this.level1Text.vy = 0;
    } else {
      this.level1Text.vy = this.level1Text.speed;
    }
  }

  emotionsDrop() {
    this.displayEmotions()
    if (this.feelingEmotions) {
      if (frameCount % 60 === 0) {
        emotions.push(new Emotions(this.death.x, this.death.y + 65, 25, 25, world, 0.8, 0.8));
      };
    }
  }

  displayEmotions() {
    // background(255);
    for (let i = 0; i < emotions.length; i++) {
      emotions[i].update();
      if (emotions[i].offScreen()) {
        // remove boxes from the world so the physics engine stops taking care of them when they leave screen
        emotions[i].removeFromWorld();
        // remove box from the array
        emotions.splice(i, 1);
        // prevents the skipping of a box when removed from the array by backing up 1
        i--;

      }
    }
  }

  touchesHeart(heartX, heartY) {
    for (let i = 0; i < emotions.length; i++) {
      let pos = emotions[i].body.position;
      let d = dist(pos.x, pos.y, heartX, heartY)
      return (d < 70)
    }
  }

  endGame() {
    if (this.emotionsAreReady == false) {
      if (this.heart.life1 && this.heart.life2 && this.heart.life3 && this.heart.life4) {
        this.gameFailed = true
      }
    }
  }

  deleteGrounds() {
    if (keyIsDown(32)) {
      this.removeGround();
    }
  }

  emotionsReady() {
    for (let i = 0; i < emotions.length; i++) {
      emotions[i].fill.r = random(220, 360);
      emotions[i].fill.g = 77;
      emotions[i].fill.b = 60;
      emotions[i].fill.alpha = 255;
    }
  }

  removeHeart() {
    for (let i = 0; i < emotions.length; i++) {
      if (this.emotionsAreReady == false) {
        if (this.touchesHeart(this.heart.x1, this.heart.y1)) {
          this.heart.life1 = true;
          // LINE
          this.lifeLine();
        } else if (this.touchesHeart(this.heart.x2, this.heart.y2)) {
          this.heart.life2 = true;
          // LINE
          this.lifeLine();
        } else if (this.touchesHeart(this.heart.x3, this.heart.y3)) {
          this.heart.life3 = true;
          // LINE
          this.lifeLine();
        } else if (this.touchesHeart(this.heart.x4, this.heart.y4)) {
          this.heart.life4 = true;
          // LINE
          this.lifeLine();
        }
      }
    }
  }

  gainPoints() {
    for (let i = 0; i < emotions.length; i++) {
      if (this.emotionsAreReady) {
        if (this.touchesHeart(this.heart.x1, this.heart.y1)) {
          this.pointsAlpha = 255;
          this.winsBasicPoints = true;
          this.addedPoints = this.addedPoints + 100;

        } else if (this.touchesHeart(this.heart.x2, this.heart.y2)) {
          this.pointsAlpha = 255;
          this.winsBasicPoints = true;
          this.addedPoints = this.addedPoints + 100;
          this.pointsAlpha = 255;

        } else if (this.touchesHeart(this.heart.x3, this.heart.y3)) {
          this.pointsAlpha = 255;

          this.winsBasicPoints = true;
          this.addedPoints = this.addedPoints + 100;

        } else if (this.touchesHeart(this.heart.x4, this.heart.y4)) {
          this.pointsAlpha = 255;

          this.winsBasicPoints = true;
          this.addedPoints = this.addedPoints + 100;
        }
      }
    }
  }

  displayFinalPoints() {
    push();
    textAlign(CENTER, CENTER);
    textSize(200);
    fill(0, 0, 0);
    textFont(ibmFONT);
    text(this.basicPoints, 400, 350);
    pop();
    if (this.grievingPointsTitle) {
      push();
      textAlign(CENTER, CENTER);
      textSize(30);
      fill(0, 0, 0);
      textFont(ibmFONTTypewriter);
      text('Grieving Points', 400, 550);
      pop();
      pop();
    }
  }

  addFinalPoints() {

    if (this.basicPoints <= this.addedPoints) {
      this.basicPoints = this.basicPoints + 100

    }
    else {
      this.basicPoints = this.basicPoints
      this.grievingPointsTitle = true;
      setTimeout(() => {
        this.background3Appear = true;
      }, 3000);
    }
  }

  displayEarnedPoints() {
    this.pointsAlpha = constrain(this.pointsAlpha, 0, 255);
    push();
    textAlign(CENTER, CENTER);
    textSize(70);
    fill(0, 0, 0, this.pointsAlpha);
    textFont(ibmFONTTypewriter);
    text('+100', 400, 400);
    this.pointsAlpha = this.pointsAlpha - 4;
    pop();
  }

  mouseDragged() {}

  displayLifeLine() {
    if (this.lifeLineIsThere) {
      push();
      noStroke();
      fill(this.lifeRect.color.r, this.lifeRect.color.g, this.lifeRect.color.b);
      rect(this.lifeRect.x, this.lifeRect.y, this.lifeRect.w, this.lifeRect.h)
      pop();

      if (this.lifeRect.flashes) {
        this.lifeRect.color.r = 255
      } else {
        this.lifeRect.color.r = 0;
      }
    }
  }

  lifeLine() {
    this.fillLifeLine();
    this.lifeRect.flashes = true;
    setTimeout(() => {
      this.lifeRect.flashes = false;
    }, 50);
    setTimeout(() => {
      this.lifeRect.flashes = true;
    }, 100);
    setTimeout(() => {
      this.lifeRect.flashes = false;
    }, 150);
  }

  fillLifeLine() {
    this.lifeRect.w = constrain(this.lifeRect.w, 700, 0);
    this.lifeRect.w += 50;
  }

  success() {
    if (this.lifeRect.w == 0) {
      this.feelingEmotions = false;
      this.death.speed = 0;
      this.lifeLineIsThere = false;
      setTimeout(() => {
        this.background2Appear = true;
      }, 4000);
      setTimeout(() => {
        this.win = true;
      }, 5000);
      setTimeout(() => {
        this.addPoints = true;
      }, 6000);

    }
  }

  displayLevel1Title() {
    push();
    textSize(this.level1Text.size)
    textAlign(CENTER, CENTER);
    textFont(ibmFONT);
    text(this.level1Text.string, this.level1Text.x, this.level1Text.y)
    pop();
  }

  displayGoTitle() {
    push();
    textSize(this.goTitleText.size)
    fill(this.goTitleText.color)
    textAlign(CENTER, CENTER);
    textFont(this.goTitleText.font);
    text(this.goTitleText.string, this.goTitleText.x, this.goTitleText.y)
    pop();
  }



  displayDeath() {
    push();
    imageMode(CENTER);
    image(this.death.gif, this.death.x, this.death.y)
    pop();
  }

  displayHearts() {
    push();
    imageMode(CENTER);
    if (this.heart.life1 == false) {
      image(this.heart.img, this.heart.x1, this.heart.y1)
    }
    if (this.heart.life2 == false) {
      image(this.heart.img2, this.heart.x2, this.heart.y2)
    }
    if (this.heart.life3 == false) {
      image(this.heart.img3, this.heart.x3, this.heart.y3)
    }
    if (this.heart.life4 == false) {
      image(this.heart.img4, this.heart.x4, this.heart.y4)
    }
    pop();
  }

  moveDeath() {
    this.death.x = this.death.x += this.death.vx;
    this.death.vx = this.death.speed;

    if (this.death.x > 700) {
      this.death.vx = 0
      setTimeout(() => {
        this.moveDeathBack = true;
      }, 2000);
    }

    if (this.moveDeathBack) {
      this.death.vx = -this.death.speed
      if (this.death.x < 100) {
        this.death.vx = 0
        setTimeout(() => {
          this.moveDeathBack = false;
          this.death.vx = this.death.speed;
        }, 2000);
      }
    }
  }

  removeGround() {
    for (let i = 0; i < grounds.length; i++) {
      grounds[i].removeFromWorld();
      grounds.splice(i, 1);
      // prevents the skipping of a box when removed from the array by backing up 1
      i--;
    }
  }

  mousePressed() {
    if (this.startGame) {
      grounds.push(new Ground(mouseX, mouseY, 200, 40, world, 0, 255,255,255));
      for (let i = 0; i < grounds.length; i++) {
        if (grounds.length >= 4) {
          grounds[i].removeFromWorld();
          grounds.splice(i, 1);
          // prevents the skipping of a box when removed from the array by backing up 1
          i--;
        }
      }
    }
  }
}
