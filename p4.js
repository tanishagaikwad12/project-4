
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create and append the close button
    let spanClose = document.createElement("span");
    spanClose.innerHTML = "\u00d7";
    spanClose.classList.add("close");
    li.appendChild(spanClose);

    // Create and append the edit button
    let spanEdit = document.createElement("span");
    spanEdit.innerHTML = "\u270E"; // Pencil icon
    spanEdit.classList.add("edit");
    li.appendChild(spanEdit);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();

 }else if (e.target.classList.contains("close")) { // Close button
  e.target.parentElement.remove();
  saveData();
} else if (e.target.classList.contains("edit")) { // Edit button
  editTask(e.target.parentElement);
}
}, false);

function editTask(listItem) {
  let newTask = prompt("Edit your task:", listItem.firstChild.nodeValue);
  if (newTask) {
    listItem.firstChild.nodeValue = newTask;
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();




