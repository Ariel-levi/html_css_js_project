createDate();
// burger_init();

function createDate() {
  let dt = new Date();
  document.querySelector("#id_year").innerHTML = dt.getFullYear();
}

function burgerFunction(x) {
  x.classList.toggle("change");
}

function burger_init() {
  let burger_btn = document.querySelector("#burger_btn");
  let nav_burger = document.querySelector("#nav_burger");

  burger_btn.addEventListener("click", function () {
    if (nav_burger.className == "nav_bar_pop") {
      nav_burger.className = " ";
    } else {
      nav_burger.className = "nav_bar_pop";
    }
  });
}
