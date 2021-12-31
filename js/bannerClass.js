class Banner {
  constructor(_parent, _aosside, _img, _title, _para) {
    this.parent = _parent;
    this.side = _aosside;
    this.img = _img;
    this.title = _title;
    this.para = _para;

    this.render();
  }
  render() {
    let side;
    let div = document.createElement("div");
    div.className = "p-3 mt-5";
    document.querySelector(this.parent).append(div);

    if (this.side == "right") {
      side = "flip-left";
    } else {
      side = "flip-right";
    }

    div.innerHTML = `
      <div class="box p-3 shadow" data-aos="${side}" data-aos-duration="1500" data-aos-delay="300">
      <img src="images/${this.img}" class="w-75 mb-3" alt="banner">
      <h3 class="mb-3">${this.title}</h3>
      <p>
        ${this.para}
      </p>
      </div>
    `;
  }
}

// סוגיי אנימצייה

// flip-left

// flip-right

// fade-right

// fade-left
