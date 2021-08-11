class Meeting_Sam {
  constructor(samIMG, arrowGIF) {
    this.sam = {
      image: samIMG,
      x: 650,
      y: 900,
      vy: 0,
      speed: -5,
      finaleY: 300,
      isMoving: false
    }

    this.textBox = {
      x: 650,
      y: 900,
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

    this.typewriter = new Typewriter();

    typewriter2 = new Typewriter();

    setTimeout(() => {
      this.typewriter.typewrite(`
        “Only people who are capable of loving strongly can also suffer great sorrow,
        but this same necessity of loving serves to counteract their grief and heals
        them.”
        - Leon Toilstoï`, 140, 650);

    }, 1000);

    setTimeout(() => {
      this.typewriter.typewrite(
        ``, 140, 650);
    }, 15000);

    setTimeout(() => {
      this.sam.isMoving = true;
    }, 16000);

    setTimeout(() => {
      this.typewriter.typewrite(
        `Hi...`, 300, 650);
      this.message1 = true;
    }, 18000);

    setTimeout(() => {
      this.toggleTextArrow();
    }, 20000);

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
        `I'm Sam.`, 300, 650);
      this.arrow.isShowing = false;
      setTimeout(() => {
        this.arrow.isShowing = true;
        this.message1 = false;
        this.message2 = true;
      }, 500);
    }
    if (this.message2) {
      this.typewriter.typewrite(
        `What's your name?`, 300, 650);
      setTimeout(() => {
        $("#name_form").dialog("open");
      }, 1500);
      this.message2 = false;
    }
  }
}
