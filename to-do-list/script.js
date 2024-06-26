const addButton = document.getElementById("button-tag");
const inputValue = document.getElementById("input-tag");
const listTag = document.getElementById("list-tag");

addButton.addEventListener("click", function () {
  const getValue = inputValue.value;

  const allList = document.createElement("li");

  allList.innerHTML = `${getValue} <span id='delete-btn'>Delete</span>`;
  listTag.appendChild(allList);

  const deleteBtn = allList.querySelector("#delete-btn");
  deleteBtn.addEventListener("click", function () {
    listTag.removeChild(allList);
  });
});
