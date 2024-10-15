const categoriesItem = [...document.querySelectorAll('#categories .item')];

const categoriesAll = categoriesItem.length;

console.log(`Number of categories: ${categoriesAll}`);

categoriesItem.forEach(element => {
  const categoriesTitle = element.querySelector('h2').textContent;
  const categoriesLength = element.querySelectorAll('li').length;

  console.log(`Category: ${categoriesTitle}`);
  console.log(`Elements: ${categoriesLength}`);
});
