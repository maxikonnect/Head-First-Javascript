const clickMe = document.querySelector(".clickMe");
let display = document.querySelector(".display");
let imgImage = document.getElementById("img-image");

document.addEventListener("DOMContentLoaded", () => {
  alert("You are welcome");
  clickMeToAct();
});

function clickMeToAct() {
  clickMe.addEventListener("click", () => {
    const name = prompt("Enter Your name: ");
    if (name) {
      alert("Good to meet you " + name);
      imgImage.src = "./assets/images/rock_happy.png";
    }
  });
}
