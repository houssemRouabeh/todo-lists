// recupération des eléments DOM
let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let liste = document.getElementById("itemList");

let ajouText = ()=> {
    addButton.onclick("click",()=>{
        liste.appendChild("li")
    })

}