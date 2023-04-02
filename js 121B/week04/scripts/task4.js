/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInfo = {
  // Step 2: Inside of the object, add a property named name with a value of your name as a string
  name: 'Matias',
  // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
  photo: '../../week02/images/myphoto.jpeg',
  // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
  favoriteFoods: ['pizza', 'pasta', 'sushi'],
  // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
  hobbies: ['pickleball', 'coding', 'gaming'],

  // Step 6: Add another property named placesLived with a value of an empty array
  // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

  // Step 8: For each property, add appropriate values as strings
  placesLived: [
    // Step 9: Add additional objects with the same properties for each place you've lived
    { place: 'Tucuman', length: '11 year' },
    { place: 'Santiago De Chile', length: '7 year' },
    { place: 'Salt Lake City', length: '6 year' },
  ],
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const myName = document.getElementById('name');
myName.innerHTML = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const myPhoto = document.getElementById('photo');
myPhoto.src = myInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
myPhoto.alt = myInfo.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach((food) => {
  const li = document.createElement('li');
  li.innerHTML = food;

  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  const ul = document.getElementById('favorite-foods');
  ul.appendChild(li);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.hobbies.forEach((hobby) => {
  const li = document.createElement('li');
  li.innerHTML = hobby;
  // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
  const ul = document.getElementById('hobbies');
  ul.appendChild(li);
});

// Step 8: For each object in the <em>placesLived</em> property:
myInfo.placesLived.forEach((place) => {
  const dt = document.createElement('dt');
  dt.innerHTML = place.place;
  const dd = document.createElement('dd');
  dd.innerHTML = place.length;
  // - Create an HTML <dt> element and put its place property in the <dt> element
  // - Create an HTML <dd> element and put its length property in the <dd> element
  // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
  const dl = document.getElementById('places-lived');
  dl.appendChild(dt);
  dl.appendChild(dd);
});
