/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function takeNums(number1, number2) {
  // Step 2: In the function, return the sum of the parameters number1 and number2
  return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
  const form1 = document.getElementById('addend1');
  const form2 = document.getElementById('addend2');
  const showResult = document.getElementById('sum');

  const form1Value = parseInt(form1.value);
  const form2Value = parseInt(form2.value);
  const sum = takeNums(form1Value, form2Value);
  // Step 4: Assign the return value to an HTML form element with an ID of sum

  showResult.value = sum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addNums = document.getElementById('addNumbers');
addNums.addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function takeAndSubstract(num1, num2) {
  return num1 - num2;
}

function subtractNumbers() {
  const minuend = document.getElementById('minuend');
  const subtrahend = document.getElementById('subtrahend');
  const showResult = document.getElementById('difference');

  const minuendValue = parseInt(minuend.value);
  const subtrahendValue = parseInt(subtrahend.value);
  const difference = takeAndSubstract(minuendValue, subtrahendValue);

  showResult.value = difference;
}

const subtractNums = document.getElementById('subtractNumbers');
subtractNums.addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function takeAndMultiply(num1, num2) {
  return num1 * num2;
}

function multiplyNumbers() {
  const factor1 = document.getElementById('factor1');
  const factor2 = document.getElementById('factor2');
  const showResult = document.getElementById('product');

  const factor1Value = parseInt(factor1.value);
  const factor2Value = parseInt(factor2.value);
  const product = takeAndMultiply(factor1Value, factor2Value);

  showResult.value = product;
}

const multiplyNums = document.getElementById('multiplyNumbers');
multiplyNums.addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function takeAndDivide(num1, num2) {
  return num1 / num2;
}

function divideNumbers() {
  const dividend = document.getElementById('dividend');
  const divisor = document.getElementById('divisor');
  const showResult = document.getElementById('quotient');

  const dividendValue = parseInt(dividend.value);
  const divisorValue = parseInt(divisor.value);
  const quotient = takeAndDivide(dividendValue, divisorValue);

  showResult.value = quotient;
}

const divideNums = document.getElementById('divideNumbers');
divideNums.addEventListener('click', divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.
/*  ****************** ALL IS WORKING! ************** */
/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();

// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const year = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
const showYear = document.getElementById('year');
showYear.innerHTML = year;
/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const arr = Array.from({ length: 25 }, (_, i) => i + 1);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const htmlArray = document.getElementById('array');
htmlArray.innerHTML = arr;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = arr.filter((num) => {
  return num % 2 === 1;
});
const oddsNum = document.getElementById('odds');
oddsNum.innerHTML += odds + ',  ';
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = arr.filter((num) => {
  return num % 2 === 0;
});
const evensNum = document.getElementById('evens');
evensNum.innerHTML += evens + ',  ';
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumArray = arr.reduce((acc, currNum) => {
  return acc + currNum;
}, 0);
const sumOfArray = document.getElementById('sumOfArray');
sumOfArray.innerHTML = sumArray;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied = arr.map((num) => {
  return num * 2;
});
const multipliedNum = document.getElementById('multiplied');
multipliedNum.innerHTML += multiplied + ',  ';
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfArrayMultiplied = multiplied.reduce((acc, currNum) => {
  return acc + currNum;
}, 0);
const sumOfMultiplied = document.getElementById('sumOfMultiplied');
sumOfMultiplied.innerHTML = sumOfArrayMultiplied;
