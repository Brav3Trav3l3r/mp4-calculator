const display = document.querySelector(".display");
const keys = document.querySelectorAll(".key");
const actions = document.querySelectorAll(".action");
const operators = document.querySelectorAll(".operators");

/*
  -default value is 0
  -if length is 1 && value is "0" 
      * if clicked a number replace 0 
      * if click 0 dont add
  - operators  
    * if last index is operator click on operator will not work 
    * 
    *
  
  - if last index is not number remove it

*/

keys.forEach((element) => {
  element.addEventListener("click", (e) => {
    if ((display.innerHTML.length = 1 && display.innerHTML == "0")) {
      if (e.target.value === "0") {
        return display.innerHTML;
      }

      return (display.innerHTML = e.target.value);
    }

    if (
      display.innerHTML[display.innerHTML.length - 1] === "." &&
      e.target.value === "."
    ) {
      return display.innerHTML;
    }

    return (display.innerHTML = display.innerHTML + e.target.value);
  });
});

operators.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (
      display.innerHTML[display.innerHTML.length - 1] === "-" ||
      display.innerHTML[display.innerHTML.length - 1] === "+" ||
      display.innerHTML[display.innerHTML.length - 1] === "*"
    ) {
      console.log(typeof display.innerHTML[display.innerHTML.length - 1]);
      return display.innerHTML;
    }
    return (display.innerHTML += e.target.value);
  });
});

actions.forEach((element) => {
  element.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "equal":
        if (
          display.innerHTML[display.innerHTML.length - 1] === "-" ||
          display.innerHTML[display.innerHTML.length - 1] === "+" ||
          display.innerHTML[display.innerHTML.length - 1] === "*"
        ) {
          display.innerHTML = display.innerHTML.slice(
            0,
            display.innerHTML.length - 1
          );
        }
        display.innerHTML = eval(display.innerHTML);
        break;
      case "delete":
        if (display.innerHTML.length === 1) {
          display.innerHTML = 0;
        } else {
          display.innerHTML = display.innerHTML.slice(
            0,
            display.innerHTML.length - 1
          );
        }
        break;
      case "reset":
        display.innerHTML = 0;
        break;
    }
  });
});
