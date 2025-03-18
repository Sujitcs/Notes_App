const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Array of colors for different notes
const colors = [" #FFDDC1", "rgb(197, 142, 151)", "rgb(150, 127, 240)", " #C1E1C1", " #ADD8E6", "rgb(248, 119, 248)"," #05f7bb"," #9bfa9b"," #a4e3f5","rgb(116, 246, 142)"];

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  
  // Assign a random background color
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  inputBox.style.backgroundColor = randomColor;

  img.src = "images/delete.png";

  // Append note and delete button
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  inputBox.focus(); // Auto-focus on new note
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

notesContainer.addEventListener("input", function () {
  updateStorage();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
