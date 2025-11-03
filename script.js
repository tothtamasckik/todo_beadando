const list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");

button.addEventListener("click", add);

function add() {
    if (textarea.value === "") return;

    list.push(textarea.value)
    console.log(list);
    for (let index = 0; index < list.length; index++) {
        localStorage.setItem(String(index), list[index])
        console.log(localStorage.getItem(String(index), list[index]));
        
    }
    
    
    
    ul.appendChild(document.createElement("li")).innerText = textarea.value;
    const li = document.querySelector("li");
    textarea.value = "";
    // show()
}

// function  show() {
//     for (let index = 0; index < list.length; index++) {
        
//         ul.appendChild(document.createElement("li")).innerText = localStorage.index;
        
//     }
// }
