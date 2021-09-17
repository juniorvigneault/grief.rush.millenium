class Start {
  // starting state with start and about buttons
  constructor(heartIMG) {
    // start button
    this.start = {
      x: 400,
      y: 300,
      string: `START`,
      size: 70,
      vy: 0,
      speed: -.5,
      stop: 0,
      mouseOverColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 70
      },
      color: 0
    };
    // about button
    this.about = {
      x: 400,
      y: 500,
      string: `ABOUT`,
      size: 70,
      vy: 0,
      speed: -.5,
      stop: 0,
      mouseOverColor: {
        r: 255,
        g: 0,
        b: 0
      },
      color: 0
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

    this.heart = {
      img: heartIMG,
      img2: heartIMG,
      img3: heartIMG,
      img4: heartIMG,
      x: 200,
      y: 310,
      x2: 600,
      y2: 310,
      x3: 200,
      y3: 510,
      x4: 600,
      y4: 510,
      appear1: false,
      appear2: false
    }


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



    this.mouseOverStartText();
    this.mouseOverAboutText();

    if (this.activateFade) {
      this.fade.update();
    }
    // this.fade2.update();



  };
  // displays the start and about button
  display() {

    push();
    textAlign(CENTER, CENTER);
    this.displayText(this.start.size, this.start.string, this.start.x, this.start.y, this.start.color);
    this.displayText(this.about.size, this.about.string, this.about.x, this.about.y, this.about.color);
    pop();
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

    if (this.heart.appear1) {
      this.displayStartHearts()
    }
    if (this.heart.appear2) {
      this.displayAboutHearts()
    }

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

  mouseDragged() {

  }
  // Pressing start begins the simulation
  // Pressing about opens a dialog box with information
  mousePressed() {
    if (this.mouseIsOverText(this.start.size, this.start.string, this.start.x, this.start.y)) {
      console.log('START');
      this.activateFade = true;
      setTimeout(() => {
        currentState = new Alliance_of_harmony_title(smallHeartIMG);
      }, 4000);

      // currentState = new Alliance_of_harmony_title(flowersPNG);

    } else if (this.mouseIsOverText(this.about.size, this.about.string, this.about.x, this.about.y)) {
      console.log('ABOUT');
      $("#about_box").dialog("open");
    }
  }
}
