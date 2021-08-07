class Alliance_of_harmony_title {

  constructor() {
    this.text = {
      alliance: {
        string: `Alliance`,
        size: 75,
        x: 300,
        y: -100,
        vx: 0,
        vy: 0,
        speed: .75,
        finaleY: 200
      },
      of: {
        string: `of`,
        size: 75,
        x: 1500,
        y: 310,
        vx: 0,
        vy: 0,
        speed: -3.4,
        finaleX: 145
      },
      harmony: {
        string: `Harmony`,
        size: 150,
        x: 580,
        y: 900,
        vx: 0,
        vy: 0,
        speed: -1.14,
        finaleY: 450
      }

      this.start = {
        x: 650,
        y: 680,
        string: `play`,
        size: 40,
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
    }
    this.fade = new Fade(255, 2, true, false);

    this.displayPlay = false;

    setTimeout(() => {
      this.displayPlay = true;
    }, 7000);
  }

  update() {
    if(this.displayPlay) {
      this.playText();
      this.fade.update();
    }
    this.display();
    this.moveAllianceText();
    this.moveOfText();
    this.moveHarmonyText();


  }

  display() {
    push();
    textAlign(CENTER, CENTER)
    textSize(this.text.alliance.size);
    textFont(obrigeFONT);
    text(this.text.alliance.string, this.text.alliance.x, this.text.alliance.y)
    text(this.text.of.string, this.text.of.x, this.text.of.y)
    textSize(this.text.harmony.size);
    text(this.text.harmony.string, this.text.harmony.x, this.text.harmony.y);
  }

  playText(){
    push();
    textFont('Futura')
    textSize(40);
    textAlign(CENTER,CENTER)
    text(`play`, 650, 680)
    pop();
  }

  moveAllianceText(){
    this.text.alliance.y = this.text.alliance.y += this.text.alliance.vy;

    if (this.text.alliance.y > this.text.alliance.finaleY){
      this.text.alliance.vy = 0;
    }
    else {
      this.text.alliance.vy = this.text.alliance.speed;
    }
  }

  moveOfText(){
    this.text.of.x = this.text.of.x += this.text.of.vx;

    if (this.text.of.x < this.text.of.finaleX){
      this.text.of.vx = 0;
    }
    else {
      this.text.of.vx = this.text.of.speed;
    }
  }

  moveHarmonyText(){
    this.text.harmony.y = this.text.harmony.y += this.text.harmony.vy;

    if (this.text.harmony.y < this.text.harmony.finaleY){
      this.text.harmony.vy = 0;
    }
    else {
      this.text.harmony.vy = this.text.harmony.speed;
    }
  }


  mousePressed() {

  }
}
