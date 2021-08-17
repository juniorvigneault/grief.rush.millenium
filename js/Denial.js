class Denial {
  constructor() {

    this.denialText = {
      string: `DENIAL`,
      size: 120,
      x: 400,
      y: 350,
      vx: 0,
      vy: 0,
      speed: -5,
      finaleX: -800
    };

    this.denialAppear = true;

    setTimeout(() => {
      this.denialAppear = false;
    }, 2000);
  }


  update() {
    this.display();
    // this.moveText();
  }

  display() {
    this.background();

    if (this.denialAppear) {
      this.denialTitle();
    }

  }


  denialTitle() {
    push();
    textFont(obrigeFONT);
    textAlign(CENTER, CENTER);
    textSize(this.denialText.size);
    text(this.denialText.string, this.denialText.x, this.denialText.y)
    pop();
  }

  background() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(305, 34.8, 90)
    rect(400, 400, 800, 800)
    pop();
  }


}
