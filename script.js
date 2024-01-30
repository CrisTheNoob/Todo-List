// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value !== '') {
      const task = document.createElement("li");
      task.innerText = taskInput.value;
      
      // Mark task as completed
      task.addEventListener("click", function() {
        task.classList.toggle("completed");
      });
      
      // Delete task
      task.addEventListener("dblclick", function() {
        task.remove();
      });
      
      taskList.appendChild(task);
      taskInput.value = '';
    } else {
      alert("Please enter a task!");
    }
  }
  