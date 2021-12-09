const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ulEl = document.querySelector("#ingredients");


const elements = ingredients.map(ingredient => {
  
const createLiEl = document.createElement('li');
createLiEl.textContent = '';
createLiEl.classList.add('item');

  return createLiEl;
}
)
  

/* elements(ingredients); */
ulEl.append(...elements);



/* const createLiEl = document.createElement('li');
createLiEl.textContent = '';
createLiEl.classList.add('item'); */








console.log(ulEl);



