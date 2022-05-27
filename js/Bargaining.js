class Bargaining {
  constructor(liveRosePNG, deathIMG) {

    this.typewriter = new Typewriter();

    this.backgroundColor = {
      h: 305,
      s: 34.8,
      l: 90,
      alpha: 0
    }

    this.death = {
      img: deathIMG,
      x: 400,
      y: 80,
      speed: 0.2,
      vy: 0
    }

    this.liveRose = {
      img: liveRosePNG,
      x: 400,
      y: 720,
    }

    this.upperRect = {
      x: 400,
      y: 300,
      w: 800,
      h: 80
    }

    this.lowerRect = {
      x: 400,
      y: 580,
      w: 800,
      h: 500
    }

    this.answerPlacement = {
      d: {
        x: 200,
        y: 150
      },
      e: {
        x: 300,
        y: 150
      },
      a: {
        x: 400,
        y: 150
      },
      t: {
        x: 500,
        y: 150
      },
      h: {
        x: 600,
        y: 150
      }
    }

    this.displayAnswerPlacementAppear = true;;
    this.instructionsAlpha = 255;
    // grounds.push(new Ground(400, 800, 800, 100, world, 0, 30, 30, 30));
    // tunnel grounds
    // grounds.push(new Ground(this.lowerRect.x, this.lowerRect.y, this.upperRect.w, this.upperRect.h, world, 0, 30, 30, 30));
    grounds.push(new Ground(400, 800, 800, 100, world, 0, 30, 30, 30));

    this.letterD = new Emotions(670, 200, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterE = new Emotions(200, 150, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterA = new Emotions(570, 290, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterT = new Emotions(120, 180, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterH = new Emotions(400, 100, 100, 100, world, 1, 0, false, 0, 100, 100);

    emotions.push(this.letterD);
    emotions.push(this.letterE);
    emotions.push(this.letterA);
    emotions.push(this.letterT);
    emotions.push(this.letterH);


    bargainingSONG.loop();

    this.instructionsAppear = false;
    this.instructions = undefined;

    this.instructions1 = false;
    this.instructions2 = false;
    this.instructions3 = false;
    this.instructions4 = false;

    // INSTRUCTIONS
    setTimeout(() => {
      this.instructions1 = true;
      this.instructionsAppear = true;
    }, 2000);
  }

  update() {
    this.display();
    this.moveDeath();

    if (this.instructions1) {
      this.instructions = 'Press space bar'
    }

    if (this.death.y > 700){
      this.deathEatsHeart();

    }
    // this.groundBorders();
    // this.obstacles();
    // this.displayDeathLetters();


  };

  display() {
    this.background();
    this.displayTunnel();
    this.displayDeath();
    this.displayLiveRose();
    if (this.instructionsAppear) {
      this.displayIntructions();
    }
  };

  moveDeath() {
    this.death.y = this.death.y += this.death.vy;
    this.death.vy = this.death.speed;
  };

  displayDeath() {
    push();
    imageMode(CENTER);
    image(this.death.img, this.death.x, this.death.y)
    pop();

  };

  obstacles() {
    for (let i = 0; i < emotions.length; i++) {
      emotions[i].update();
    }
  };


  groundBorders() {
    for (let i = 0; i < grounds.length; i++) {
      grounds[i].update();
    }
  };

  displayLiveRose() {
    push();
    imageMode(CENTER);
    image(this.liveRose.img, this.liveRose.x, this.liveRose.y);
    pop();
  };

  displayTunnel() {
    push();
    noStroke();
    fill(0, 0, 0, 0)
    rectMode(CENTER)
    rect(this.upperRect.x, this.upperRect.y, this.upperRect.w, this.upperRect.h);
    pop();
  };

  mouseDragged() {};

  mousePressed() {};

  displayDeathLetters() {
    push();
    textAlign(CENTER, CENTER);
    textSize(100);
    fill(0, 0, 0);
    textFont(ibmFONT);
    text('D', this.letterD.body.position.x, this.letterD.body.position.y - 14);
    text('E', this.letterE.body.position.x, this.letterE.body.position.y - 14);
    text('A', this.letterA.body.position.x, this.letterA.body.position.y - 14);
    text('T', this.letterT.body.position.x, this.letterT.body.position.y - 14);
    text('H', this.letterH.body.position.x, this.letterH.body.position.y - 14);
    pop();
  };

  lettersBecomeStatic(x1, y1, x2, y2) {
    let d = dist(x1, y1, x2, y2);
    if (d < 1) {
      return true;
    }
  }

  displayAnswerPlacement() {
    push();
    rectMode(CENTER)
    strokeHsluv(0, 100, 100);
    fill(0, 0, 0, 0)
    rect(this.answerPlacement.d.x, this.answerPlacement.d.y, 100, 100)
    rect(this.answerPlacement.e.x, this.answerPlacement.e.y, 100, 100)
    rect(this.answerPlacement.a.x, this.answerPlacement.a.y, 100, 100)
    rect(this.answerPlacement.t.x, this.answerPlacement.t.y, 100, 100)
    rect(this.answerPlacement.h.x, this.answerPlacement.h.y, 100, 100)
    pop();
  }

  togglePopUp() {
    this.instructionsAppear = true;
    setTimeout(() => {
      // this.instructionsAppear = false;

    }, 1000);
  }

  deathEatsHeart(){
    bargainingSONG.stop();
    this.death.speed = 0;
    currentState = new BargainingEnd();

  }

  displayIntructions() {
    push();
    // push();
    // fill(0);
    // rectMode(CENTER);
    // rect(400,380,400,50);
    // pop();
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(220, 220, 220);
    textFont(ibmFONTTypewriter);
    text(this.instructions, 400, 380);

    // this.instructionsAlpha = this.instructionsAlpha - 4;
    pop();
  }

  background() {
    push();
    imageMode(CORNER);
    image(bargainingBG, 0, 0);
    pop();
  };

  mousePressed() {}
  keyTyped(){

  }

  mouseReleased(){

  }
  keyPressed() {
    if (keyIsDown(32) && this.instructions1) {
      this.instructionsAppear = false;
      this.instructions1 = false;
      setTimeout(() => {
        this.instructionsAppear = true;
        this.instructions2 = true;
        this.instructions = 'Press enter'
      }, 4000);
    }
    if (keyIsDown(13) && this.instructions2) {
      this.instructionsAppear = false;
      this.instructions2 = false;
      setTimeout(() => {
        this.instructionsAppear = true;
        this.instructions3 = true;
        this.instructions = 'Press escape'
      }, 4000);
    }
    if (keyIsDown(27) && this.instructions3) {
      this.instructionsAppear = false;
      this.instructions3 = false;
      setTimeout(() => {
        this.instructionsAppear = true;
        this.instructions4 = true;
        this.instructions = 'Press the "L" key'
      }, 7000);

    }
    if (keyIsDown(76) && this.instructions4) {
      console.log('elle')
      this.instructionsAppear = false;
      this.instructions4 = false;
      setTimeout(() => {
        this.instructionsAppear = true;
        this.instructions5 = true;
        this.instructions = 'Press the "A" key'
      }, 4000);
    }
    if (keyIsDown(65) && this.instructions5) {
      this.instructionsAppear = false;
      this.instructions5 = false;
      setTimeout(() => {
        this.instructionsAppear = true;
        this.instructions6 = true;
        this.instructions = 'Press the down arrow'
      }, 4000);
    }
    if (keyIsDown(40) && this.instructions6) {
      this.instructionsAppear = false;
      this.instructions6 = false;
  }
}
};
