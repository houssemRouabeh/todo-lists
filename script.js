//Récuperation des elements DOM
let input = ducument.getElementById("itemInput");
let addButton = document.getElementById('addButton');
let itemList = document.getElementById('itemlist');

//Fonction pour ajouter element a la liste 
addButton.addEventListener('click',() =>{
    let text = input.value.trim(); 
     // Si le champ n'est pas vide, on crée un élément de liste
  if (itemText !== "") {
    // Créer un nouvel élément <li>
    let listItem = document.createElement("li");
    listItem.textContent = text;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.addEventListener('click',()=>{
        itemlist.removeChild(listItem);   
    });
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
    input.value = "";
  }
  
}, 
 false
);






