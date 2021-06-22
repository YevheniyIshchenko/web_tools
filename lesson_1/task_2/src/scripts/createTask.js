import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = (e) => {
  const deleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (deleteBtn) {
    const task = e.target.dataset.id;
    deleteTask(task)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};

// algo
// 1.Prepare data
// 2. Write data to database
// 3. Readnew data from server
// 4. Save new data to front-end storage
// 5. Updated UI based on new data
