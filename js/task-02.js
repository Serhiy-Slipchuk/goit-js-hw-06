const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = [];

ingredients.forEach(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  items.push(item);
});

const listEl = document.querySelector('#ingredients');
listEl.append(...items);
