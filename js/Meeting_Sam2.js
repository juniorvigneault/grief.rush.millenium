class Meeting_Sam2 {
  constructor(samGIF, arrowGIF, bigSam) {
    this.sam = {
      image: samGIF,
      x: 400,
      y: 300,
      vy: 0,
      speed: -7,
      finaleY: 300,
      isMoving: false,
      imageHappy: bigSam
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

    this.flowers = {
      x: 1,
      y: 1,
      x2: 1,
      y2: 1,
      angle: 10,
      speed: 7,
      weight: .5,
      fill: {
        r: 200,
        g: 200,
        b: 200,
      }
    }

    this.samIsHappy = false;
    this.samIsSad = false;


    this.message1 = false;
    this.message2 = false;
    this.message3 = false;
    this.message4 = false;

    this.fading = false;

    this.typewriter = new Typewriter();
    // roomToneSFX.amp(0.1)
    // roomToneSFX.loop();

    this.fade = new Fade(0, 1, false, true, 255, 255, 255);

    setTimeout(() => {
      this.typewriter.typewrite(`
        Hello ` + userName + `.`, 80, 650);
        keyboardSFX.play();
        setTimeout(() => {
            keyboardSFX.stop();
        }, 1500);
    }, 800);
    setTimeout(() => {
      this.typewriter.typewrite(`
        This might be a difficult time for you,
        I understand...`, 65, 660);
        setTimeout(() => {
          keyboardSFX.play();
        }, 500);
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message1 = true;
        keyboardSFX.stop();
      }, 3500);
    }, 4000);
  }

  update() {
    this.display();



    if (this.fading) {
      this.fade.update();
    }


  }

  display() {

    push();
    noStroke();
    rectMode(CENTER);
    fill(40);
    // fillHsluv(305, 34.8, 90)
    rect(400, 400, 800, 800)
    pop();

    push();
    image(samBG, 0, 0);
    pop();

    if (this.samIsHappy) {
      this.sam.image = this.sam.imageHappy;
    }

    //
    // if (this.samIsHappy) {
    //   this.sam.imageSad = this.sam.imageHappy
    //   // this.flowerRays();
    // }

    this.displaySam();


    if (this.samIsSad) {
      this.bloodDrop();
    }

    rectMode(CENTER)
    // noStroke();
    strokeWeight(1);
    fill(250);
    // fill(211, 192, 216)
    // rect(this.textBox.x, this.textBox.y, 550, 150, 0, 0, 0, 0);
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

  flowerRays() {
    for (let i = 0; i < 5; i++) {
      push();
      this.flowers.angle = this.flowers.angle + this.flowers.speed
      translate(400, 310);
      rotate(this.flowers.angle);
      stroke(this.flowers.fill.r, this.flowers.fill.g, this.flowers.fill.b);
      strokeWeight(this.flowers.weight);
      line(this.flowers.x, this.flowers.y, this.flowers.x2, this.flowers.y2);
      translate(this.flowers.x, this.flowers.y);
      rotate(this.flowers.angle);
      this.flowers.x = this.flowers.x + random(0, width);
      pop();
    }
  }

  mouseDragged() {

  }

  keyPressed() {

  }
  keyTyped() {}

  mouseReleased(){

  }

  mousePressed() {
    if (this.message1) {
      this.typewriter.typewrite(`
        I lost countless people in my life...`, 60, 650);
      this.arrow.isShowing = false;
      keyboardSFX.play();
      this.message1 = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message2 = true;
        keyboardSFX.stop();
      }, 2400);
    }
    if (this.message2) {
      this.typewriter.typewrite(`
        It never gets easy...`, 65, 650);
        keyboardSFX.play();
      this.message2 = false;
      this.arrow.isShowing = false;
      // this.samIsSad = true;
      setTimeout(() => {

        keyboardSFX.stop();
      }, 1500);
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message3 = true;
      }, 2000);

    }

    if (this.message3) {
      this.typewriter.typewrite(`
        Together, we'll make it through your
        grieveing journey, I promise.`, 60, 660);
        keyboardSFX.play();
      this.samIsHappy = true;
      bell3SFX.play();
      this.message3 = false;
      this.arrow.isShowing = false;
      setTimeout(() => {
        keyboardSFX.stop();
      }, 4000);
      setTimeout(() => {
        this.fading = true;
        waveSFX.play();
      }, 5000);
      setTimeout(() => {
        // this.arrow.isShowing = true;
         currentState = new Main_Level_Page_1(smallHeartIMG, smallDeadRosePNG, liveRosePNG, smallDeathIMG, smallBrokenHeartIMG);
        // this.fading = true;
      }, 12000);

    }
  }

  // method for the droplets of blood
  bloodDrop() {
    this.displayBlood()
    if (frameCount % 99 === 0) {
      bloodDrops.push(new Blood(402, 329, 10, 20, world, 120, 120, 200));
    };
    setTimeout(() => {
      this.samIsSad = false;
    }, 1700);
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
}
