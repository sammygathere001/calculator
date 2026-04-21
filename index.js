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

    if (firstValue && operator) {
      const calculate = (n1, op, n2) => {
        const a = parseFloat(n1);
        const b = parseFloat(n2);

        if (op === "add") return a + b;
        if (op === "subtract") return a - b;
        if (op === "multiply") return a * b;
        if (op === "divide") return a / b;
      };

      display.textContent = calculate(firstValue, operator, secondValue);
    }

    calculator.dataset.previousKeyType = "calculate";
  }
});
