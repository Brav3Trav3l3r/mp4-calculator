const display = document.querySelector(".display");

const keys = document.querySelectorAll(".key");

keys.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(display.innerHTML)
    display.innerHTML += e.target.value;
  });
});
