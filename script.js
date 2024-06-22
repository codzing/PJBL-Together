const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', function() {
    // get the value from the input field and create a new list item element
    const taskText = taskInput.value;
    if(taskText == '') {
        alert('Please enter a task');
    }else{
        // create a new list item element and append it to the task list
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // create a delete button element and append it to the task list
        const checkMark = document.createElement('span');
        checkMark.textContent = '✓';
        checkMark.classList.add('check-mark');
        checkMark.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        // append the check mark and delete button to the task list
        newTask.appendChild(checkMark);
        newTask.appendChild(deleteButton);  
        
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});