// script.js
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return; // Prevent empty tasks

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    // Toggle completed class on click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
