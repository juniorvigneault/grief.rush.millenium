class Pendant {
  constructor(){

    foundObjectSFX.play();

    this.fade2 = new Fade(0, 1.2, false, true, 255, 255, 255)
    this.clickable2 = false;

    setTimeout(() => {
      currentState = new Main_Level_Page_2(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
      windSFX.stop();
    }, 7000);
    setTimeout(() => {
      this.finalFade = true;
      waveSFX.play();
    }, 3000);


  }

  update(){

    push();
    image(denialBG, 0, 0);
    pop();

    push();
    imageMode(CENTER);
    image(pendantBigIMG, 400, 300);
    pop();

    push();
    fill(255)
    textAlign(CENTER, CENTER);
    textFont(ibmFONTTypewriter);
    textSize(25);
    text('You found a silver pendant!', 400, 550);
    text('It was added to your inventory', 400, 600);
    pop();

    if (this.finalFade) {
      this.fade2.update();

    }
  }
  mousePressed(){

  }
  mouseDragged(){

  }
  keyTyped(){

  }
  keyPressed(){

  }
}
