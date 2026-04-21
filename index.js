const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

keys.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;

  // KEEP ONLY ONE calculate FUNCTION
  const calculate = (n1, operator, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    let result = "";

    if (operator === "add") {
      result = num1 + num2;
    } else if (operator === "subtract") {
      result = num1 - num2;
    } else if (operator === "multiply") {
      result = num1 * num2;
    } else if (operator === "divide") {
      result = num1 / num2;
    }
    return result.toString();
  };

  // Remove depressed state
  Array.from(key.parentNode.children).forEach((k) =>
    k.classList.remove("is-depressed"),
  );

  // NUMBER KEYS
  if (!action) {
    if (
      displayedNum === "0" ||
      previousKeyType === "operator" ||
      previousKeyType === "calculate"
    ) {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }

    calculator.dataset.previousKeyType = "number";
  }

  // OPERATOR KEYS
  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    key.classList.add("is-depressed");

    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = action;
    calculator.dataset.previousKeyType = "operator";
  }

  // DECIMAL KEY
  if (action === "decimal") {
    if (!displayedNum.includes(".")) {
      display.textContent = displayedNum + ".";
    }

    if (previousKeyType === "operator" || previousKeyType === "calculate") {
      display.textContent = "0.";
    }

    calculator.dataset.previousKeyType = "decimal";
  }

  // CLEAR KEY
  if (action === "clear") {
    display.textContent = "0";

    calculator.dataset.firstValue = "";
    calculator.dataset.operator = "";
    calculator.dataset.previousKeyType = "clear";
  }

  // CALCULATE KEY
  if (action === "calculate") {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;

    display.textContent = calculate(firstValue, operator, secondValue);

    // FIX: moved here
    calculator.dataset.previousKeyType = "calculate";
  }
});
