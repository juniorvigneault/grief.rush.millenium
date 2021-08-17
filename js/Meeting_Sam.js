class Meeting_Sam {
  constructor(samIMG, arrowGIF) {
    this.sam = {
      image: samIMG,
      x: 400,
      y: 900,
      vy: 0,
      speed: -7,
      finaleY: 300,
      isMoving: false
    }

    this.textBox = {
      x: 400,
      y: 2300,
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

    this.typewriter = new Typewriter();

    typewriter2 = new Typewriter();



    setTimeout(() => {
      this.sam.isMoving = true;
    }, 1000);

    setTimeout(() => {
      this.typewriter.typewrite(
        `Hi...`, 200, 650);
      this.message1 = true;
    }, 4500);

    setTimeout(() => {
      this.toggleTextArrow();
    }, 5000);

    $(`#name_form`).dialog({
      buttons: {
        "ok": function() {
          $(this).dialog(`close`);
          userName = $(`#nameInput`).val();
          $(".user_name").text(userName);
          this.message3 = true;
          console.log(this.message3);
          currentState = new Meeting_Sam2(samIMG, arrowGIF);
        }
      },
      autoOpen: false,
      resizable: false,
      position: {
        my: "center",
        at: "center",
        of: window
      },
      height: 200,
      width: 400,
      draggable: false,
      closeOnEscape: false,
    });

    $(`.ui-dialog-titlebar-close`).remove();

  }

  update() {
    if (this.sam.isMoving) {
      this.moveSam();
    }
    this.displaySam();
    this.display();
    this.moveTextBox();


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

  moveSam() {
    this.sam.y = this.sam.y += this.sam.vy;

    if (this.sam.y < this.sam.finaleY) {
      this.sam.vy = 0;
    } else {
      this.sam.vy = this.sam.speed;
    }
  }

  moveTextBox() {
    this.textBox.y = this.textBox.y += this.textBox.vy;

    if (this.textBox.y < this.textBox.finaleY) {
      this.textBox.vy = 0;
    } else {
      this.textBox.vy = this.textBox.speed;
    }
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
        `I'm Sam.`, 200, 650);
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message1 = false;
        this.message2 = true;
      }, 1000);
    }
    if (this.message2) {
      this.typewriter.typewrite(
        `What's your name?`, 200, 650);
        this.arrow.isShowing = false;

      setTimeout(() => {
        $("#name_form").dialog("open");
      }, 1500);
      this.message2 = false;
    }
  }
}
