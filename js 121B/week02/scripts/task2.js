/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Matias Villar';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const placeName = document.getElementById('name');
placeName.innerHTML = myName;
// Step 3: declare and instantiate a variable to hold the current year
const date = new Date();
const year = date.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
const yearPlaceholder = document.getElementById('year');
yearPlaceholder.innerHTML = year;
// Step 5: declare and instantiate a variable to hold the name of your picture
const namePic = 'My Wife and Me';
const myPic = '/images/myphoto.jpeg';
// Step 6: copy your image into the "images" folder
// done!
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const picture = document.querySelector('img').setAttribute('src', myPic);
/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favFoods = ['sushi', 'fries', 'empanadas'];
// Step 2: place the values of the favorite foods variable into the HTML file
const foodPlaceholder = document.querySelector('#food');
favFoods.forEach((food) => {
  foodPlaceholder.innerHTML += ` ${food}`;
});
// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavFood = 'Panda Express';
// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(anotherFavFood);
// Step 5: repeat Step 2
foodPlaceholder.innerHTML = favFoods;

// Step 6: remove the first element in the favorite foods array
favFoods.shift();
// Step 7: repeat Step 2
foodPlaceholder.innerHTML = favFoods;
// Step 8: remove the last element in the favorite foods array
favFoods.pop();
// Step 7: repeat Step 2
foodPlaceholder.innerHTML = favFoods;
