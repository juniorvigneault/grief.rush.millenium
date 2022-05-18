class BargainingIntro {
  constructor(samGIF, arrowGIF, bigSam){

    this.sam = {
      image: samGIF,
      x: 400,
      y: 300,
      vy: 0,
      speed: -10,
      finaleY: 310,
      isMoving: false,
      imageHappy: bigSam
    }

    this.arrow = {
      gif: arrowGIF,
      x: 630,
      y: 680,
      isShowing: false
    }

    this.samIsThere = false;

    this.samIsHappy = false;

    this.message1 = false;
    this.message2 = false;
    this.message3 = false;

    this.typewriter = new Typewriter();
    this.fade = new Fade(0, 1, false, true, 255, 255, 255);


    setTimeout(() => {
      this.samIsThere = true;
      bell3SFX.play();
    }, 3000);

    setTimeout(() => {
      this.typewriter.typewrite(`
        Hello `+ userName + `,`, 80, 650);
      setTimeout(() => {
        this.message1 = true;
        this.arrow.isShowing = true;
      }, 2000);
    }, 4500);

  }

  update(){
    this.background();
    if (this.samIsThere) {
      this.displaySam();
    }
    if (this.arrow.isShowing)
      this.displayArrow();

    this.typewriter.display();
    if (this.samIsHappy) {
      this.sam.image = this.sam.imageHappy;
    }
    if (this.fading) {
      this.fade.update();
    }

  }

  background(){
    push();
    fill(0);
    noStroke();
    rect(0,0,800,800);
    pop();
  }

  displaySam() {
    push();
    imageMode(CENTER);
    image(this.sam.image, this.sam.x, this.sam.y)
    pop();
  }
  displayArrow() {
    push();
    imageMode(CENTER);
    image(this.arrow.gif, this.arrow.x, this.arrow.y)
    pop();
  }

  mousePressed(){
    if (this.message1) {
      this.typewriter.typewrite(`
        I have something important to tell you.`, 60, 650);
      this.arrow.isShowing = false;
      this.message1 = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message2 = true;
      }, 3000);
    }
    if (this.message2) {
      this.typewriter.typewrite(`
        I found a way to bring back your loved
        one.`, 65, 650);
      this.message2 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message3 = true;
      }, 4000);
    }
    if (this.message3) {
      this.samIsHappy = true;
      bell1SFX.amp(0.5);
      bell1SFX.play();
      this.typewriter.typewrite(`
        Attentively follow my instructions.`, 65, 650);
      this.message3 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message4 = true;
      }, 3000);
    }
    if (this.message4) {
      this.typewriter.typewrite(`
        This is extremely important April White.`, 65, 650);
      this.message4 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message5 = true;
      }, 3000);
    }
    if (this.message5) {
      this.typewriter.typewrite(`
        ... I believe in you.`, 65, 650);
      this.message5 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.message6 = true;
        this.fading = true;
        waveSFX.amp(0.1);
        waveSFX.play();
      }, 3000);
      setTimeout(() => {
        currentState = new Bargaining(smallHeartIMG, smallDeathGIF);
      }, 8000);
    }
  }
}
