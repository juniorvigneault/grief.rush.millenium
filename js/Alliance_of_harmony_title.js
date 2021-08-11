class Alliance_of_harmony_title {

  constructor() {
    this.text = {
      alliance: {
        string: `Alliance`,
        size: 75,
        x: 300,
        y: -100,
        vx: 0,
        vy: 0,
        speed: .75,
        finaleY: 200
      },
      of: {
        string: `of`,
        size: 75,
        x: 1500,
        y: 310,
        vx: 0,
        vy: 0,
        speed: -3.4,
        finaleX: 145
      },
      harmony: {
        string: `Harmony`,
        size: 150,
        x: 580,
        y: 900,
        vx: 0,
        vy: 0,
        speed: -1.14,
        finaleY: 450
      },
      play: {
        x: 650,
        y: 900,
        string: `play`,
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
        speed: -1.3,
        finaleY: 680
      }
    }

    this.fade = new Fade(255, 1, true, false);

    this.displayPlay = false;

    setTimeout(() => {
      this.displayPlay = true;
    }, 5500);
  }





  update() {
    if (this.displayPlay) {
      this.movePlayText();
      this.displayPlayText(this.text.play.size, this.text.play.string, this.text.play.x, this.text.play.y, this.text.play.color);
    }
    this.display();
    this.moveAllianceText();
    this.moveOfText();
    this.moveHarmonyText();
    this.mouseOverPlayText();
    this.fade.update();


  }

  display() {
    push();
    textAlign(CENTER, CENTER)
    textSize(this.text.alliance.size);
    textFont(obrigeFONT);
    text(this.text.alliance.string, this.text.alliance.x, this.text.alliance.y)
    text(this.text.of.string, this.text.of.x, this.text.of.y)
    textSize(this.text.harmony.size);
    text(this.text.harmony.string, this.text.harmony.x, this.text.harmony.y);
  }

  displayPlayText(size, string, x, y, color = {
    r: 0,
    g: 0,
    b: 0
  }) {
    push();
    textFont('Futura')
    fill(color.r, color.g, color.b)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
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
      startColor = this.text.play.mouseOverColor;
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
      console.log('PLAY');
      setTimeout(() => {
        currentState = new Loading(loadingCircle);
        introSFX.stop();
        introSFX2.stop();

      }, 3000);

    }
  }
}
