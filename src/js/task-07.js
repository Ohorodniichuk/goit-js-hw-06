// <!-- Напиши скрипт, який реагує на зміну значення input#font-size-control 
// (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту. -->
const inputRange = document.getElementById('font-size-control');
const text = document.getElementById('text');
text.style.fontSize = inputRange.value + 'px';
inputRange.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}