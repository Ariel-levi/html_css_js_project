window.onload = function () {
  AOS.init();
  burger_init();

  new Banner(
    "#id_left_banners",
    "right",
    "icon4.png",
    "Building design",
    "Building design refers to the broadly based architectural, engineering and technical applications to the design of buildings"
  );
  new Banner(
    "#id_left_banners",
    "right",
    "icon6.png",
    "Building engineers",
    "Building engineering typically includes the services of electrical, mechanical and structural engineers."
  );
  new Banner(
    "#id_right_banners",
    "left",
    "icon5.png",
    "Building designer",
    "In many places, building codes and legislation of professions allow persons to design single family residential buildings and in some cases light commercial"
  );
  new Banner(
    "#id_right_banners",
    "left",
    "icon7.png",
    "Prices",
    "We bring in the best Prices there is"
  );
};
