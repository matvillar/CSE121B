/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const currDate = new Date();
// Step 2: Declare another variable to hold the day of the week
const dayOfWeek = currDate.getDay();
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
// Step 4: Declare a variable to hold a message that will be displayed
let message = '';
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek > 0 && dayOfWeek < 6) {
  message = 'Hang in there!';
} else {
  // Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
  message = 'Woohoo! It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let newMessage = '';
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
  case 0:
    newMessage = 'Sunday';
    break;
  case 1:
    newMessage = 'Monday';
    break;
  case 2:
    newMessage = 'Tuesday';
    break;
  case 3:
    newMessage = 'Wednesday';
    break;
  case 4:
    newMessage = 'Thursday';
    break;
  case 5:
    newMessage = 'Friday';
    break;
  case 6:
    newMessage = 'Saturday';
    break;
  default:
    newMessage = 'Invalid day of week';
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
const message1 = document.getElementById('message1');
message1.textContent = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
const message2 = document.getElementById('message2');
message2.textContent = newMessage;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element

// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temples) {
  temples.forEach((temple) => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const h4 = document.createElement('h4');
    h4.textContent = temple.location;
    const h42 = document.createElement('h4');
    h42.textContent = temple.dedicated;
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h42);
    article.appendChild(img);
    document.getElementById('temples').appendChild(article);
  });
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
  const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
  const response = await fetch(url);
  const responseToJson = await response.json();
  templeList = responseToJson;
  output(templeList);
}
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
getTemples();
// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  document.getElementById('temples').innerHTML = '';
}
// Step 8: Declare a function named sortBy that does the following:

const sortByOpt = document.getElementById('sortBy');
// const sortByValue = sortByOpt.value;
sortByOpt.addEventListener('change', sortBy);

function sortBy() {
  reset();
  templeList.sort((a, b) => {
    if (sortByOpt.value === 'templeNameAscending') {
      if (a.templeName < b.templeName) {
        return -1;
      }
      if (a.templeName > b.templeName) {
        return 1;
      }
      return 0;
    }

    if (sortByOpt.value === 'templeNameDescending') {
      if (a.templeName > b.templeName) {
        return -1;
      }
      if (a.templeName < b.templeName) {
        return 1;
      }
      return 0;
    }
  });
  output(templeList);
}

// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
