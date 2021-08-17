class Meeting_Sam2 {
  constructor(samIMG, arrowGIF) {
    this.sam = {
      image: samIMG,
      x: 400,
      y: 300,
      vy: 0,
      speed: -7,
      finaleY: 300,
      isMoving: false
    }

    this.textBox = {
      x: 400,
      y: 650,
      vy: 0,
      speed: -7,
      finaleY: 650,
      back: false,
      speed2: 2
    }

    this.arrow = {
      gif: arrowGIF,
      x: 630,
      y: 680,
      isShowing: false
    }

    this.message1 = false;
    this.message2 = false;
    this.message3 = false;
    this.message4 = false;

    this.fading = false;

    this.typewriter = new Typewriter();

    this.fade = new Fade(0, 1, false, true, 255,255,255)

    setTimeout(() => {
      this.typewriter.typewrite(`
        Hello ` + userName + `.`, 100, 650);
    }, 800);
    setTimeout(() => {
      this.typewriter.typewrite(`
        This might be a difficult time for you, I understand...`, 82, 650);
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message1 = true;
      }, 5000);
    }, 4000);
  }

  update() {
    this.display();
    this.displaySam();


if (this.fading){
  this.fade.update();
}
  }

  display() {

    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(305, 34.8, 90)
    rect(400, 400, 800, 800)
    pop();

    rectMode(CENTER)
    // noStroke();
    strokeWeight(1);
    fill(211, 192, 216)
    rect(this.textBox.x, this.textBox.y, 550, 150, 0, 0, 0, 0);
    this.typewriter.display();

    if (this.arrow.isShowing)
      this.displayArrow();
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



  toggleTextArrow() {
    this.arrow.isShowing = true;
  }

  hideArrow() {
    this.arrow.isShowing = false;
  }

  mousePressed() {
    if (this.message1) {
      this.typewriter.typewrite(
        `I have lost countless people in my life...`, 170, 650);
      this.arrow.isShowing = false;
      this.message1 = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message2 = true;
      }, 3000);
    }
    if (this.message2) {
      this.typewriter.typewrite(
        `It never gets easy...`, 170, 650);
      this.message2 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message3 = true;
      }, 2000);
      setTimeout(() => {
        this.fading = true;

      }, 8000);
    }

    if (this.message3) {
      this.typewriter.typewrite(
          `Together, we'll make it through your grieveing journey.
      I promise.`, 150, 650);
      this.message3 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        // this.arrow.isShowing = true;
        currentState = new Main_Level_Page_1()
        // this.fading = true;
      },12000);

    }
  }
}
