const mainListEl = document.querySelector('#categories');
const arrayOfCategories = mainListEl.children;
const quantityOfCategories = arrayOfCategories.length;
console.log(`Number of categories: ${quantityOfCategories}`);

[...arrayOfCategories].forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});