const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    if (!action) {
      console.log("number key!");
    }
    if (
      action === "addition" ||
      action === "multiplication" ||
      action === "division" ||
      action === "subtraction"
    ) {
      console.log("operator key!");
    }
    if (action === "decimal") {
      console.log("decimal key!");
    }
    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "equal") {
      console.log("equal key!");
    }

    

  }
});
