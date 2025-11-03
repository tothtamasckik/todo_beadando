const list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");

button.addEventListener("click", add);

function add() {
    if (textarea.value === "") return;

    list.push(textarea.value)
    console.log(list);
    ul.appendChild(document.createElement("li")).innerText = textarea.value;
}