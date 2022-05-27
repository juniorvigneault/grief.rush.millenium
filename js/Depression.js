class Depression {
  constructor(samGIF) {


    this.sam = {
      image: samGIF,
      x: 400,
      y: 300,
      vy: 0,
      speed: -10,
      finaleY: 310,
      isMoving: false,
      imageHappy: bigSam
    }

    this.canPlay = true;

    this.rectHint = {
      x: 0,
      y: 0,
      w: 100,
      h: 50
    }

    windSFX.loop();
    this.hint = {
      text: 'I',
      x: 400,
      y: 400,
      vx: 0,
      vy: 0,
      speed: 10,
      text: 'I',
      size: 32
    }
    this.typewriter = new Typewriter();

    engine.world.gravity.scale = 0.00001;
    //  depressionSONG.amp(0.1);
    //  depressionSONG.loop();
    this.gameTime = 0;
    this.textColorLight = 220;
    this.denialText = {
      string: `DEPRESSION`,
      size: 100,
      x: 400,
      y: 130,
      vx: 0,
      vy: 0,
      speed: 5,
      finaleY: 130
    };

    this.level1Text = {
      string: `LEVEL 4`,
      size: 100,
      x: 400,
      y: -550,
      vx: 0,
      vy: 0,
      speed: 5,
      finaleY: 130
    };

    this.goTitleText = {
      string: `START`,
      size: 150,
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

    this.whiteFade = 0;
    this.heart = {
      img: heartIMG,
      x1: 120,
      y1: 610,

    }

    this.backgroundColor = {
      h: 305,
      s: 34.8,
      l: 90,
      alpha: 0
    }

    this.playTime = false;



    this.gameOver = {
      text: 'Game 0ver',
      x: 400,
      y: 400,
      color: 255,
      alpha: 0
    }

    this.gift = {
      x: 410,
      y: 300
    }

    this.deadRoseAppear = true;
    this.displayGameElements = false;

    this.basicPoints = 0;
    this.addedPoints = 0;
    this.winsBasicPoints = false;
    this.pointsAlpha = 75;

    this.gameFailed = false;
    this.fade = new Fade(0, 1, false, true, 0, 0, 0)
    this.fade2 = new Fade(0, 1.3, false, true, 255, 255, 255)
    this.fade2Appears = false;

    this.moveDeathBack = false;
    this.lifeLineIsThere = true;

    this.background4appear = false;
    this.giftAppear = false;
    this.giftTitleAppear = false;

    this.openGift = false;
    this.background5appear = false;
    this.finalFade = false;

    this.hint1found = false;
    this.hint2found = false;
    this.hint3found = false;
    this.hint4found = false;
    this.hint5found = false;

    this.percentage = 1;
    this.answer = 'I'
    this.answertext2 = false;
    this.answertext3 = false;
    this.answertext4 = false;
    this.answertext5 = false;
    // create ragdoll

    setTimeout(() => {
      // bell1SFX.amp(0.5);
      // bell1SFX.play()
      bell3SFX.play()

    }, 2000);

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
      // startSFX.amp(0.05);
      // startSFX.play();
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
      this.groundAppear = true;
      this.samIsThere = true;
      depressionBlocksSFX.loop();

    }, 9200);

    this.feelingEmotions = true;

    this.toddlerGrieverAppear = false;

    // setInterval(() => {
    //   this.percentage = random(1,50);
    //   console.log(this.percentage)
    // }, 10000);

    setInterval(() => {
      this.toddlerGrieverAppear = true;
    }, 1000);

    setInterval(() => {
      this.toddlerGrieverAppear = false;
    }, 2000);

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

    this.clickable = true;
    this.flashingBackground = false;
    this.startGame = false;
    this.intro = true;

    this.emotionsAreReady = false;
    this.win = false;
    this.grievingPointsTitle = false;
    this.gainingPointsAllowed = true;

    this.startDisplayingGameOver = false;
    this.endScene = false;
    this.endFade = false;


  }


  update() {
    this.background();
    if (this.intro) {
      if (this.displayGameElements) {
        // this.displayDeath();
        // this.displayHearts();
        // this.moveDeath();
      }

      this.displayIntro()
      // if (this.deadRoseAppear) {
      //   this.displayDeadRose();
      // }
      if (this.denialTextMoving) {
        this.moveDenialText();
        this.moveLevel1Text();
        // this.moveDeadRose();
      }
    }



    if (this.startGame) {

      // if (this.gainingPointsAllowed) {
      //   this.gainPoints();
      // }
      this.removeGround();
      this.background();
      this.displayHints();

      for (let i = 0; i < particleObjects.length; i++) {
        particleObjects[i].display();
        //console.log(particleObjects[i])
        // this.displayDeath(particleObjects[i].particles[0].body.position.x,particleObjects[i].particles[0].body.position.y)
      }

      // this.removeHeart();
      // this.endGame();
      // this.displayHearts();
      // this.moveDeath();

      this.success();
      this.playTime = true;

      // if (this.winsBasicPoints) {
      //   this.displayEarnedPoints();
      // }
      // draw the ground




      for (let i = 0; i < grounds.length; i++) {
        grounds[i].update();
      }
      if (this.samIsThere) {
        // this.displaySam();
      }

      this.emotionsDrop();

      if (this.answertext1) {
        this.displayAnswer();
      }

      if (this.depressionOver) {
        this.percentage = 100;
        this.hint.text = '';
        setTimeout(() => {
          engine.world.gravity.scale = 0.001;
          this.answer = '';
          setTimeout(() => {
            this.endFade = true;
            this.finalFade = true;
            setTimeout(() => {
              this.win = true;
            }, 5000);
            setTimeout(() => {
              this.addPoints = true;
              this.canPlay = false;
            }, 6000);
            setTimeout(() => {
              this.openGift = true;
            }, 15000);
          }, 2000);
        }, 1000);
      }
      // this.displayLifeLine();
      //
      this.lifeRect.w = this.lifeRect.w - this.gameTime;

      if (this.gameFailed) {
        this.fade.update();
        this.gainingPointsAllowed = false;
        this.displayGameOver();
        this.feelingEmotions = false;
        setTimeout(() => {
          currentState = new Main_Level_Page_2(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
        }, 6000);
        this.gameFailed == false;

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



      if (this.addPoints) {
        this.addFinalPoints();
      }
      if (this.finalFade) {
        push();
        fill(255, 255, 255, this.whiteFade)
        this.whiteFade = this.whiteFade + 1;
        rectMode(CORNER);
        noStroke();
        rect(0, 0, 800, 800)
        pop();
      }
      if (this.win) {
        this.displayFinalPoints();
      }

      if (this.background3Appear) {
        // this.background3();
        this.displayGrewToLevel2();
        // this.win = true;
        // this.displayDeadRoseEnd();
        if (this.toddlerGrieverAppear) {
          this.displayToddlerGriever();
        }



        // setTimeout(() => {
        //   currentState = new Main_Level_Page_3(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
        // }, 7000);
        // setTimeout(() => {
        //   this.finalFade = true;
        //   setTimeout(() => {
        //     this.background3Appear = true;
        //   }, 6000);
        // }, 3000);



        // setTimeout(() => {
        //   this.background4appear = true;
        //   setTimeout(() => {
        //     this.giftAppear = true;
        //     setTimeout(() => {
        //       this.giftTitleAppear = true;
        //     }, 1000);
        //   }, 2000);
        // }, 5000);
      }
      if (this.background4appear) {
        push();
        imageMode(CORNER);
        image(depressionBG, 0, 0);
        pop();

        if (this.giftAppear) {
          push();
          imageMode(CENTER);
          this.gift.x = random(390, 410);
          image(giftPNG, this.gift.x, this.gift.y);
          pop();

          if (this.giftTitleAppear) {
            this.endScene = true;
            push();
            fill(this.textColorLight)
            textAlign(CENTER, CENTER);
            textFont(ibmFONTTypewriter);
            textSize(25);
            text('You found an item', 400, 500);
            pop();
          }
        }

        // if (this.finalFade) {
        //   this.fade2.update();
        // }

      }
      if (this.openGift) {

        push();
        rectMode(CENTER);
        noStroke();
        fill(255);
        rect(400, 400, width, height);
        pop();

        if (!foundObjectSFX.isPlaying()) {
          foundObjectSFX.play();
          setTimeout(() => {
            this.soundOff = true;
          }, 1000);
        }
        if (this.soundOff) {
          foundObjectSFX.stop();
        }

        push();
        imageMode(CENTER);
        image(hatBigIMG, 400, 300);
        pop();
        push();
        fill(0)
        textAlign(CENTER, CENTER);
        textFont(ibmFONTTypewriter);
        textSize(25);
        text(`You found a purple party hat!`, 400, 550);
        text('It was added to your inventory', 400, 600);
        pop();

        setTimeout(() => {
          currentState = new GhostScare();
        }, 5000);


      }
    }

  }

  displayAnswer() {
    push();
    fill(255, 0, 0);
    textSize(50);
    textFont(ibmFONT)
    textAlign(CENTER, CENTER);
    text(this.answer, 400, 700);
    pop();

    if (this.answertext2) {
      this.answer = 'I WANT'
    }
    if (this.answertext3) {
      this.answer = 'I WANT TO'
    }
    if (this.answertext4) {
      this.answer = 'I WANT TO BE'
    }
    if (this.answertext5) {
      this.answer = 'I WANT TO BE FREE'
    }
  }


  displayHints() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(200, 0, 0, 0);
    rect(this.hint.x + 20, this.hint.y - 10, this.rectHint.w, this.rectHint.h)
    pop();

    push();
    fill(255);
    textFont(ibmFONTTypewriter);

    textSize(this.hint.size);

    text(this.hint.text, this.hint.x, this.hint.y)



    pop();
    this.moveHints();
    this.wrapHints();
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
      this.goTitleText.size = 150;
      this.goTitleText.color = random(0, 150);
      if (this.flashingBackground) {
        this.backgroundColor.l = random(90, 100);
      }
    }
  }

  displayGameOver() {
    // this.gameOver.alpha = this.gameOver.alpha + 1;
    // push();
    // textFont(ibmFONT);
    // fill(150, 150, 150, this.gameOver.alpha)
    // textAlign(CENTER, CENTER);
    // textSize(80);
    // text('Game Over', 400, 400);
    // pop();
  }

  displayGrewToLevel2() {
    push();
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(400, 400, width, height)
    pop();
    textFont(ibmFONTTypewriter);
    fill(0)
    textAlign(CENTER, CENTER);
    textSize(40);
    text('YOU ARE NOW', 400, 150);
    textFont(ibmFONT);
    textSize(65);
    text('LEVEL 4 :', 400, 300);
    pop();
  }

  displayToddlerGriever() {
    push();
    fill(0)
    textAlign(CENTER, CENTER);
    textFont(ibmFONT);
    textSize(70);
    text('BUDDING GRIEVER', 400, 450);
    pop();
  }


  displayDeadRose() {
    push();
    imageMode(CENTER);
    image(this.deadRose.img, this.deadRose.x, this.deadRose.y)
    pop();
  }

  moveHints() {
    this.changeDirection = random();
    if (this.changeDirection < 0.02) {
      this.hint.vx = random(-this.hint.speed, this.hint.speed);
      this.hint.vy = random(-this.hint.speed, this.hint.speed);
    }
    this.hint.x = this.hint.x + this.hint.vx;
    this.hint.y = this.hint.y + this.hint.vy;


  }

  wrapHints() {
    if (this.hint.x > width) {
      this.hint.x -= width;
    } else if (this.hint.x < 0) {
      this.hint.x += width;
    } else if (this.hint.y > width) {
      this.hint.y -= width;
    } else if (this.hint.y < 0) {
      this.hint.y += width;
    }
  }


  denialTitle() {
    push();
    textFont(ibmFONT);
    textAlign(CENTER, CENTER);
    textSize(this.denialText.size);
    fill(30, 30, 30);
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

    push();
    imageMode(CORNER)
    image(depressionBG, 0, 0);
    pop();
  }

  background2() {
    push();
    imageMode(CORNER)
    image(depressionBG, 0, 0);
    pop();
  }

  background3() {
    push();
    imageMode(CORNER)
    image(depressionBG, 0, 0)
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
      if (frameCount % this.percentage === 0) {
        let randomSize = random(100, 200);
        emotions.push(new Emotions(random(20, 780), random(20, 780), randomSize, randomSize, world, 0.8, 0.8));
        emotions.push(new Emotions(random(20, 780), random(20, 780), randomSize, randomSize, world, 0.8, 0.8));

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


  endGame() {
    if (this.emotionsAreReady == false) {
      if (this.heart.life1 && this.heart.life2 && this.heart.life3 && this.heart.life4) {
        this.gameFailed = true
      }
    }
  }

  // deleteGrounds() {
  //   if (keyIsDown(32)) {
  //     this.removeGround();
  //   }
  // }

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
          this.heart.x1 = 2000;
          // LINE
          // this.lifeLine();
        } else if (this.touchesHeart(this.heart.x2, this.heart.y2)) {
          this.heart.life2 = true;
          this.heart.x2 = 2000;
          // LINE
          // this.lifeLine();
        } else if (this.touchesHeart(this.heart.x3, this.heart.y3)) {
          this.heart.life3 = true;
          this.heart.x3 = 2000;
          // LINE
          // this.lifeLine();
        } else if (this.touchesHeart(this.heart.x4, this.heart.y4)) {
          this.heart.life4 = true;
          this.heart.x4 = 2000;
          // LINE
        }
      }
    }
  }

  displaySam() {
    push();
    imageMode(CENTER);
    image(this.sam.image, this.sam.x, this.sam.y)
    pop();
  }

  gainPoints() {
    for (let i = 0; i < emotions.length; i++) {
      if (this.emotionsAreReady == false) {
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
    depressionPoints = this.basicPoints;
    push();
    textAlign(CENTER, CENTER);
    textSize(200);
    fill(0);
    textFont(ibmFONT);
    text(this.basicPoints, 400, 300);
    pop();
    if (this.grievingPointsTitle) {
      push();
      textAlign(CENTER, CENTER);
      textSize(30);
      fill(0);
      textFont(ibmFONTTypewriter);
      text('Grieving Points', 400, 500);
      pop();
    }
  }

  addFinalPoints() {
    if (this.basicPoints <= this.addedPoints) {
      this.basicPoints = this.basicPoints + 100
      if (!pointsSFX.isPlaying()) {
        pointsSFX.play();

    }} else {
      this.basicPoints = this.basicPoints
      this.grievingPointsTitle = true;
      pointsSFX.stop();
      setTimeout(() => {
        this.background3Appear = true;
      }, 3000);
    }
  }
  displayEarnedPoints() {
    this.pointsAlpha = constrain(this.pointsAlpha, 0, 255);
    push();
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(30, 30, 30, this.pointsAlpha);
    textFont(ibmFONTTypewriter);
    text('+100', 400, 400);
    this.pointsAlpha = this.pointsAlpha - 4;
    pop();
  }



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

  displayDeadRoseEnd() {
    push();
    imageMode(CENTER);
    image(this.deadRose.img2, this.deadRose.x2, this.deadRose.y2);
    pop();
  }



  lifeLine() {
    this.lifeRect.w = constrain(this.lifeRect.w, 0, width)
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
    this.lifeRect.w += 50;
  }

  success() {
    if (this.lifeRect.w < 0) {
      this.feelingEmotions = false;
      this.death.speed = 0;
      this.lifeLineIsThere = false;
      setTimeout(() => {
        this.background2Appear = true;
        denialSONG.stop();
        this.playTime == false;
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
    fill(30, 30, 30);
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

  // displayDeath(x,y) {
  //   push();
  //   imageMode(CENTER);
  //   image(this.death.gif, x, y)
  //   pop();
  // }

  displayHearts() {
    push();
    imageMode(CENTER);
    image(this.heart.img, this.heart.x1, this.heart.y1)
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

  keyTyped(){

  }
  keyPressed(){

  }
  mouseReleased(){

  }

  mouseDragged() {
    if (this.canPlay) {
      this.addedPoints = this.addedPoints + 5;
    }
    // if (this.worm.collision(400, 400)) {
    //   console.log('collision')
    //   if (frameCount % 4 === 0) {
    //   //  gruntSFX.amp(0.1)
    //   //  gruntSFX.play();
    //     this.lifeRect.w -= 10;
    //     this.addedPoints = this.addedPoints + 100;
    //     console.log(this.lifeRect.w)
    //   };
    //   this.lifeLine();
    // }
    //  console.log(grounds[0].body)
    // for (let i = 0; i < grounds.length; i++) {
    //   if(this.worm.groundCollision(grounds[i])){
    //     if (frameCount % 4 === 0) {
    //      //  gruntSFX.amp(0.1)
    //      //  gruntSFX.play();
    //        this.lifeRect.w -= 50;
    //        this.addedPoints = this.addedPoints + 100;
    //        console.log(this.lifeRect.w)
    //      };
    //      this.lifeLine();
    //   };
    // }
  }



  mousePressed() {
    if (mouseX > this.hint.x - this.rectHint.w / 2 &&
      mouseX < this.hint.x + this.rectHint.w / 2 &&
      mouseY > this.hint.y - this.rectHint.h / 2 &&
      mouseY < this.hint.y + this.rectHint.h / 2) {
      // opens the pop up
      this.hint1found = true;

      if (this.hint1found && this.clickable) {
        this.hint.text = 'want'
        this.hint1found = false;
        this.answertext1 = true;
        impactSFX.play();
        setTimeout(() => {
          this.hint2found = true;
        }, 200);
      }
      if (this.hint2found && this.clickable) {
        this.hint.text = 'to';
        this.answertext2 = true;
        impactSFX.play();

        setTimeout(() => {
          this.hint3found = true;
        }, 200);
      }
      if (this.hint3found && this.clickable) {
        this.hint.text = 'be';
        this.answertext3 = true;
        impactSFX.play();

        setTimeout(() => {
          this.hint4found = true;
        }, 200);
      }
      if (this.hint4found && this.clickable) {
        this.hint.text = 'free';
        this.answertext4 = true;
        impactSFX.play();

        setTimeout(() => {
          this.hint5found = true;
        }, 200);
      }
      if (this.hint5found && this.clickable) {
        this.depressionOver = true;
        this.clickable = false;
        impactSFX.play();
        this.answertext5 = true;
        depressionSFX.stop();
        depressionBlocksSFX.stop();
        deepSFX.play();
        windSFX.stop();
        thunderSFX.play();
      }
    }



  }
}
