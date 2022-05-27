class BargainingEnd {
  constructor() {

    this.typewriter = new Typewriter();
    this.mainLevelPage4State = false;
    this.arrow = {
      gif: arrowGIF,
      x: 630,
      y: 450,
      isShowing: false
    }

    this.nextMain = false;
    this.openGift = false;

    setTimeout(() => {
      this.typewriter.typewrite(
        userName + '...', 150, 380);
      keyboardSFX.play();
      this.message1 = true;
    }, 2000);
    setTimeout(() => {
      keyboardSFX.stop();
    }, 2500);
    setTimeout(() => {
      this.toggleTextArrow();
    }, 4000);

    this.fade = new Fade(0, 1, false, true, 255, 255, 255)


  }

  update() {
    push();
    rectMode(CORNER);
    fill(0, 0, 0);
    rect(0, 0, 800, 800);
    pop();

    this.typewriter.display();

    if (this.arrow.isShowing) {
      this.displayArrow();
    }
    if (this.fading) {
      this.fade.update();
    }

    if (this.openGift) {


      push();
      imageMode(CENTER);
      image(lampBigIMG, 400, 300);
      pop();
      push();
      fill(0)
      textAlign(CENTER, CENTER);
      textFont(ibmFONTTypewriter);
      textSize(25);
      text('You found a rusty lantern!', 400, 550);
      text('It was added to your inventory', 400, 600);
      pop();


      if (!foundObjectSFX.isPlaying()) {
        foundObjectSFX.play();
        setTimeout(() => {
          this.soundOff = true;
        }, 1000);
      }

      if(this.soundOff){
        foundObjectSFX.stop();
      }

      setTimeout(() => {
        this.nextMain = true;
      }, 7000);

      if (this.finalFade) {
        this.fade2.update();

      }
      if(this.nextMain){
        currentState = new Main_Level_Page_4(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
      }
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

mouseDragged(){

}
keyTyped(){

}
keyPressed(){

}
mouseReleased(){

}
  mousePressed() {
    if (this.message1) {
      this.typewriter.typewrite(
        `I couldn't bring them back...`, 150, 380);
      keyboardSFX.play();
      this.arrow.isShowing = false;
      this.message1 = false;
      setTimeout(() => {
        keyboardSFX.stop();
      }, 1500);
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message2 = true;
      }, 3000);
    }
    if (this.message2) {
      this.typewriter.typewrite(
        `I'm so sorry...`, 150, 380);
      keyboardSFX.play();
      this.message2 = false;
      this.arrow.isShowing = false;
      this.samIsSad = true;
      setTimeout(() => {
        keyboardSFX.stop();
      }, 800);
      setTimeout(() => {
        // this.arrow.isShowing = true;
        // this.message3 = true;
        // currentState = new Main_Level_Page_1(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
        setTimeout(() => {
          // this.mainLevelPage4State = true;
          this.openGift = true;
        }, 7000);
        waveSFX.play();
        this.fading = true;
      }, 3000);

    }
  }

}
