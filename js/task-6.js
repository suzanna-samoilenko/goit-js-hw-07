function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', creatMarkup);
btnDestroy.addEventListener('click', destroyBoxes);

function creatMarkup() {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  createBoxes(input.value);
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const boxesItems = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '44px 0';
    boxesItems.push(div);

    size += 10;
  }
  boxes.append(...boxesItems);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}
