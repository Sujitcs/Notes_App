const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Array of colors for different notes
const colors = ["#FFDDC1", "#FFC0CB", "#FFEB3B", "#C1E1C1", "#ADD8E6", "#D8BFD8"];

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
