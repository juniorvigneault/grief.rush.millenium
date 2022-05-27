class Start {
  // starting state with start and about buttons
  constructor(heartIMG, smallDeathIMG) {
    // start button
    this.start = {
      x: 300,
      y: 200,
      string: `Start`,
      size: 40,
      vy: 0,
      speed: -.5,
      stop: 0,
      mouseOverColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 70
      },
      color: 255
    };
    // about button
    this.about = {
      x: 300,
      y: 300,
      string: `About`,
      size: 40,
      vy: 0,
      speed: -.5,
      stop: 0,
      mouseOverColor: {
        r: 255,
        g: 0,
        b: 0
      },
      color: 255
    };

    $(`#about_box`).dialog({
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: window
      },
      autoOpen: false,
      height: 480,
      draggable: false,
      closeOnEscape: false,
      modal: true
    });

    this.activateFade = false;

    this.fade = new Fade(0, 2, false, true, 255, 255, 255);
    this.fade2 = new Fade(255, 2, true, false);

    // this.deadRose = {
    //   img: deadRosePNG,
    //   x: 500,
    //   y: 350
    // }

    this.textBox = {
      x: 400,
      y: 400,
      vy: 0,
      speed: -7,
      finaleY: 650,
      back: false,
      speed2: 2
    }
    this.clickable = true;

    this.heart = {
      img: heartIMG,
      img2: heartIMG,
      img3: heartIMG,
      img4: heartIMG,
      x: this.start.x - 150,
      y: this.start.y + 10,
      x2: this.start.x + 150,
      y2: this.start.y + 10,
      x3: this.about.x + 150,
      y3: this.about.y + 10,
      x4: this.about.x - 150,
      y4: this.about.y + 10,
      appear1: false,
      appear2: false
    }

    this.smallDeath = {
      img: smallDeathIMG,
      img2: smallDeathIMG,
      x: 50,
      y: 50,
      x2: 750,
      y2: 750
    }

    setInterval(() => {
      this.spaceToStartAppear = true;
    }, 1000);

    setInterval(() => {
      this.spaceToStartAppear = false;
    }, 2000);


  }



  // calls the display function and the mouseOver to change color
  update() {
    background(255)
    // push();
    // noStroke();
    // fillHsluv(305, 34.8, 84)
    // rect(0, 0, width, height)
    // pop();
    // blood drops fall from the stain
    // this.bloodDrop();
    push();
    rectMode(CENTER)
    // strokeWeight(1);
    noStroke();
    fill(211, 192, 216)
    rect(this.textBox.x, this.textBox.y, 800, 800, 0, 0, 0, 0);
    pop();

    this.display();



    // this.mouseOverStartText();
    // this.mouseOverAboutText();

    if (this.activateFade) {
      this.fade.update();
    }
    // this.fade2.update();



  };
  // displays the start and about button
  display() {

    //background image
    push();
    image(startBG, 0,0);
    pop();

    // push();
    // imageMode(CENTER);
    // image(this.smallDeath.img, this.smallDeath.x, this.smallDeath.y);
    // image(this.smallDeath.img2, this.smallDeath.x2, this.smallDeath.y2);
    // pop();

    // push();
    // textAlign(CENTER, CENTER);
    // this.displayText(this.start.size, this.start.string, this.start.x, this.start.y, this.start.color);
    // this.displayText(this.about.size, this.about.string, this.about.x, this.about.y, this.about.color);
    // pop();

    if (this.spaceToStartAppear) {
      this.displaySpace();
    }
    // this.displayDeadRose();

    // if (this.aboutCrossed) {
    //   push();
    //   // strokeHsluv(305, 34.8, 25.9)
    //   strokeWeight(2)
    //   line(300, 550, 500, 550)
    //   pop();
    // }
    //
    // if (this.startCrossed) {
    //   push();
    //   // strokeHsluv(305, 34.8, 25.9)
    //   strokeWeight(2)
    //   line(300, 350, 500, 350)
    //   pop();
    // }

    // if (this.heart.appear1) {
    //   this.displayStartHearts()
    // }
    // if (this.heart.appear2) {
    //   this.displayAboutHearts()
    // }

  };

  displayText(size, string, x, y, color = {
    r: 0,
    g: 0,
    b: 0
  }) {
    push();
    textFont(ibmFONT)
    textAlign(CENTER, CENTER);
    fill(color.r, color.g, color.b)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
  }

  displaySpace() {
    push();
    fill(30, 30, 30);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(ibmFONTTypewriter);
    text('press space to start', 400, 720);
    pop();
  }

  displayStartHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img, this.heart.x, this.heart.y)
    image(this.heart.img2, this.heart.x2, this.heart.y2)
    pop();
  }

  displayAboutHearts() {
    push();
    imageMode(CENTER)
    image(this.heart.img3, this.heart.x3, this.heart.y3)
    image(this.heart.img4, this.heart.x4, this.heart.y4)
    pop();
  }

  // check if the user's mouse is over text
  mouseIsOverText(size, string, x, y) {
    textSize(size);
    let w = textWidth(string);
    let h = textAscent();
    // if mouse is over text
    if (mouseX > x - w / 2 &&
      mouseX < x + w / 2 &&
      mouseY > y - h / 2 &&
      mouseY < y + h / 2) {
      return true;
    } else {
      return false;
    }
  }

  // turns the start button red if mouse is over
  mouseOverStartText() {
    let startColor = {
      r: 0,
      g: 0,
      b: 0
    };
    if (this.mouseIsOverText(this.start.size, this.start.string, this.start.x, this.start.y)) {
      startColor = this.start.mouseOverColor;
      this.heart.appear1 = true;
    } else {
      this.heart.appear1 = false;
    }
    this.displayText(this.start.size, this.start.string, this.start.x, this.start.y, startColor);

  }
  //
  // displayDeadRose() {
  //   push();
  //   imageMode(CENTER);
  //   image(this.deadRose.img, this.deadRose.x, this.deadRose.y)
  //   pop();
  // }

  // turns the about button red if mouse is over
  mouseOverAboutText() {
    let aboutColor = {
      r: 0,
      g: 0,
      b: 0
    };

    if (this.mouseIsOverText(this.about.size, this.about.string, this.about.x, this.about.y)) {
      aboutColor = this.start.mouseOverColor;
      this.heart.appear2 = true;
    } else {
      this.heart.appear2 = false;
    }
    this.displayText(this.about.size, this.about.string, this.about.x, this.about.y, aboutColor);
  }

  // method for the droplets of blood
  bloodDrop() {
    this.displayBlood()
    if (frameCount % 95 === 0) {
      bloodDrops.push(new Blood(random(390, 465), 350, 35, 35, world));
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

  keyPressed(){
    if (keyIsDown(32) && this.clickable){
      console.log('START');
      this.clickable = false;
      this.activateFade = true;
      waveSFX.play();
      // clickSFX.play()
      setTimeout(() => {
        currentState = new Alliance_of_harmony_title(smallHeartIMG, smallDeathIMG);
      }, 4000);

    }
  }

  mouseDragged() {

  }

  keyTyped(){

  }

  
  mouseReleased(){

  }
  // Pressing start begins the simulation
  // Pressing about opens a dialog box with information
  mousePressed() {
    if (this.mouseIsOverText(this.start.size, this.start.string, this.start.x, this.start.y)) {


      // currentState = new Alliance_of_harmony_title(flowersPNG);

    } else if (this.mouseIsOverText(this.about.size, this.about.string, this.about.x, this.about.y)) {
      console.log('ABOUT');
      $("#about_box").dialog("open");
    }
  }
}
