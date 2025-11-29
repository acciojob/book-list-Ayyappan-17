//your JS code here. If required.
// Select form inputs
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");

// Select table body
const bookList = document.getElementById("book-list");

// Add book on submit
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Get values
  const t = title.value.trim();
  const a = author.value.trim();
  const i = isbn.value.trim();

  if (t === "" || a === "" || i === "") {
    alert("Please fill all fields!");
    return;
  }

  // Create table row
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${t}</td>
      <td>${a}</td>
      <td>${i}</td>
      <td><button class="delete">Clear</button></td>
  `;

  // Append row to table
  bookList.appendChild(row);

  // Clear input fields
  title.value = "";
  author.value = "";
  isbn.value = "";
});

// Handle delete button click
bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
