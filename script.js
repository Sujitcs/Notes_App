const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add event listener for creating a new note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";

  // Append note and delete button
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  inputBox.focus(); // Auto-focus on the new note
  updateStorage();
});

// Event listener for deleting and updating notes
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

// Update localStorage when typing in a note
notesContainer.addEventListener("input", function () {
  updateStorage();
});

// Prevent Enter key from creating a new paragraph
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
