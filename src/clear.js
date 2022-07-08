/* eslint-disable */
import { setStorage } from './storage.js';
import { deleteTask } from './crud.js';

export { clearAll };

const clearAll = () => {
  const localData = JSON.parse(localStorage.getItem('todo'));
  const taskContainer = document.querySelectorAll('.list-item');
  taskContainer.forEach((e) => {
    if (e.classList.contains('list-selected-item')) {
      deleteTask(e);
    }
  });
};