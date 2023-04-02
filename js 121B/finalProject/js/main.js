const searchBtn = document.querySelector('.search-btn');
const mealsList = document.querySelector('.meals-cards');
const cardDetailsContent = document.querySelector('.card-details__content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');
const spanTitle = document.getElementById('spanTitle');
const date = new Date();
const year = date.getFullYear();
const yearFooter = document.getElementById('yearFooter');

yearFooter.innerHTML = year;
// event listeners
searchBtn.addEventListener('click', getMealList);
mealsList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', closeBtn);

// get meal list that matches with the ingredients

async function getFoodData(searchInputText) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function getMealList() {
  let searchInputText = document.getElementById('searchInput').value.trim();
  const foodData = getFoodData(searchInputText);
  const errorNotFound = document.querySelector('.notFound');
  let html = '';
  foodData.then((data) => {
    if (data.meals) {
      data.meals.forEach((meal) => {
        html += `
      <div class="meal-card" id="${meal.idMeal}">
       <div class="meal-img">
         <img src="${meal.strMealThumb}" alt="Meal 1" />
       </div>
       <div class="meal-name">
         <h3>${meal.strMeal}</h3>
         <a href="#" class="recipe-btn">Get Recipe</a>
       </div>
    </div>
       `;
      });
      spanTitle.classList.remove('n-display');
      errorNotFound.classList.add('n-display');
    } else {
      errorNotFound.classList.remove('n-display');
    }

    mealsList.innerHTML = html;
  });
}

// get meal's recipe

async function getMealRecipe(e) {
  if (e.target.classList.contains('recipe-btn')) {
    let mealItem = e.target.parentElement.parentElement;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.id}`)
      .then((response) => response.json())
      .then((data) => mealRecipe(data.meals));
  }
}

function mealRecipe(meal) {
  meal = meal[0];
  console.log(meal);
  let html = `
  <h2 class="recipe-title">${meal.strMeal}</h2>
  <p class="recipe-category">${meal.strCategory}</p>
  <div class="instructions">
    <h3>instructions:</h3>
    <p>
      ${meal.strInstructions}
    </p>
  </div>
  <div class="recipe-img">
    <img src="${meal.strMealThumb}" alt="Meal 1" />
  </div>
  <div class="recipe-link">
    <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
  </div>`;
  cardDetailsContent.innerHTML = html;
  cardDetailsContent.parentElement.classList.add('displayRecipe');
}

function closeBtn() {
  cardDetailsContent.parentElement.classList.remove('displayRecipe');
}
