class Start {
  // starting state with start and about buttons
  constructor() {
    // start button
    this.start = {
      x: 650,
      y: 300,
      string: `start`,
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
    // about button
    this.about = {
      x: 650,
      y: 500,
      string: `about`,
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
      height: 400,
      draggable: false,
      closeOnEscape: false,
    });

    this.activateFade = false;

    this.fade = new Fade(0, 2, false, true);


  }



  // calls the display function and the mouseOver to change color
  update() {

    this.display();
    this.mouseOverStartText();
    this.mouseOverAboutText();
    if (this.activateFade) {
      this.fade.update();
    }

  };
  // displays the start and about button
  display() {
    this.displayText(this.start.size, this.start.string, this.start.x, this.start.y, this.start.color);
    this.displayText(this.about.size, this.about.string, this.about.x, this.about.y, this.about.color);
  };

  displayText(size, string, x, y, color = {
    r: 0,
    g: 0,
    b: 0
  }) {
    push();
    fill(color.r, color.g, color.b)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
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
    }

    this.displayText(this.start.size, this.start.string, this.start.x, this.start.y, startColor);

  }

  // turns the about button red if mouse is over
  mouseOverAboutText() {
    let aboutColor = {
      r: 0,
      g: 0,
      b: 0
    };
    if (this.mouseIsOverText(this.about.size, this.about.string, this.about.x, this.about.y)) {
      aboutColor = this.start.mouseOverColor;
    }
    this.displayText(this.about.size, this.about.string, this.about.x, this.about.y, aboutColor);
  }
  // Pressing start begins the simulation
  // Pressing about opens a dialog box with information
  mousePressed() {
    if (this.mouseIsOverText(this.start.size, this.start.string, this.start.x, this.start.y)) {
      console.log('START');
      this.activateFade = true;
      setTimeout(() => {
        currentState = new Alliance_of_harmony_title();
      }, 4000);

      // currentState = new Alliance_of_harmony_title(flowersPNG);

    } else if (this.mouseIsOverText(this.about.size, this.about.string, this.about.x, this.about.y)) {
      console.log('ABOUT');
      $("#about_box").dialog("open");
    }
  }
}
