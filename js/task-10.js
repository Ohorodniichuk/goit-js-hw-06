function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let sizeBasic = 30;

buttonCreate.addEventListener('click', renderAmount);
buttonDestroy.addEventListener('click', destroyBoxes);

function renderAmount() {
  const amount = +document.querySelector('#controls>input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let divBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let sizeBoxes = sizeBasic;
    sizeBasic += 10;
    let color = getRandomHexColor();
    let div = document.createElement('div');
    div.style.cssText = `width: ${sizeBoxes}px; height: ${sizeBoxes}px; background-color: ${color};`;
    divBoxes.appendChild(div);
  }
  boxes.appendChild(divBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}