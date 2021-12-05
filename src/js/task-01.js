/* const getElementItem = document.querySelectorAll('.item');

console.log('Categories: ${getElementItem.length}');

getElementItem.forEach(element => {
    
    const getElementTitle = element.querySelector('h2');
    const getElementLi = element.querySelectorAll('li');

    console.log('Category: ${getElementTitle.textContent}');
    console.log('Elements: ${getElementLi.length}');

})
 */

const categories = document.querySelector("ul#categories");
console.log(
	"Number of categories (НОМЕРА КАТЕГОРИЙ) : ",
	categories.children.length
);
const titleElement = document.querySelectorAll(".item");
titleElement.forEach((element) => {
	console.log("Category/Категория: ", element.firstElementChild.textContent);
	console.log(
		"Elements/Элементы: ",
		element.firstElementChild.nextElementSibling.children.length
	);
});