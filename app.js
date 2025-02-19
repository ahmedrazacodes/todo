




/* function add (){
    let text = document.querySelector("#input")
    let taskText = text.value.trim();
    if(taskText === ""){
    let li = document.createElement("li")
    li.innerHTML = taskText
    }

} */


    function add() {
        let taskInput = document.getElementById("input");
        let taskText = taskInput.value.trim();
        if (taskText === "") return;
        
        let li = document.createElement("li");
        let hr = document.createElement("hr")
        li.innerHTML = `${taskText} 
            <button onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Remove</button>`;
        document.getElementById("task-list").appendChild(li);
/*         document.getElementById("task-list").appendChild(hr); */
        
        taskInput.value = "";
    }
    
    function removeTask(button) {
        button.parentElement.remove();
    }
    
    function editTask(button) {
        let newTask = prompt("Edit your task:", button.parentElement.firstChild.textContent.trim());
        if (newTask !== null && newTask.trim() !== "") {
            button.parentElement.firstChild.textContent = newTask;
        }
    }















/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 20px;
        }
        #todo-container {
            max-width: 400px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }
        button {
            margin-left: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="todo-container">
        <h2>To-Do List</h2>
        <input type="text" id="task" placeholder="Add a new task">
        <button onclick="addTask()">Add</button>
        <ul id="task-list"></ul>
    </div>
    
    <script>
        function addTask() {
            let taskInput = document.getElementById("task");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let li = document.createElement("li");
            li.innerHTML = `${taskText} 
                <button onclick="editTask(this)">Edit</button>
                <button onclick="removeTask(this)">Remove</button>`;
            document.getElementById("task-list").appendChild(li);
            
            taskInput.value = "";
        }
        
        function removeTask(button) {
            button.parentElement.remove();
        }
        
        function editTask(button) {
            let newTask = prompt("Edit your task:", button.parentElement.firstChild.textContent.trim());
            if (newTask !== null && newTask.trim() !== "") {
                button.parentElement.firstChild.textContent = newTask;
            }
        }
    </script>
</body>
</html> */