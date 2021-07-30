class Alliance_of_harmony_title {

  constructor(flowersPNG) {
    // PNG for the title
    // flowers at the bottom
    this.flowersPNG = flowersPNG;


    // display grid to design stuff
    this.grid = false;

    // white rectangle on top of the title to create a fade in / out
    this.fade = true;
    this.fadeSpeed = -1;
    this.fadeIn = 255;
    this.fadeOut = 1.5;

  }

  update() {
    this.display();
    // display grid to design stuff
    if (keyIsDown(LEFT_ARROW)) {
      this.grid = true;
    } else {
      this.grid = true;
    }
    if (this.fade) {
      this.fadeIn = this.fadeIn + this.fadeSpeed;
    }
  }

  display() {
    // display grid to design stuff
    if (this.grid) {
      push();
      stroke(230);
      fill(255);
      ellipse(width / 2, height / 2, 600);
      pop();
      push();
      stroke(230);
      line(width / 2, 0, width / 2, height);
      line(200, height / 2, width - 200, height / 2);
      pop();
    }


    this.flowersPNG.resize(378, 212)
    imageMode(CENTER)
    tint(255, 175)
    image(this.flowersPNG, width / 2 + 1, 560)

    // this.decorationPNG.resize(150, 50)
    // image(this.decorationPNG, 500, 315)
    push();
    imageMode(CENTER);
    // image(this.starGIF, width/2 - 2, 565);
    textSize(75);
    textFont(obrigeFONT);
    fillHsluv(0, 100, 74)
    textAlign(CENTER, CENTER)
    text(`Alliance`, width / 2, 150);
    text(`of`, width / 2, 258);
    text(`Harmony`, width / 2, 350);

    pop();

    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255, this.fadeIn);
    rect(width / 2, height / 2, 1000, 700)
    pop();
  }


  mousePressed() {

  }
}
