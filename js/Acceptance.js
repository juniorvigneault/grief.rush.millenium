class Acceptance {
  constructor() {


    this.passcode = '4475'
    this.correct = undefined;
    this.currentInput = ``;
    birdsSFX.loop();

    this.rectHint = {
      x: 0,
      y: 0,
      w: 100,
      h: 50
    }

    this.notRightCombination = true;
    this.keySound = true;
    this.key = {
      x: 400,
      y: 600
    }
    this.clickable2 = true;
    this.clickable3 = true;
    this.clickable4 = true;
    this.lastSam = false;
    this.numbers = {
      w: 30,
      h: 30,
      x: 347,
      y: 230,
      x2: 400,
      y2: 230,
      x3: 450,
      y3: 230,
      x4: 347,
      y4: 275,
      x5: 400,
      y5: 275,
      x6: 450,
      y6: 275,
      x7: 347,
      y7: 325,
      x8: 400,
      y8: 325,
      x9: 450,
      y9: 325,
      x10: 400,
      y10: 375
    }

    // this.codeEntered = [];
    this.codeEntered = '';

    this.hint = {
      text: 'I',
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      speed: 10,
      text: 'I',
      size: 32
    }

    this.pendant = {
      x: 100,
      y: 630
    }

    this.book = {
      x: 300,
      y: 630
    }

    this.lamp = {
      x: 500,
      y: 630
    }

    this.hat = {
      x: 700,
      y: 630
    }

    this.numbersEntered = 0;

    this.typewriter = new Typewriter();

    engine.world.gravity.scale = 0.00001;
    //  depressionSONG.amp(0.1);
    //  depressionSONG.loop();
    this.gameTime = 0;
    this.textColorLight = 220;

    this.denialText = {
      string: `ACCEPTANCE`,
      size: 100,
      x: 400,
      y: 130,
      vx: 0,
      vy: 0,
      speed: 5,
      finaleY: 130
    };

    this.level1Text = {
      string: `FINAL LEVEL`,
      size: 100,
      x: 400,
      y: -550,
      vx: 0,
      vy: 0,
      speed: 5,
      finaleY: 130
    };

    this.safe = {
      x: this.level1Text.x,
      y: this.level1Text.y
    }

    this.door = {
      x: 400,
      y: 300
    }

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

    this.keyCursor = false;

    this.playTime = false;
    this.goodPassword = false;


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
    this.clickable = true;
    this.passcodeFound = false;
    this.keyAppear = false;
    this.backgroundEnd = false;
    // create ragdoll

    setTimeout(() => {
      // bell1SFX.amp(0.5);
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

    // grounds.push(new Ground(0, 0, 1600, 50, world, 0, 0, 200, 0, 0));
    // grounds.push(new Ground(0, 300, 1600, 50, world, 1.574, 0, 0, 200, 0));
    // grounds.push(new Ground(800, 200, 50, 1600, world, 3.14, 0, 0, 200, 0));
    //  grounds.push(new Ground(800, 800, 50, 1600, world, 1.57, 0, 0, 200, 200));

    // this.worm = new ParticleObject(400, 200);
    // particleObjects.push(new ParticleObject(100, 200));
    // particleObjects.push(this.worm)
    emotions.push(new Emotions(100, 100, 25, 25, world, 0.8, 0.8));
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
      // console.log(this.numbersEntered)
      this.background();
      if (this.passcodeFound == false) {
        this.displaySafeAndObjects();
        this.enterPassword();
      }
      //for (let i = 0; i < particleObjects.length; i++) {
      //    particleObjects[i].display();
      //console.log(particleObjects[i])
      // this.displayDeath(particleObjects[i].particles[0].body.position.x,particleObjects[i].particles[0].body.position.y)
      //    }

      // this.removeHeart();
      // this.endGame();
      // this.displayHearts();
      // this.moveDeath();
      this.displayNumbersRect();
      this.displayCode();

      //    this.deleteGrounds();
      if (this.displayPendant) {
        this.displayBigPendant();
      }

      if (this.displayBook) {
        this.displayBigBook();
      }

      if (this.displayLamp) {
        this.displayBigLamp();
      }

      if (this.displayHat) {
        this.displayBigHat();
      }

      push();
      // this.correct = this.checkInput();
      // console.log(this.codeEntered)
      // console.log(this.combination)
      this.combination = '4 4 7 5 '
      if (this.codeEntered === this.combination) {
        this.goodPassword = true;
        this.notRightCombination = false;
        this.clickable4 = false;
        if (!unlockSFX.isPlaying()) {
          unlockSFX.play();
          setTimeout(() => {
            this.soundOff = true;
          }, 1000);
        }
        setTimeout(() => {
          this.passcodeFound = true;
          this.keyAppear = true;
          this.goodPassword = false;
        }, 1500);
        if (this.soundOff) {
          unlockSFX.stop();
        }
      }

      pop();

      if (this.keyAppear) {
        if (this.keyCursor) {
          this.key.x = mouseX;
          this.key.y = mouseY;
          push();
          imageMode(CENTER, CENTER);
          image(doorIMG, this.door.x, this.door.y)
          pop();
        }
        push();
        imageMode(CENTER);
        image(keyIMG, this.key.x, this.key.y)
        pop();

      }
      if (this.backgroundEnd) {
        this.backgroundEndAppear();
      }

      this.success();
      this.playTime = true;

      // if (this.winsBasicPoints) {
      //   this.displayEarnedPoints();
      // }
      // draw the ground



      if (this.numbersEntered == 4) {
        this.clickable2 = false;
        if(this.notRightCombination){
        this.soundOff = false;
        if (!noEnterSFX.isPlaying()) {
          noEnterSFX.play();
          setTimeout(() => {
            this.soundOff = true;
          }, 30);
        }
        if (this.soundOff) {
          noEnterSFX.stop();
        }
      }
        setTimeout(() => {
          this.codeEntered = '';
          this.numbersEntered = 0
          this.clickable2 = true;
        }, 500);

      }

      //    for (let i = 0; i < grounds.length; i++) {
      //      grounds[i].update();
      //    }
      if (this.samIsThere) {
        // this.displaySam();
      }

      //    this.emotionsDrop();

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
              currentState = new Meeting_Sam2(samIMG, arrowGIF, bigSam)
            }, 6000);
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

      if (this.win) {
        this.displayFinalPoints();
      }

      if (this.addPoints) {
        this.addFinalPoints();
      }

      if (this.background3Appear) {
        this.background3();
        this.displayGrewToLevel2();
        // this.displayDeadRoseEnd();
        if (this.toddlerGrieverAppear) {
          this.displayToddlerGriever();
        }

        if (this.endFade) {

        }



        setTimeout(() => {
          currentState = new Main_Level_Page_3(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
        }, 7000);
        setTimeout(() => {
          this.finalFade = true;
        }, 3000);



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
        imageMode(CORNER)
        image(acceptanceBG, 0, 0);
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
        imageMode(CORNER)
        image(acceptanceBG, 0, 0);
        pop();

        push();
        imageMode(CENTER);
        image(hatPNG, 400, 300);
        pop();
        push();
        fill(this.textColorLight)
        textAlign(CENTER, CENTER);
        textFont(ibmFONTTypewriter);
        textSize(25);
        text('A blue festive glitter hat', 400, 500);
        text('was added to your inventory', 400, 550);
        pop();

        setTimeout(() => {
          currentState = new Main_Level_Page_3(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
        }, 7000);
        setTimeout(() => {
          this.finalFade = true;
        }, 3000);


      }
    }
    if (this.finalFade) {
      push();
      fill(255, 255, 255, this.whiteFade)
      this.whiteFade = this.whiteFade + 1;
      noStroke();
      rectMode(CORNER);
      rect(0, 0, 800, 800)
      pop();
    }
    if (this.lastSam) {
      currentState = new EndSam(samIMG, arrowGIF, bigSam);
    }
  }

  displayNumbersRect() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255, 0);
    rect(this.numbers.x, this.numbers.y, this.numbers.w, this.numbers.h);
    rect(this.numbers.x2, this.numbers.y2, this.numbers.w, this.numbers.h);
    rect(this.numbers.x3, this.numbers.y3, this.numbers.w, this.numbers.h);
    rect(this.numbers.x4, this.numbers.y4, this.numbers.w, this.numbers.h);
    rect(this.numbers.x5, this.numbers.y5, this.numbers.w, this.numbers.h);
    rect(this.numbers.x6, this.numbers.y6, this.numbers.w, this.numbers.h);
    rect(this.numbers.x7, this.numbers.y7, this.numbers.w, this.numbers.h);
    rect(this.numbers.x8, this.numbers.y8, this.numbers.w, this.numbers.h);
    rect(this.numbers.x9, this.numbers.y9, this.numbers.w, this.numbers.h);
    rect(this.numbers.x10, this.numbers.y10, this.numbers.w, this.numbers.h);

    pop();
  }



  displaySafe() {
    push();
    imageMode(CENTER);
    image(safeIMG, 400, 300);
    pop();
  }

  displayObjects() {
    push();
    imageMode(CENTER);
    image(pendantSmallIMG, this.pendant.x, this.pendant.y)
    image(bookSmallIMG, this.book.x, this.book.y)
    image(lampSmallIMG, this.lamp.x, this.lamp.y)
    image(hatSmallIMG, this.hat.x, this.hat.y)
    pop();
  }

  displayAnswer() {
    push();
    fill(255, 0, 0);
    textSize(50);
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
    // textFont('Impact');

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
    textFont(ibmFONTTypewriter);
    fill(this.textColorLight)
    textAlign(CENTER, CENTER);
    textSize(40);
    text('YOU ARE NOW', 400, 150);
    textFont(ibmFONT);
    textSize(65);
    text('LEVEL 3 :', 400, 300);
    pop();
  }

  displayToddlerGriever() {
    push();
    fill(this.textColorLight)
    textAlign(CENTER, CENTER);
    textFont(ibmFONT);
    textSize(70);
    text('FLEDGLING GRIEVER', 400, 450);
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
    fill(255);
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
    image(acceptanceBG, 0, 0);
    pop();
  }

  background2() {
    push();
    imageMode(CORNER)
    image(acceptanceBG, 0, 0);
    pop();
  }

  background3() {
    push();
    imageMode(CORNER)
    image(acceptanceBG, 0, 0)
    pop();
  }

  backgroundEndAppear() {
    push();
    imageMode(CORNER)
    image(acceptanceBG, 0, 0)
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

    push();
    textAlign(CENTER, CENTER);
    textSize(200);
    fill(255);
    textFont(ibmFONT);
    text(this.basicPoints, 400, 300);
    pop();
    if (this.grievingPointsTitle) {
      push();
      textAlign(CENTER, CENTER);
      textSize(30);
      fill(255);
      textFont(ibmFONTTypewriter);
      text('Grieving Points', 400, 500);
      pop();
    }
  }

  addFinalPoints() {
    if (this.basicPoints <= this.addedPoints) {
      this.basicPoints = this.basicPoints + 100
    } else {
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
    if (this.lifeRect.w == 0) {
      this.feelingEmotions = false;
      this.death.speed = 0;
      this.lifeLineIsThere = false;
      angerSONG.stop();
      this.removeGround();
      if (!hissSFX.isPlaying()) {
        hissSFX.amp(0.1);
        hissSFX.play();
        engine.world.gravity.scale = 0.005;
      }

      setTimeout(() => {
        this.background2Appear = true;
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
    fill(255);
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

  displayCode() {
    push();
    textSize(17);
    fill(150, 40, 40, 250);
    textAlign(LEFT, CENTER);
    text(this.codeEntered, 370, 410);
    pop();

    if (this.goodPassword) {
      push();
      noStroke();
      fill(20, 255, 20, 150)
      ellipseMode(CENTER);
      ellipse(444, 190, 13, 13)
      pop();
    }
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

  mouseDragged() {
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


  // enter password pop up
  enterPassword() {
    this.checkInput();
    this.displayPassword();
  }

  // lower case
  checkInput() {
    let lowerCaseInput = this.currentInput.toLowerCase();

    if (lowerCaseInput === this.passcode) {
      this.clickable = false;
      setTimeout(() => {
        this.passcodeFound = true;
        setTimeout(() => {
          this.keyAppear = true;
        }, 1000);
      }, 1000);
    }
  }


  keyTyped() {
    // this.currentInput += key;
  }

  keyPressed() {
    if (keyCode === BACKSPACE) {
      this.currentInput = ``;
    }
  }

  mouseDragged() {

  }

  mouseReleased(){

  }

  displayPassword() {
    // push();
    // fill(255);
    // textSize(32)
    // textAlign(CENTER, CENTER)
    // text(this.currentInput, 400, 520);
    // pop();
  }

  displaySafeAndObjects() {
    this.displaySafe();
    this.displayObjects();
  }

  displayBigPendant() {
    push();
    noStroke();
    fill(255)
    rectMode(CENTER)
    rect(400, 300, 400, 400)
    imageMode(CENTER);
    image(velvetIMG, 400, 300)
    image(frameIMG, 400, 300)
    image(pendantBigIMG, 400, 300)
    pop();
  }
  displayBigBook() {
    push();
    noStroke();
    fill(10)
    rectMode(CENTER)
    rect(400, 300, 400, 400)
    imageMode(CENTER);
    image(velvetIMG, 400, 300)
    image(frameIMG, 400, 300)
    image(bookBigIMG, 400, 300)
    pop();
  }
  displayBigLamp() {
    push();
    noStroke();
    fill(10)
    rectMode(CENTER)
    rect(400, 300, 400, 400)
    imageMode(CENTER);
    image(velvetIMG, 400, 300)
    image(frameIMG, 400, 300)
    image(lampBigIMG, 400, 300)
    pop();
  }

  displayBigHat() {
    push();
    noStroke();
    fill(10)
    rectMode(CENTER)
    rect(400, 300, 400, 400)
    imageMode(CENTER);
    image(velvetIMG, 400, 300)
    image(frameIMG, 400, 300)
    image(hatBigIMG, 400, 300)
    pop();
  }

  mouseReleased() {
    this.displayPendant = false
    this.clickable = true;
    this.displayBook = false
    this.displayHat = false
    this.displayLamp = false
    console.log('released')
  }

  mousePressed() {


    // console.log(this.codeEntered)
    if (mouseX > this.numbers.x - this.numbers.w / 2 &&
      mouseX < this.numbers.x + this.numbers.w / 2 &&
      mouseY > this.numbers.y - this.numbers.h / 2 &&
      mouseY < this.numbers.y + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('1');
      this.codeEntered = this.codeEntered + '1 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();
    }

    if (mouseX > this.numbers.x2 - this.numbers.w / 2 &&
      mouseX < this.numbers.x2 + this.numbers.w / 2 &&
      mouseY > this.numbers.y2 - this.numbers.h / 2 &&
      mouseY < this.numbers.y2 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('2');
      this.codeEntered = this.codeEntered + '2 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x3 - this.numbers.w / 2 &&
      mouseX < this.numbers.x3 + this.numbers.w / 2 &&
      mouseY > this.numbers.y3 - this.numbers.h / 2 &&
      mouseY < this.numbers.y3 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('3');
      this.codeEntered = this.codeEntered + '3 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x4 - this.numbers.w / 2 &&
      mouseX < this.numbers.x4 + this.numbers.w / 2 &&
      mouseY > this.numbers.y4 - this.numbers.h / 2 &&
      mouseY < this.numbers.y4 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('4');
      this.codeEntered = this.codeEntered + '4 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x5 - this.numbers.w / 2 &&
      mouseX < this.numbers.x5 + this.numbers.w / 2 &&
      mouseY > this.numbers.y5 - this.numbers.h / 2 &&
      mouseY < this.numbers.y5 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('5');
      this.codeEntered = this.codeEntered + '5 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x6 - this.numbers.w / 2 &&
      mouseX < this.numbers.x6 + this.numbers.w / 2 &&
      mouseY > this.numbers.y6 - this.numbers.h / 2 &&
      mouseY < this.numbers.y6 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('6');
      this.codeEntered = this.codeEntered + '6 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x7 - this.numbers.w / 2 &&
      mouseX < this.numbers.x7 + this.numbers.w / 2 &&
      mouseY > this.numbers.y7 - this.numbers.h / 2 &&
      mouseY < this.numbers.y7 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('7');
      this.codeEntered = this.codeEntered + '7 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x8 - this.numbers.w / 2 &&
      mouseX < this.numbers.x8 + this.numbers.w / 2 &&
      mouseY > this.numbers.y8 - this.numbers.h / 2 &&
      mouseY < this.numbers.y8 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('8');
      this.codeEntered = this.codeEntered + '8 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x9 - this.numbers.w / 2 &&
      mouseX < this.numbers.x9 + this.numbers.w / 2 &&
      mouseY > this.numbers.y9 - this.numbers.h / 2 &&
      mouseY < this.numbers.y9 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('9');
      this.codeEntered = this.codeEntered + '9 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }

    if (mouseX > this.numbers.x10 - this.numbers.w / 2 &&
      mouseX < this.numbers.x10 + this.numbers.w / 2 &&
      mouseY > this.numbers.y10 - this.numbers.h / 2 &&
      mouseY < this.numbers.y10 + this.numbers.h / 2 &&
      this.clickable && this.clickable2 && this.clickable3) {
      // this.codeEntered.push('0');
      this.codeEntered = this.codeEntered + '0 ';
      this.numbersEntered = this.numbersEntered + 1;
      bipSFX.play();

    }



    if (mouseX > this.pendant.x - pendantSmallIMG.width / 2 &&
      mouseX < this.pendant.x + pendantSmallIMG.width / 2 &&
      mouseY > this.pendant.y - pendantSmallIMG.height / 2 &&
      mouseY < this.pendant.y + pendantSmallIMG.height / 2 &&
      this.clickable && this.clickable4) {
      console.log('pendant')
      frameSFX.play();
      this.displayPendant = true;
      this.clickable = false;
    }

    if (mouseX > this.book.x - bookSmallIMG.width / 2 &&
      mouseX < this.book.x + bookSmallIMG.width / 2 &&
      mouseY > this.book.y - bookSmallIMG.height / 2 &&
      mouseY < this.book.y + bookSmallIMG.height / 2 &&
      this.clickable && this.clickable4) {
      console.log('book')
      frameSFX.play();
      this.displayBook = true;
      this.clickable = false;

    }

    if (mouseX > this.lamp.x - lampSmallIMG.width / 2 &&
      mouseX < this.lamp.x + lampSmallIMG.width / 2 &&
      mouseY > this.lamp.y - lampSmallIMG.height / 2 &&
      mouseY < this.lamp.y + lampSmallIMG.height / 2 &&
      this.clickable && this.clickable4) {
      console.log('lamp')
      frameSFX.play();
      this.displayLamp = true;
      this.clickable = false;

    }

    if (mouseX > this.hat.x - hatSmallIMG.width / 2 &&
      mouseX < this.hat.x + hatSmallIMG.width / 2 &&
      mouseY > this.hat.y - hatSmallIMG.height / 2 &&
      mouseY < this.hat.y + hatSmallIMG.height / 2 &&
      this.clickable && this.clickable4) {
      console.log('hat')
      frameSFX.play();
      this.displayHat = true;
      this.clickable = false;
    }

    if (mouseX > this.key.x - keyIMG.width / 2 &&
      mouseX < this.key.x + keyIMG.width / 2 &&
      mouseY > this.key.y - keyIMG.height / 2 &&
      mouseY < this.key.y + keyIMG.height / 2 &&
      this.keyAppear) {
      this.keyCursor = true;
      if(this.keySound){
      keySFX.play();
      this.keySound = false;
    }
    }

    if (mouseX > this.door.x - doorIMG.width / 2 &&
      mouseX < this.door.x + doorIMG.width / 2 &&
      mouseY > this.door.y - doorIMG.height / 2 &&
      mouseY < this.door.y + doorIMG.height / 2 &&
      this.keyCursor & this.clickable3) {
      this.clickable3 = false;
      this.clickable2 = false;
      doorSFX.play();
      birdsSFX.stop();
      setTimeout(() => {
        angelSFX.play();

      }, 800);
      setTimeout(() => {
        this.lastSam = true;
      }, 1000);
    }
  }
}
