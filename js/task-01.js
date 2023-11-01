const categoriesAll = document.querySelector("#categories");
const categoriesLength = categoriesAll.children.length;
    console.log(`Number of categories: ${categoriesLength}`);

const itemElement = document.querySelectorAll(".item");
itemElement.forEach((item) => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.lastElementChild.children.length);
});
