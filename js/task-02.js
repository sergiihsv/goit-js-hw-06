const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 
const ulEl = document.querySelector("#ingredients");

const createLiEl = ingredients => {
  return ingredients.map(ingredient => {
  const LiEl = document.createElement('li');
  LiEl.textContent = ingredient;
  LiEl.classList.add('item');

  return LiEl;
}
);
}

const elements = createLiEl(ingredients);
ulEl.append(...elements);


