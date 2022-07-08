import './style.css';
import { addTodo } from './crud.js';

const textInput = document.getElementById('text-input');

textInput.addEventListener('keydown', (i) => {
  if (i.key === 'Enter' && textInput.value) {
    addTodo(textInput.value);
    textInput.value = null;
  }
});