// Références aux éléments DOM
const input = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

// Fonction pour ajouter un élément à la liste
addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    // Créer un nouvel élément <li>
    const listItem = document.createElement("li");

    // Ajouter le texte de l'élément
    listItem.textContent = text;

    // Créer un bouton de suppression
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";

    // Ajouter un événement pour supprimer l'élément
    deleteButton.addEventListener("click", () => {
      itemList.removeChild(listItem);
    });

    // Ajouter le bouton au <li>
    listItem.appendChild(deleteButton);

    // Ajouter le <li> à la liste
    itemList.appendChild(listItem);

    // Effacer le champ de texte
    input.value = "";
  }
});
