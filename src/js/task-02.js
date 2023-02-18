const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listForAddingItems = document.getElementById(`ingredients`);

const addListItems = array => {
  const listArray = array.map(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem;
  });
  listForAddingItems.append(...listArray);
};

addListItems(ingredients);

/*Або другий варіант*/

// const addListItems = (array, list) => {
//   array.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     list.appendChild(listItem);
//   });
// };
// addListItems(ingredients, listForAddingItems);