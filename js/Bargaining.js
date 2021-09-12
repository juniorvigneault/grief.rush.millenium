class Bargaining {
  constructor(liveRosePNG, deathIMG) {

    this.backgroundColor = {
      h: 305,
      s: 34.8,
      l: 90,
      alpha: 0
    }

    this.death = {
      img: deathIMG,
      x: 80,
      y: 300,
      speed: 0.2,
      vx: 0
    }

    this.liveRose = {
      img: liveRosePNG,
      x: 750,
      y: 300,
    }

    this.upperRect = {
      x: 400,
      y: 70,
      w: 800,
      h: 400
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

    // grounds.push(new Ground(400, 800, 800, 100, world, 0, 30, 30, 30));
    // tunnel grounds
    // grounds.push(new Ground(this.lowerRect.x, this.lowerRect.y, this.upperRect.w, this.upperRect.h, world, 0, 30, 30, 30));
    grounds.push(new Ground(400, 800, 800, 100, world, 0, 30, 30, 30));

    this.letterD = new Emotions(670, 200, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterE = new Emotions(200, 150, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterA = new Emotions(570, 290, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterT = new Emotions(120, 180, 100, 100, world, 1, 0, false, 0, 100, 100);
    this.letterH = new Emotions(400, 100, 100, 100, world, 1, 0, false, 0, 100, 100);

    console.log(this.letterD)

    emotions.push(this.letterD);
    emotions.push(this.letterE);
    emotions.push(this.letterA);
    emotions.push(this.letterT);
    emotions.push(this.letterH);


    canvasMouse = Mouse.create(canvas.elt);

    // canvasMouse.pixelRatio = pixelDensity();

    let options = {
      mouse: canvasMouse
    };

    mConstraint = MouseConstraint.create(engine, options);

    World.add(world, mConstraint);


  }

  update() {
    this.display();
    this.moveDeath();


    this.groundBorders();
    this.obstacles();
    this.displayDeathLetters();

    if (this.displayAnswerPlacementAppear) {
      this.displayAnswerPlacement();
    }

    // Letter D
    if (this.lettersBecomeStatic(this.letterD.body.position.x, this.letterD.body.position.y, this.answerPlacement.d.x, this.answerPlacement.d.y)) {
      this.letterD.body.isStatic = true;
    }

    // Letter E
    if (this.lettersBecomeStatic(this.letterE.body.position.x, this.letterE.body.position.y, this.answerPlacement.e.x, this.answerPlacement.e.y)) {
      this.letterE.body.isStatic = true;
    }

    // Letter A
    if (this.lettersBecomeStatic(this.letterA.body.position.x, this.letterA.body.position.y, this.answerPlacement.a.x, this.answerPlacement.a.y)) {
      this.letterA.body.isStatic = true;
    }
    // Letter T
    if (this.lettersBecomeStatic(this.letterT.body.position.x, this.letterT.body.position.y, this.answerPlacement.t.x, this.answerPlacement.t.y)) {
      this.letterT.body.isStatic = true;
    }

    // Letter H
    if (this.lettersBecomeStatic(this.letterH.body.position.x, this.letterH.body.position.y, this.answerPlacement.h.x, this.answerPlacement.h.y)) {
      this.letterH.body.isStatic = true;
    }

    if (this.letterD.body.isStatic && this.letterE.body.isStatic && this.letterA.body.isStatic && this.letterT.body.isStatic && this.letterH.body.isStatic) {
      console.log('ANSWER');
    }
  };

  display() {
    this.background();
    this.displayDeath();
    this.displayLiveRose();
    this.displayTunnel();
  };

  moveDeath() {
    this.death.x = this.death.x += this.death.vx;
    this.death.vx = this.death.speed;
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
    fill(30)
    rectMode(CENTER)
    rect(this.upperRect.x, this.upperRect.y, this.upperRect.w, this.upperRect.h);
    rect(this.lowerRect.x, this.lowerRect.y, this.lowerRect.w, this.lowerRect.h);
    pop();
  };

  mouseDragged() {

  };
  mousePressed() {

  };

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


  background() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.l)
    rect(400, 400, 800, 800)
    pop();
  };
};
