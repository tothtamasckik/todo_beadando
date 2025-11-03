const list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");

button.addEventListener("click", add);
window.addEventListener("load", show);

function add() {
    if (textarea.value === "") return;

    list.push(textarea.value)
    // console.log(list);
    for (let index = 0; index < list.length; index++) {
        localStorage.setItem(String(index), list[index])
        // console.log(localStorage.getItem(String(index), list[index]));
        
    }
    
    
    
    const li = document.createElement("li");
    li.innerText = textarea.value;
    ul.appendChild(li);
    textarea.value = "";
    
}

function show() {
    
    for (let i = 0; i < localStorage.length; i++) {
        const value = localStorage.getItem(String(i));
        if (value !== null && value !== "") {
            list.push(value);
            const li = document.createElement("li");
            li.innerText = value;
            ul.appendChild(li);
        }
    }
}
