const display = document.querySelector(".display");
const keys = document.querySelectorAll(".key");
const actions = document.querySelectorAll(".action");
const operators = document.querySelectorAll(".operators");

/*

  -keys
    * when value (0), cannot add another 0
    * cannot add simultaneous (.)
    
  -operators
    * cannot add simaltaneous operators

  -actions
    * if action = equal, check if last index is operator, if so remove it and then eval(str)
    * if action = delete, if length is 1 => hard code 0, else => remove last index
    * if action = reset, hard code 0
  
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
