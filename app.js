document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
  });

  function addTask() {
      const taskText = taskInput.value.trim();
      if (!taskText) return;

      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
      taskItem.style.animation = 'fadeIn 0.3s ease';
      
      const timestamp = new Date().toLocaleString();
      
      taskItem.innerHTML = `
          <div class="check-btn"></div>
          <div class="task-content">
              ${taskText}
              <div class="task-time">${timestamp}</div>
          </div>
          <span class="close-btn"><i class="fas fa-times"></i></span>
      `;

      const checkBtn = taskItem.querySelector('.check-btn');
      const closeBtn = taskItem.querySelector('.close-btn');

      checkBtn.addEventListener('click', () => {
          taskItem.classList.toggle('completed');
          checkBtn.classList.toggle('completed');
      });

      closeBtn.addEventListener('click', () => {
          taskItem.style.animation = 'fadeOut 0.3s ease';
          setTimeout(() => taskItem.remove(), 300);
      });

      taskList.appendChild(taskItem);
      taskInput.value = '';
      taskInput.focus();
  }
});