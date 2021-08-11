class Meeting_Sam2 {
  constructor(samIMG, arrowGIF) {
    this.sam = {
      image: samIMG,
      x: 650,
      y: 300,
      vy: 0,
      speed: -5,
      finaleY: 300,
      isMoving: false
    }

    this.textBox = {
      x: 650,
      y: 650,
      vy: 0,
      speed: -7,
      finaleY: 650
    }

    this.arrow = {
      gif: arrowGIF,
      x: 1050,
      y: 700,
      isShowing: false
    }

    this.message1 = false;
    this.message2 = false;
    this.message3 = false;
    this.message4 = false;

    this.fading = false;

    this.typewriter = new Typewriter();

    this.fade = new Fade(0, 1, false, true)

    setTimeout(() => {
      this.typewriter.typewrite(`
        Hello ` + userName + `.`, 160, 650);
    }, 800);
    setTimeout(() => {
      this.typewriter.typewrite(`
        This might be a difficult time for you, I understand...`, 160, 650);
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message1 = true;
      }, 5000);
    }, 4000);
  }

  update() {

    this.displaySam();
    this.display();


if (this.fading){
  this.fade.update();
}
  }

  display() {
    rectMode(CENTER)
    strokeWeight(1);
    fill(0)
    rect(this.textBox.x, this.textBox.y, 900, 200, 0, 0, 0, 20);
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
        `I have lost countless people in my life...`, 300, 650);
      this.arrow.isShowing = false;
      this.message1 = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message2 = true;
      }, 3000);
    }
    if (this.message2) {
      this.typewriter.typewrite(
        `It never gets easy...`, 300, 650);
      this.message2 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message3 = true;
      }, 2000);
    }

    if (this.message3) {
      this.typewriter.typewrite(
        `Together, we will make it through your grieveing journey.
        I promise.`, 300, 650);
      this.message3 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message4 = true;
      }, 4000);
    }
    if (this.message4) {
      this.fading = true;
      setTimeout(() => {
        currentState = new Main_Level_Page_1()
      }, 5000);
    }
  }
}
