// TODO: this file! :

// Number Banks with Sorting
// Unit 2 - Odds and Events Workshop
let numBank = [];
// Set up odds and evens banks as arrays
let oddsBank = [];
let evensBank = [];
document.addEventListener("DOMContentLoaded", () => {
  // event.preventDefault(event);
  // First, add event handling for CLICK on "add number button"
  const form = document.querySelector("form");
  // const addNum = document.querySelector("#number");
  const addNumInput = document.querySelector('input[name="number"]');

  // Set up number bank as an array

  const odds = document.querySelector("#odds > output");
  const evens = document.querySelector("#evens > output");
  const numBankOutput = document.querySelector("#numberBank > output");
  // Select the button for sorting one number
  const sortOneNum = document.querySelector("#sortOne");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const addNumInputValue = addNumInput.value;
    numBank.push(addNumInputValue);
    numBankOutput.textContent = numBank;
    console.log("Number bank content", numBank);
    // return numBank;
  }); // add fn for sorting last item from numBank
  // document.querySelector("#sortOne").
  sortOneNum.addEventListener("click", () => {
    numBank[0] % 2 === 0
      ? evensBank.push(numBank[0])
      : oddsBank.push(numBank[0]);
    numBank.shift();
    evens.textContent = evensBank;
    odds.textContent = oddsBank;
    numBankOutput.textContent = numBank;
  });

  // Select the button for sorting all numbers
  const sortAllNums = document.querySelector("#sortAll");
  sortAllNums.addEventListener("click", () => {
    numBank.forEach((num) =>
      num % 2 === 0 ? evensBank.push(num) : oddsBank.push(num)
    );
    numBank = [];
    evens.textContent = evensBank;
    odds.textContent = oddsBank;
    numBankOutput.textContent = numBank;
  });

  // const oddsSection = document.querySelector("#odds");
  // const evensSection = document.querySelector("#evens");

  // Accept and parse user input
  //Then add functionality to move input number into number bank

  //Then add function to sort number bank contents into odds and evens.

  // "Add Number" button
});
