const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
//Collects the data form the HTML file//
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    //This checks if a key is being pressed//
    if (!action) {
      console.log("number key!");
    }
    //When any number key is pressed...(number key) is printed on the console//
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
    }
    //When any of the 4 operator keys are pressed...the output(operator key) is printed in the console//

    if (action === "decimal") {
      console.log("decimal key!");
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "equal") {
      console.log("equal key!");
    }
    //This checks if the decimal,clear(AC), and the equal key is pressed...then prints the output in the console
  }
});
