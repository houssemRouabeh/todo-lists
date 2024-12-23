
const input = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click",()=>{
    let text = input.value.trim();
    if (text != "") {
        const listItem = document.createElement("li");
        listItem.textContent = text;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.addEventListener("click", () => {
            itemList.removeChild(listItem);
        });
        
        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
        input.value = "";
    }
});

