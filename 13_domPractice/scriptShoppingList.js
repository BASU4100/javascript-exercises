const unorderedList = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

function addItem() {
    const item = input.value;
    input.value = "";
    input.focus();

    if (item.trim() === ""){
        alert("Input item to add.");
        return;
    }


    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    
    listItem.appendChild(span);
    listItem.appendChild(btn);
    
    span.textContent = item;
    btn.textContent = "Delete";

    btn.addEventListener("click", () => {listItem.remove();});

    unorderedList.appendChild(listItem);
}

button.addEventListener("click", addItem);