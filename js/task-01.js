const categoriesEl = document.querySelector("ul#categories");
console.log( "Number of categories : ", categoriesEl.children.length
);

const titleEl = document.querySelectorAll(".item");
titleEl.forEach((element) => {
	console.log("Category:", element.firstElementChild.textContent);
	console.log("Elements: ", element.firstElementChild.nextElementSibling.children.length
	);
});
