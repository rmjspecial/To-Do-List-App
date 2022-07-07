import './style.css';

const toDoData = [
  {
    description: 'study javascript in-depth',
    completed: false,
    index: 1,
  },
  {
    description: 'take daily walk',
    completed: true,
    index: 2,
  },
  {
    description: 'watch youtube video',
    completed: false,
    index: 3,
  },
  {
    description: 'do my house chores',
    completed: false,
    index: 4,
  },
];

const data = () => {
  const content = document.querySelector('.lists');
  for (let i = 0; i < toDoData.length; i += 1) {
    const todo = document.createElement('li');
    todo.classList.add('list-info');
    todo.innerHTML = `
       <div class="check">
  <input type="checkbox">
  <h2>${toDoData[i].description}</h2>
  </div>
  <div class="icon">
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
    `;
    content.appendChild(todo);
  }
};

data();