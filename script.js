console.log("Week 5 - Homework - Counter - Add-ons");

// Hand-in assignment
// A. Create a counter
// a. Should start at 0
// b. Make a function to increase the counter
// c. Make a function to decrease the counter
// d. Number should increase when hitting ‘+ʼ
// e. Number should decrease when hitting ‘-ʼ
// B. Bonus: Add a reset button to set counter to 0

// Optional add-ons to the assignment (week4 - homework - Counter)
// Let's revisit our counter from the homework and make it and lile bit more
// complex!
// 1. When the counter goes to 0, it shouldn’t be possible to decrease the
// number anymore.
// 2. Add a buon that resets the number to zero underneath your counter.
// 3. Add a top limit to your counter and show an alert when the user reaches
// that number. It should tell the user that they have reached the limit.

const mainElement = document.querySelector("main");
const createNewOuterDivElement = document.createElement("div");
mainElement.appendChild(createNewOuterDivElement);

const createFirstInnerDivElement = document.createElement("div");
createNewOuterDivElement.appendChild(createFirstInnerDivElement);

const createSecondInnerDivElement = document.createElement("div");

createNewOuterDivElement.classList.add("div_outer_container", "flex-container");
createFirstInnerDivElement.classList.add("div_first_inner_container", "flex-container");
createSecondInnerDivElement.classList.add("div_second_inner_container", "flex-container");

const createPElementToDisplayResult = document.createElement("p");
createPElementToDisplayResult.classList.add("display_result", "flex-container");

const createPlusButton = document.createElement("button");
const createMinusButton = document.createElement("button");
const createResetButton = document.createElement("button");

createFirstInnerDivElement.appendChild(createPElementToDisplayResult);

createFirstInnerDivElement.appendChild(createSecondInnerDivElement);
createSecondInnerDivElement.appendChild(createPlusButton);
createSecondInnerDivElement.appendChild(createMinusButton);
createSecondInnerDivElement.appendChild(createResetButton);

let displayValue = 0;
const RESET_VALUE = 0;
const TOP_LIMIT_VALUE = 20;

createPElementToDisplayResult.textContent = `${displayValue}`;
createPlusButton.textContent = "+";
createMinusButton.textContent = "-";
createResetButton.textContent = "Reset";

const updateDisplayCountValue = () => createPElementToDisplayResult.textContent = displayValue;

const resetDisplayCountValue = () => {
  createPElementToDisplayResult.textContent = RESET_VALUE;
  displayValue = RESET_VALUE;
  return displayValue;
};

const addCountValue = (num) => {
  if (displayValue >= TOP_LIMIT_VALUE) {
    console.log(`Value is ${displayValue}, you  have reached the top limit value - ${TOP_LIMIT_VALUE} can not increase the number anymore!`);
    alert(`Value is ${displayValue}, you  have reached the top limit value - ${TOP_LIMIT_VALUE} can not increase the number anymore!`);
  }
  else {
    displayValue += num;
    updateDisplayCountValue();
  }
};

const subtractCountValue = (num) => {
  if (displayValue > 0) {
    displayValue -= num;
  }
  else {
    console.log(`Value is ${displayValue}, you can not decrease the number anymore!`);
    alert(`Value is ${displayValue}, you can not decrease the number anymore!`);
  }

  updateDisplayCountValue();
};

createPlusButton.addEventListener("click", () => { addCountValue(1); }, false);
createMinusButton.addEventListener("click", () => { subtractCountValue(1); }, false);
createResetButton.addEventListener("click", () => { resetDisplayCountValue(); }, false);
