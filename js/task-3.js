const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

function inputChange(event) {
  const inputValue = event.target.value;

  outputEl.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}

inputEl.addEventListener('input', inputChange);
