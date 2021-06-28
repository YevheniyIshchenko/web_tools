import { onCreateTask, onDeleteTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
  todoListElem.addEventListener('click', onDeleteTask);
};
