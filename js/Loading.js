class Loading {
  constructor(loadingCircle) {
    this.loadingIMG = {
      image: loadingCircle,
      x: 650,
      y: 400
    }

    this.displayLoading = false;

    setTimeout(() => {
      this.displayLoading = true
    }, 1000);

    setTimeout(() => {
      currentState = new Meeting_Sam(samIMG, arrowGIF);
    }, 4500);
  }

  update() {

    if (this.displayLoading) {
      this.display();
    }
  }

  display() {

    // display loading diamond
    push();
    imageMode(CENTER);
    image(this.loadingIMG.image, this.loadingIMG.x, this.loadingIMG.y)
    pop();

  }

  mousePressed() {

  }
}
