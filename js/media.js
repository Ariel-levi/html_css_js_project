window.onload = () => {
  init();
};

const init = () => {
  createImg(img_ar);
  burger_init();
};

const galery = (_img) => {
  let img = document.createElement("img");
  document.querySelector("#id_parent").append(img);
  img.src = `images/${_img}`;
  img.alt = `Img ${_img}`;
  img.setAttribute("data-image", "")
};

const img_ar = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
  "pic-7.jpg",
  "pic-8.jpg",
  "pic-9.jpg"
];

const createImg = (_ar) => {
  _ar.forEach((item) => {
    galery(item);
  });
  lightBox_init();
};
