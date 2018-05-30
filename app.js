const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const ClearBtn = document.querySelector('clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

LoadEventListeners();

function LoadEventListeners() {
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  if (taskInput.value === '') {
    console.log('Add task');
  }
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = '';
  e.preventDefault();
}
