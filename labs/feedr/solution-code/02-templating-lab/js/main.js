// Templating lab

// PART 1

// Create a template literal and use it to display the data in the 'favourite' object.
// Use the following structure for the HTML elements you create:
// div (class: recipe)
//  |_ div
//    |_ span (class: label)
//    |_ span

const favourite = {
  name: 'Shakshuka',
  serves: 4,
  meal: 'breakfast',
};

// const favouriteTemplate = `
//   <div class="recipe">
//     <div><span class="label">Name: </span>${favourite.name}</div>
//     <div><span class="label">Serves: </span>${favourite.serves}</div>
//     <div><span class="label">Meal: </span>${favourite.meal}</div>
//   </div>`;

// $(function() {
//   $('.recipes').append(favouriteTemplate);
// });

// PART 2

// Comment out your template above and create a template function
// that instead displays the contents of the 'favourites' object below.

const favourites = {
  recipe: [
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
  ],
};

let template = function (favourite) {
  return `
    <div class="recipe">
      <div><span class="label">Name: </span>${favourite.name}</div>
      <div><span class="label">Serves: </span>${favourite.serves}</div>
      <div><span class="label">Meal: </span>${favourite.meal}</div>
    </div>`;
};

favourites.recipe.forEach(function (favourite) {
  $('.recipes').append(template(favourite));
});

// BONUS

// In index.html, uncomment the div element containing the lasagne recipe
// (lines 16-20).
// Update your code above so only the 3 recipes in the `favourites` variable
// are displayed, and the lasagne recipe is removed from the DOM.

/*
let content = '';
favourites.recipe.forEach(function (favourite) {
  content += (template(favourite));
});
$('.recipes').html(content)
 */
