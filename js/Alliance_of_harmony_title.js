class Alliance_of_harmony_title {

  constructor(heartIMG, smallDeathIMG) {
    this.text = {
      alliance: {
        string: `ALLIANCE`,
        size: 70,
        x: 360,
        y: -100,
        vx: 0,
        vy: 0,
        speed: .90,
        finaleY: 200
      },
      of: {
        string: `OF`,
        size: 30,
        x: 1500,
        y: 310,
        vx: 0,
        vy: 0,
        speed: -3.3,
        finaleX: 400
      },
      harmony: {
        string: `HARMONY`,
        size: 75,
        x: 410,
        y: 900,
        vx: 0,
        vy: 0,
        speed: -1.55,
        finaleY: 390
      },
      play: {
        x: 400,
        y: 900,
        string: `PLAY`,
        size: 40,
        vy: 0,
        speed: -.5,
        stop: 0,
        mouseOverColor: {
          r: 255,
          g: 0,
          b: 0
        },
        color: 0,
        vx: 0,
        vy: 0,
        speed: -1.5,
        finaleY: 680,
        alpha: undefined
      }
    }

    this.heart = {
      img: heartIMG,
      img2: heartIMG,
      x: 200,
      y: 310,
      x2: 600,
      y2: 310,
      appear: false
    }

    this.sloganColor = 0;
    this.sloganAppear = false;

    this.fade = new Fade(255, 2, true, false, 255, 255, 255);
    this.fade2 = new Fade(0, 1, false, true, 255, 255, 255)
    this.fade2Appear = false;


    this.displayPlay = false;

    this.rectWidth = 30;
    this.rectHeight = 30;

    setTimeout(() => {
      this.displayPlay = true;
      this.sloganAppear = true;
    }, 5500);

    this.smallHeart = {
      img: heartIMG,
      img2: heartIMG,
      x: 300,
      y: 675,
      x2: 500,
      y2: 675,
      appear: false
    }

    this.smallDeath = {
      img: smallDeathIMG,
      x: 400,
      y: 100,
      appear: false
    }
}

  update() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(305, 34.8, 90)
    rect(400, 400, 800, 800)
    pop();

    if (this.displayPlay) {
      this.movePlayText();
    }

    if(this.flashPlayOn){
      this.displayPlayText(this.text.play.size, this.text.play.string, this.text.play.x, this.text.play.y, this.text.play.color);
    }

    this.display();
    this.moveAllianceText();
    this.moveOfText();
    this.moveHarmonyText();
    this.mouseOverPlayText();
    this.fade.update();
    if (this.fade2Appear) {
      this.fade2.update();
    }

  }

  display() {
    push();
    textFont(obrigeFONT);
    textAlign(CENTER, CENTER);
    textSize(this.text.alliance.size);
    text(this.text.alliance.string, this.text.alliance.x, this.text.alliance.y)
    pop();

    push();
    textFont(obrigeFONT);
    textAlign(CENTER, CENTER);
    textSize(this.text.of.size);
    text(this.text.of.string, this.text.of.x, this.text.of.y)
    pop();

    push();
    textFont(obrigeFONT);
    textAlign(CENTER, CENTER);
    textSize(this.text.harmony.size);
    text(this.text.harmony.string, this.text.harmony.x, this.text.harmony.y);
    pop();

    push();
    if (this.sloganAppear) {
      this.sloganColor = this.sloganColor + 1;
      this.heart.appear = true;
      textFont(ibmFONTTypewriter);
      textAlign(CENTER, CENTER);
      textSize(15);
      fill(0, 0, 0, this.sloganColor)
      text(`The Grieving Experience`, 400, 520);
      pop();
    }

    if (this.heart.appear) {
      this.displayPlayHearts()
      this.smallDeath.appear = true;
    }

    if (this.smallHeart.appear) {
      push();
      imageMode(CENTER);
      image(this.smallHeart.img, this.smallHeart.x, this.smallHeart.y)
      image(this.smallHeart.img2, this.smallHeart.x2, this.smallHeart.y2)
      pop();
      console.log(this.heart.appear)
    }

    if(this.smallDeath.appear){
      push();
      imageMode(CENTER);
      image(this.smallDeath.img, this.smallDeath.x, this.smallDeath.y);
      pop();
    }
  }


  displayPlayText(size, string, x, y, color = {
    r: 0,
    g: 0,
    b: 0
  }) {
    push();
    textFont('ibmFONTTypewriter')
    fill(color.r, color.g, color.b)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
  }

  displayPlayHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img, this.heart.x, this.heart.y)
    image(this.heart.img2, this.heart.x2, this.heart.y2)
    pop();
  }


  moveAllianceText() {
    this.text.alliance.y = this.text.alliance.y += this.text.alliance.vy;

    if (this.text.alliance.y > this.text.alliance.finaleY) {
      this.text.alliance.vy = 0;
    } else {
      this.text.alliance.vy = this.text.alliance.speed;
    }
  }

  // check if the user's mouse is over text
  mouseIsOverText(size, string, x, y) {
    textSize(size);
    let w = textWidth(string);
    let h = textAscent();
    // if mouse is over text
    if (mouseX > x - w / 2 &&
      mouseX < x + w / 2 &&
      mouseY > y - h / 2 &&
      mouseY < y + h / 2) {
      return true;
    } else {
      return false;
    }
  }

  // turns the start button red if mouse is over
  mouseOverPlayText() {
    let startColor = {
      r: 0,
      g: 0,
      b: 0
    };

    if (this.mouseIsOverText(this.text.play.size, this.text.play.string, this.text.play.x, this.text.play.y)) {
      this.smallHeart.appear = true;
    } else {
      this.smallHeart.appear = false;
    }


    this.displayPlayText(this.text.play.size, this.text.play.string, this.text.play.x, this.text.play.y, startColor);

  }

  moveOfText() {
    this.text.of.x = this.text.of.x += this.text.of.vx;

    if (this.text.of.x < this.text.of.finaleX) {
      this.text.of.vx = 0;
    } else {
      this.text.of.vx = this.text.of.speed;
    }
  }

  movePlayText() {
    this.text.play.y = this.text.play.y += this.text.play.vy;

    if (this.text.play.y < this.text.play.finaleY) {
      this.text.play.vy = 0;
    } else {
      this.text.play.vy = this.text.play.speed;
    }
  }

  moveHarmonyText() {
    this.text.harmony.y = this.text.harmony.y += this.text.harmony.vy;

    if (this.text.harmony.y < this.text.harmony.finaleY) {
      this.text.harmony.vy = 0;
    } else {
      this.text.harmony.vy = this.text.harmony.speed;
    }
  }

  mousePressed() {
    if (this.mouseIsOverText(this.text.play.size, this.text.play.string, this.text.play.x, this.text.play.y)) {
      this.fade2Appear = true;
      setTimeout(() => {
        currentState = new Ten_seconds_title(deadRosePNG);
        introSFX.stop();
        introSFX2.stop();
      }, 5000);

    }
  }
}
