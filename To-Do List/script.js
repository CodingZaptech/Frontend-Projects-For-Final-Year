// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Task text span
    const span = document.createElement('span');
    span.textContent = taskText;
    // Toggle completion on click
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Event listener for Add button
addBtn.addEventListener('click', addTask);

// Event listener for Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
