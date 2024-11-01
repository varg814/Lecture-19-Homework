let heading = document.createElement("h1");
document.body.appendChild(heading);

let addTextButton = document.createElement("button");
addTextButton.innerText = "add text";
document.body.appendChild(addTextButton);

addTextButton.addEventListener("click", () => {
  let text = prompt("enter text: ");
  if (text) {
    heading.innerText = text;
  } else {
    alert("ENTER TEXT!!!!!");
  }
});

let list = document.createElement("ul");
document.body.appendChild(list);

let addButton = document.createElement("button");
addButton.innerText = "add item";
document.body.appendChild(addButton);

addButton.addEventListener("click", () => {
  let item = prompt("enter item: ");
  if (item) {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
    //
    //
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
    });
    li.appendChild(deleteButton);
  } else {
    alert("ENTER ITEM!!!!!!!!!");
  }
});
