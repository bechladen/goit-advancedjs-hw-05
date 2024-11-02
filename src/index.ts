import { concatenation } from './concatenation';

const input = document.querySelector('input')!;
const button = document.querySelector('button')!;

if (input && button) {
  button.addEventListener('click', () => {
    concatenation('Hello ', input.value);
  });
}
