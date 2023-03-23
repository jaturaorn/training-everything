//text content for every list
const readingList = document.querySelectorAll("#reading-list li .name");
readingList.forEach((list) => {
  list.textContent = `book title: ${list.textContent} `;
});
const list = document.querySelector("#reading-list ul");
//Interacting with Form -- add readinglist
const addForm = document.forms["add-list"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent from refresh
  const value = addForm.querySelector('input[type="text"]'); //add new reading list in the text box
  //   console.log(value);
  //create element
  let li = document.createElement("li");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  //add content
  span1.textContent = `book title: ${value.value} `;
  span2.textContent = "delete";
  //add classes
  span1.classList.add("name");
  span2.classList.add("delete");
  //append to DOM
  list.appendChild(li);
  li.appendChild(span1);
  li.appendChild(span2);
  value.value = "";
});