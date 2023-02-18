// const getUserNames = users => users.map(user => user.name);

const categoriesAndElements = () => {
    const categories = document.querySelectorAll('.item');
    console.log(`Number of categories: ${categories.length}`);
  
    categories.forEach(element => {
      console.log(`Category: ${element.querySelector('h2').textContent}`);
      console.log(`Elements: ${element.querySelectorAll('li').length}`);
    });
  };
  
  categoriesAndElements();