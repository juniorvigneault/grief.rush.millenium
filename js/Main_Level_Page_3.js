class Main_Level_Page_3 {
  constructor(heartIMG, deadRosePNG, liveRosePNG, deathIMG, smallBrokenHeartIMG) {
    console.log(currentState)

    $("#name_form").hide();
    $("#about_box").hide();

    this.textBox = {
      x: 400,
      y: 1000,
      vy: 0,
      speed: -7,
      finaleY: 650,
      back: false,
      speed2: 2
    }

    this.typewriter = new Typewriter();

    this.heart = {
      img: heartIMG,
      img2: heartIMG,
      img3: heartIMG,
      img4: heartIMG,
      img5: heartIMG,
      img6: heartIMG,
      img7: heartIMG,
      img8: heartIMG,
      img9: heartIMG,
      img10: heartIMG,
      x: 250,
      y: 150,
      x2: 550,
      y2: 150,
      x3: 250,
      y3: 250,
      x4: 550,
      y4: 250,
      x5: 250,
      y5: 350,
      x6: 550,
      y6: 350,
      x7: 250,
      y7: 450,
      x8: 550,
      y8: 450,
      x9: 250,
      y9: 550,
      x10: 550,
      y10: 550,
      appear1: false,
      appear2: false,
      appear3: false,
      appear4: false,
      appear5: false

    }

    this.deadRose = {
      img: deadRosePNG,
      img2: deadRosePNG,
      x: 700,
      y: 100,
      x2: 100,
      y2: 700
    }

    this.death = {
      img: deathIMG,
      img2: deathIMG,
      x: 700,
      y: 400,
      x2: 100,
      y2: 400
    }

    this.liveRose = {
      img: liveRosePNG,
      img2: liveRosePNG,
      x: 80,
      y: 100,
      x2: 700,
      y2: 700
    }

    this.denial = {
      x: 407,
      y: 150,
      h: 40,
      w: 130,
      color: 255,
      showing: false
    }
    this.anger = {
      x: 400,
      y: 250,
      h: 40,
      w: 120,
      color: 255,
      showing: false
    }

    this.bargaining = {
      x: 400,
      y: 350,
      h: 40,
      w: 210,
      color: 255,
      showing: false
    }

    this.depression = {
      x: 400,
      y: 450,
      h: 40,
      w: 210,
      color: 255,
      showing: false
    }

    this.acceptance = {
      x: 400,
      y: 550,
      h: 40,
      w: 210,
      color: 255,
      showing: false
    }

    this.fade = new Fade(0, 1.5, false, true, 255,255,255);
    this.denialFade = false;
  }

  update() {

    this.mouseOverLevels();

    // background
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(305, 34.8, 90)
    rect(400, 400, 800, 800)
    pop();

    push();
    imageMode(CORNER)
    image(mainLevelBG, 0, 0);
    pop();

    push();
    noStroke();
    fill(this.denial.color, 0, 0, 0)
    rectMode(CENTER)
    rect(this.denial.x, this.denial.y, this.denial.w, this.denial.h);
    fill(30, 30, 30);
    textSize(30)
    textAlign(CENTER, CENTER)
    textFont(ibmFONT)
    text('DENIAL', this.denial.x, this.denial.y - 7)
    pop();
    push();
    line(this.denial.x - 70, this.denial.y-2, this.denial.x +70, this.denial.y-2);
    pop();



    push();
    noStroke();
    rectMode(CENTER)
    fill(this.denial.color, 0, 0, 0)
    rect(this.anger.x, this.anger.y, this.anger.w, this.anger.h);
    fill(30,30,30);
    textSize(30)
    textAlign(CENTER, CENTER)
    textFont(ibmFONT)
    text('ANGER', this.anger.x, this.anger.y - 7)
    pop();
    push();
    line(this.anger.x - 70, this.anger.y-2, this.anger.x +70, this.anger.y-2);
    pop();



    push();
    noStroke();
    rectMode(CENTER)
    fill(this.denial.color, 0, 0, 0)
    rect(this.bargaining.x, this.bargaining.y, this.bargaining.w, this.bargaining.h);
    fill(30, 30, 30)
    textSize(30)
    textAlign(CENTER, CENTER)
    textFont(ibmFONT)
    text('BARGAINING', this.bargaining.x, this.bargaining.y - 7)
    pop();



    push();
    noStroke();
    rectMode(CENTER)
    fill(this.denial.color, 0, 0, 0)
    rect(this.depression.x, this.depression.y, this.depression.w, this.depression.h);
    fill(0, 0, 0, 100)
    textSize(30)
    textAlign(CENTER, CENTER)
    textFont(ibmFONT)
    text('DEPRESSION', this.depression.x, this.depression.y - 7)
    pop();

    push();
    noStroke();
    rectMode(CENTER);
    fill(this.denial.color, 0, 0, 0)
    rect(this.acceptance.x, this.acceptance.y, this.acceptance.w, this.acceptance.h);
    fill(0, 0, 0, 100)
    textSize(30)
    textAlign(CENTER, CENTER)
    textFont(ibmFONT)
    text('ACCEPTANCE', this.acceptance.x, this.acceptance.y - 7)
    pop();

    push();
    fill(0)
    textSize(17)
    textAlign(CENTER, CENTER)
    textFont(ibmFONTTypewriter);
    text('Level 1 : Baby Griever', 400, 690)
    pop();

    push();
    fill(0)
    textSize(17)
    textAlign(CENTER, CENTER)
    textFont(ibmFONTTypewriter);
    text('0 pts', 400, 660)
    pop();

    this.display();

    this.moveTextBox();

    // push();
    // imageMode(CENTER);
    // image(this.death.img, this.death.x, this.death.y)
    // image(this.death.img2, this.death.x2, this.death.y2)
    // pop();
    //
    // push();
    // imageMode(CENTER);
    // image(this.deadRose.img, this.deadRose.x, this.deadRose.y)
    // image(this.deadRose.img2, this.deadRose.x2, this.deadRose.y2)
    // pop();
    //
    // push();
    // imageMode(CENTER);
    // image(this.liveRose.img, this.liveRose.x, this.liveRose.y)
    // image(this.liveRose.img2, this.liveRose.x2, this.liveRose.y2)
    // pop();


    if (this.denial.showing) {
      this.displayDenialText();
    }

    if (this.angerIsLocked) {
      this.angerLocked();
    }

    if (this.bargainingIsLocked) {
      this.bargainingLocked();
    }
    if (this.depressionIsLocked) {
      this.depressionLocked();
    }
    if (this.acceptanceIsLocked) {
      this.acceptanceLocked();
    }
    if (this.denialFade) {
      this.fade.update();
    }
  }

  display() {
    push();
    // rectMode(CENTER)
    // // noStroke();
    // strokeWeight(1);
    // fill(211, 192, 216)
    // rect(this.textBox.x, this.textBox.y, 550, 150, 0, 0, 0, 0);
    this.typewriter.display();
    pop();

    if (this.heart.appear) {
      this.displayDenialHearts()
    }
    if (this.heart.appear2) {
      this.displayAngerHearts()
    }
    if (this.heart.appear3) {
      this.displayBargainingHearts()
    }
    if (this.heart.appear4) {
      this.displayDepressionHearts()
    }
    if (this.heart.appear5) {
      this.displayAcceptanceHearts()
    }
  }

  displayDenialHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img, this.heart.x, this.heart.y)
    image(this.heart.img2, this.heart.x2, this.heart.y2)
    pop();
  }

  displayAngerHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img3, this.heart.x3, this.heart.y3)
    image(this.heart.img4, this.heart.x4, this.heart.y4)
    pop();
  }

  displayBargainingHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img5, this.heart.x5, this.heart.y5)
    image(this.heart.img6, this.heart.x6, this.heart.y6)
    pop();
  }

  displayDepressionHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img7, this.heart.x7, this.heart.y7)
    image(this.heart.img8, this.heart.x8, this.heart.y8)
    pop();
  }

  displayAcceptanceHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img9, this.heart.x9, this.heart.y9)
    image(this.heart.img10, this.heart.x10, this.heart.y10)
    pop();
  }

  mouseOverLevels() {
    if (mouseX > this.denial.x - this.denial.w / 2 &&
      mouseX < this.denial.x + this.denial.w / 2 &&
      mouseY > this.denial.y - this.denial.h / 2 &&
      mouseY < this.denial.y + this.denial.h / 2) {
      this.heart.appear = true;
    } else {
      this.heart.appear = false;
    }

    if (mouseX > this.anger.x - this.anger.w / 2 &&
      mouseX < this.anger.x + this.anger.w / 2 &&
      mouseY > this.anger.y - this.anger.h / 2 &&
      mouseY < this.anger.y + this.anger.h / 2) {
      this.heart.appear2 = true
    } else {
      this.heart.appear2 = false
    }

    if (mouseX > this.bargaining.x - this.bargaining.w / 2 &&
      mouseX < this.bargaining.x + this.bargaining.w / 2 &&
      mouseY > this.bargaining.y - this.bargaining.h / 2 &&
      mouseY < this.bargaining.y + this.bargaining.h / 2) {
      this.heart.appear3 = true
    } else {
      this.heart.appear3 = false
    }

    if (mouseX > this.depression.x - this.depression.w / 2 &&
      mouseX < this.depression.x + this.depression.w / 2 &&
      mouseY > this.depression.y - this.depression.h / 2 &&
      mouseY < this.depression.y + this.depression.h / 2) {
      this.heart.appear4 = true
    } else {
      this.heart.appear4 = false
    }

    if (mouseX > this.acceptance.x - this.acceptance.w / 2 &&
      mouseX < this.acceptance.x + this.acceptance.w / 2 &&
      mouseY > this.acceptance.y - this.acceptance.h / 2 &&
      mouseY < this.acceptance.y + this.acceptance.h / 2) {
      this.heart.appear5 = true
    } else {
      this.heart.appear5 = false
    }
  }

  toggleDenialText() {
    this.denial.showing = true;
  }

  hideDenialText() {
    this.denial.showing = false;
  }

  angerLocked() {
    this.anger.x = this.anger.x + random(-2, 2);
    setTimeout(() => {
      this.angerIsLocked = false
      this.anger.x = 400;
    }, 200);
  }

  bargainingLocked() {
    this.bargaining.x = this.bargaining.x + random(-2, 2);
    setTimeout(() => {
      this.bargainingIsLocked = false
      this.bargaining.x = 400;
    }, 200);
  }

  depressionLocked() {
    this.depression.x = this.depression.x + random(-2, 2);
    setTimeout(() => {
      this.depressionIsLocked = false
      this.depression.x = 400;
    }, 200);
  }

  acceptanceLocked() {
    this.acceptance.x = this.acceptance.x + random(-2, 2);
    setTimeout(() => {
      this.acceptanceIsLocked = false
      this.acceptance.x = 400;
    }, 200);
  }

  angerLocked() {
    this.anger.x = this.anger.x + random(-2, 2);
    setTimeout(() => {
      this.angerIsLocked = false
      this.anger.x = 400;
    }, 200);
  }

  displayDenialText() {
    push();
    textAlign(CENTER);
    textSize(32)
    text(`DENIAL`, this.denial.x, this.denial.y - 100)
    pop();
  }

  moveTextBox() {
    this.textBox.y = this.textBox.y += this.textBox.vy;
    if (this.textBox.y < this.textBox.finaleY) {
      this.textBox.vy = 0;
    } else {
      this.textBox.vy = this.textBox.speed;
    }
  }

  mouseDragged() {

  }

  mousePressed() {


    if (mouseX > this.bargaining.x - this.bargaining.w / 2 &&
      mouseX < this.bargaining.x + this.bargaining.w / 2 &&
      mouseY > this.bargaining.y - this.bargaining.h / 2 &&
      mouseY < this.bargaining.y + this.bargaining.h / 2) {
        setTimeout(() => {
          currentState = new BargainingIntro(samIMG, arrowGIF);
        }, 1500);
        sineSFX.amp(0.1);
        sineSFX.play();
    }
    if (mouseX > this.depression.x - this.depression.w / 2 &&
      mouseX < this.depression.x + this.depression.w / 2 &&
      mouseY > this.depression.y - this.depression.h / 2 &&
      mouseY < this.depression.y + this.depression.h / 2) {
      this.depressionIsLocked = true;

    }
    if (mouseX > this.acceptance.x - this.acceptance.w / 2 &&
      mouseX < this.acceptance.x + this.acceptance.w / 2 &&
      mouseY > this.acceptance.y - this.acceptance.h / 2 &&
      mouseY < this.acceptance.y + this.acceptance.h / 2) {
      this.acceptanceIsLocked = true;

    }
  }
}
