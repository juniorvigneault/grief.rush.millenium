class Alliance_of_harmony_title {

  constructor(alliancePNG, ofPNG, harmonyPNG, flowersPNG, decorationPNG, starGIF) {
    // PNG for the title
    this.alliancePNG = alliancePNG;
    this.ofPNG = ofPNG;
    this.harmonyPNG = harmonyPNG;
    this.flowersPNG = flowersPNG;
    this.decorationPNG = decorationPNG;

    // gif for title
    this.starGIF = starGIF;

    // display grid to design stuff
    this.grid = false;
  }

  update() {
    this.display();

    // display grid to design stuff
    if (keyIsDown(LEFT_ARROW)) {
      this.grid = true;
    } else {
      this.grid = false;
    }
  }

  display() {
    // display grid to design stuff
    if (this.grid) {
      line(width / 2, 0, width / 2, height)
      line(0, height / 2, width, height / 2)
    }


    // this.alliancePNG.resize(405, 105)
    // image(this.alliancePNG, 300, 200)
    // this.ofPNG.resize(90, 90)
    // image(this.ofPNG, 240, 285)
    // this.harmonyPNG.resize(405, 130)
    // image(this.harmonyPNG, 320, 330)
    // this.flowersPNG.resize(300, 300)
    // image(this.flowersPNG, 140, 330)
    // this.decorationPNG.resize(150, 50)
    // image(this.decorationPNG, 500, 315)
    push();
    imageMode(CENTER);
    image(this.starGIF, 250, 350);
    textSize(100)
    // textFont(eleganteFONT);
    text(`Alliance`, 390, 280);
    text(`of`, 390, 380);
    text(`Harmony`, 390, 480);

    pop();

  }

  mousePressed(){

  }



}
