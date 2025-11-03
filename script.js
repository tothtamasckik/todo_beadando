const list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");

button.addEventListener("click", addList);

function addList() {
    if (textarea.value === "") return;

    list.push(textarea.value)
    console.log(list);
    ul.appendChild(document.createElement("li"));
    add();
}

function add(){
    const li = document.querySelector("li");
    li.innerText = textarea.value;
}