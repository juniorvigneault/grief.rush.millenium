class Ten_seconds_title {
  constructor(deadRosePNG) {

    this.whiteRect = true;
    this.fadeIn = true;
    this.fadeOut = false;
    this.opacity = 255;

    this.fadeSpeed = 2;

    this.fadeAppear = false;

    this.quote1 = true;
    this.quote2 = false;

    this.textBox = {
      x: 400,
      y: 2300,
      vy: 0,
      speed: -7,
      finaleY: 650,
      back: false,
      speed2: 2
    }

    this.deadRose = {
      img: deadRosePNG,
      x: 400,
      y: 320
    }

    this.purple = {
      img: purpleBG,
      x: 0,
      y: 0
    }

    this.fade = new Fade(0, 1, false, true, 255, 255, 255);
    this.fade2 = new Fade(255, 2, true, false, 255, 255, 255);


    this.typewriter = new Typewriter();

    setTimeout(() => {
      this.typewriter.typewrite(`
        A person can stand just about anything for 10 seconds...`, 75, 650);
    }, 5000);

    setTimeout(() => {
      this.typewriter.typewrite(`
        `, 75, 650);
    }, 13000);

    setTimeout(() => {
      this.typewriter.typewrite(`
        ...then you just start on a new 10 seconds.`, 100, 650);
    }, 14000);

    setTimeout(() => {
      this.typewriter.typewrite(`
        `, 75, 650);
    }, 22000);

    setTimeout(() => {
      this.textBox.back = true;
      this.fadeAppear = true;
    }, 23000);

    setTimeout(() => {
      currentState = new Meeting_Sam(samIMG, arrowGIF);
    }, 28000);


    // setTimeout(() => {
    //   currentState = new Alliance_of_harmony_title();
    // }, 25000);

    // introSFX.play();
    // introSFX.setVolume(0.05);

    // setTimeout(() => {
    //   introSFX2.play();
    //   introSFX2.setVolume(0.07);
    // }, 16000);
  }

  update() {

    this.display();


    push();

    // textAlign(CENTER, CENTER);
    // if (this.quote1) {
    //   textSize(30);
    //   textFont("futura");
    //   fill(0)
    //   text(`A person can stand just about anything for 10 seconds...`, width / 2, height / 2);
    // }
    // if (this.quote2) {
    //   textSize(30);
    //   textFont("futura");
    //   fill(0)
    //   text(`...then you just start on a new 10 seconds.`, width / 2, height / 2);
    // }
    pop();
    this.moveTextBox();

    if (this.textBox.back) {
      this.moveTextBoxAgain();
    }

    if (this.fadeAppear) {
      this.fade.update();
    }
    this.fade2.update();

  }

  display() {

    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(305, 34.8, 90)
    rect(400, 400, 800, 800)
    pop();


    this.bloodDrop();
    rectMode(CENTER)
    // noStroke();
    strokeWeight(1);
    fill(211, 192, 216)
    rect(this.textBox.x, this.textBox.y, 550, 150, 0, 0, 0, 0);
    this.typewriter.display();

    this.displayDeadRose();

  }

  displayDeadRose() {
    push();
    imageMode(CENTER);
    image(this.deadRose.img, this.deadRose.x, this.deadRose.y)
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

  moveTextBoxAgain() {
    this.textBox.y = this.textBox.y -= this.textBox.vy;
    this.textBox.vy = this.textBox.speed2;
  }

  // method for the droplets of blood
  bloodDrop() {
    this.displayBlood()
    if (frameCount % 99 === 0) {
      bloodDrops.push(new Blood(random(355, 380), 330, 10, random(10, 22), world));
    };
  }

  // display the droplets of blood
  displayBlood() {
    for (let i = 0; i < bloodDrops.length; i++) {
      bloodDrops[i].update();
      if (bloodDrops[i].offScreen()) {
        // remove drops from the world so the physics engine stops taking care of them when they leave screen
        bloodDrops[i].removeFromWorld();
        // remove drops from the array
        bloodDrops.splice(i, 1);
        // prevents the skipping of a drop when removed from the array by backing up 1 // Daniel Shiffman tip
        i--;
      };
    };
  }

  mousePressed() {

  }
}
