
function addTask() {
    const list = document.getElementById("listItems");
    const inputBox = document.getElementById("inputBox");
    if (inputBox.value === '') 
    {
        alert("Write something");
    }
    else {
        const li = document.createElement("li");
        const del=document.createElement("button");
        del.id="delete";
        del.textContent="Delete";
        del.style.color="black";
        li.style.display="flex";
        li.style.justifyContent="space-between";
        li.style.alignItems="center";
        li.innerHTML = `
            ${inputBox.value}
        `;
        li.appendChild(del);
        list.appendChild(li);
        del.addEventListener("click", deleteTask);
        inputBox.value = '';
    }
}

function deleteTask(event) {
    const li = event.target.parentElement;
    if (li) {
        const list = document.getElementById("listItems");
        list.removeChild(li);
    } else {
        console.error("Parent li element not found.");
    }
}
