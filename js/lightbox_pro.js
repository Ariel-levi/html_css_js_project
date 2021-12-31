// bootstrap צריך 

const lightBox_init = () => {
  createLightBoxHtml();
  declareEventsLightBox();
}

const createLightBoxHtml = () => {
  document.body.innerHTML += `
  <!-- start light box -->
  <div id="light_box" class="light_box">
  <div class="inside_box">
  <button class="btn btn-danger pull-right m-3 light_btn_close">X</button>
  <img src="" >
  </div>
  </div>
  <!-- end light box -->
  `
}

const declareEventsLightBox = () => {

  let close_light_body = document.querySelector(".light_box");
  close_light_body.addEventListener("click", function () {
    document.querySelector("#light_box").style.display = "none"
  })

  let close_light_btn = document.querySelector(".light_btn_close");
  close_light_btn.addEventListener("click", function () {
    document.querySelector("#light_box").style.display = "none"
  })

      // לייצר רשימה שיש בה את כל התמונות עם אטרביוט
    let imgList = document.querySelectorAll("img[data-image]");

    console.log(imgList);
    // לולאה על כל התמונות
    imgList.forEach(itemElem => {
      // גורם שהסמן עכבר יהפוך לאצבע ת
      itemElem.style.cursor = "pointer";
      itemElem.addEventListener("click", function () {
        let light_box = document.querySelector("#light_box");
        // בשביל להציג משתמשים הפעם בפלקס ולא בלוק
        // כדי שהבוקס הפנימי יהיה באמצע
        light_box.style.display = "flex"
        // משנה את מקור התמונה בלייט בוקס למקור של התמונה
        // שלחצנו עליה
        light_box.querySelector("img").src = itemElem.src;
        // alert(itemElem.src); 
      })
    })


}

