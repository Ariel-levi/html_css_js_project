window.onload = () => {
  init();
};

const init = () => {
  burger_init();
};

const checkEmail = (e) => {
  e.preventDefault();
  const email = document.querySelector("#id_email").value;
  const spanAlert = document.querySelector("#id_spanEmail");
  const check = /\S+@\S+\.\S+/;

  if (check.test(email)) {
    id_send.submit();
    alert("Email is Sent 😉");
  } else {
    spanAlert.classList.remove("spanEmail");
    console.log("email not valide");
  }
};
