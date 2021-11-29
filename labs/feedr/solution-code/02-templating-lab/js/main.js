// Templating lab

// PART 1

// Clone HTML template (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
// and use it to display the data in the 'favourite' object.

const favourite = {
  name: 'Shakshuka',
  serves: 4,
  meal: 'breakfast',
};

const recipesElement = document.querySelector('.recipes');
const recipeTemplate = document.querySelector('template');

const renderRecipe = (recipe) => {
  recipeClone = recipeTemplate.content.cloneNode(true);

  const nameElement = recipeClone.querySelector('dd:first-of-type');
  const servesElement = recipeClone.querySelector('dd:nth-of-type(2)');
  const mealElement = recipeClone.querySelector('dd:last-of-type');

  const { name, serves, meal } = recipe;

  nameElement.innerText = name;
  servesElement.innerText = serves;
  mealElement.innerText = meal;

  recipesElement.appendChild(recipeClone);
};

renderRecipe(favourite);

// PART 2

// Comment out your template above and create a template function
// that instead displays the contents of the 'favourites' object below.

const favourites = [
  {
    name: 'Shakshuka',
    serves: 4,
    meal: 'breakfast',
  },
  {
    name: 'Black Bean Chili',
    serves: 8,
    meal: 'dinner',
  },
  {
    name: 'Classic Peanut Butter Cookies',
    serves: '3 dozen',
    meal: 'dessert',
  },
];

favourites.forEach((recipe) => {
  renderRecipe(recipe);
});
