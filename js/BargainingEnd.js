class BargainingEnd {
  constructor(){

    this.typewriter = new Typewriter();

    this.arrow = {
      gif: arrowGIF,
      x: 630,
      y: 450,
      isShowing: false
    }

    setTimeout(() => {
      this.typewriter.typewrite(
        userName + '...', 150, 380);
      this.message1 = true;
    }, 2000);

    setTimeout(() => {
      this.toggleTextArrow();
    }, 4000);

    this.fade = new Fade(0, 1, false, true, 255, 255, 255)


  }

  update(){
    push();
    fill(0,0,0);
    rect(0,0,800,800);
    pop();

    this.typewriter.display();

    if (this.arrow.isShowing){
      this.displayArrow();
  }
  if (this.fading) {
    this.fade.update();
  }
  }

  displayArrow() {
    push();
    imageMode(CENTER);
    image(this.arrow.gif, this.arrow.x, this.arrow.y)
    pop();
}

toggleTextArrow() {
  this.arrow.isShowing = true;
}

hideArrow() {
  this.arrow.isShowing = false;
}

mousePressed(){
  if (this.message1) {
    this.typewriter.typewrite(
      `I couldn't bring them back...`, 150, 380);
    this.arrow.isShowing = false;
    this.message1 = false;
    setTimeout(() => {
      this.arrow.isShowing = true;
      this.message2 = true;
    }, 3000);
  }
  if (this.message2) {
    this.typewriter.typewrite(
      `I'm so sorry...`, 150, 380);
    this.message2 = false;
    this.arrow.isShowing = false;
    this.samIsSad = true;
    setTimeout(() => {
      // this.arrow.isShowing = true;
      // this.message3 = true;
      // currentState = new Main_Level_Page_1(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
      waveSFX.amp(0.1);
        waveSFX.play();
      this.fading = true;
    }, 3000);

  }
}

}
