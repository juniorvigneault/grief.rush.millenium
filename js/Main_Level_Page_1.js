class Main_Level_Page_1 {
  constructor() {
    $("#name_form").hide();
    $("#about_box").hide();

    this.textBox = {
      x: 650,
      y: 900,
      vy: 0,
      speed: -7,
      finaleY: 650
    }

    this.typewriter = new Typewriter();

    this.denial = {
      x: 250,
      y: 350,
      size: 150,
      color: 255,
      showing: false
    }

  }

  update() {
    push();
    line(200, 350, 1000, 350);
    fill(this.denial.color)
    ellipseMode(CENTER);
    ellipse(this.denial.x, this.denial.y, this.denial.size);
    pop();
    ellipse(450, 350, 150);
    ellipse(650, 350, 150);
    ellipse(850, 350, 150);
    ellipse(1050, 350, 150);
    rectMode(CENTER);
    rect(1000, 100, 400, 100, 20, 0, 0, 0);

    this.display();

    this.moveTextBox();

    let d2 = dist(mouseX, mouseY, this.denial.x, this.denial.y)
    if (d2 < this.denial.size / 2) {
      this.denial.color = 0;
      this.toggleDenialText();
    } else {
      this.denial.color = 244;
      this.hideDenialText();
    }

    if (this.denial.showing) {
      this.displayDenialText();
    }

  }

  display() {
    push();
    rectMode(CENTER)
    strokeWeight(1);
    fill(0);
    rect(this.textBox.x, this.textBox.y, 900, 200, 0, 0, 0, 20);
    this.typewriter.display();
    pop();
  }

  toggleDenialText() {
    this.denial.showing = true;
  }

  hideDenialText() {
    this.denial.showing = false;
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

  mousePressed() {
    let d = dist(mouseX, mouseY, this.denial.x, this.denial.y)
    if (d < this.denial.size / 2) {
      currentState = new Main_Level_Page_1();
    }
  }
}
