
//Recuperation de elements DOM
let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let itemList = document.getElementById("itemList");

//Fonction pour ajouter element a la liste
addButton.addEventListener(
  "click",
  () => {
    let text = input.value.trim();
    if (text != "") {
      let listItem = document.createElement("li");

      listItem.textContent = text;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "🗑️";
      deleteButton.addEventListener("click", () => {
        itemList.removeChild(listItem);
      });
      listItem.appendChild(deleteButton);
      itemList.appendChild(listItem);
      input.value = "";
    }
  },
  false
);
