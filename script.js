let list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");

button.addEventListener("click", add);
window.addEventListener("load", localToList);
ul.addEventListener("click", clicked);
window.addEventListener("keydown", removeClicked);

function removeClicked(event) {
    if (event.key != "Escape") return;

    const allTasks = document.getElementsByClassName("taskDiv");

    for (var i = 0; i < allTasks.length; i++) {
        allTasks[i].classList.remove("clicked");
    }
}


function clicked(event) {
    if (event.target == ul) return;

    const allTasks = document.getElementsByClassName("taskDiv");

    for (var i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList.contains("clicked") && i != event.target.dataset.id) {
            allTasks[i].classList.remove("clicked");
        }
    }
    
    event.target.classList.toggle("clicked");
    console.log(event.target);
    
}


function add(event) {
    if (textarea.value === "") return;

    let task = {
        text: textarea.value,
        checked: false
    }
    
    localToList();
    list.push(task);

    textarea.value = "";
    save();    
    
}


function localToList() {
    if (localStorage.length > 0) {
        list = JSON.parse(localStorage.getItem("tasks"));
    }

    save();
}


function save() {
    localStorage.setItem("tasks", JSON.stringify(list));
   
    show();
    
}


function show() {
    ul.innerHTML = "";
    if (localStorage.length <= 0) return;
    
    let lcalstr = JSON.parse(localStorage.getItem("tasks"));
   
    for (let i = 0; i < lcalstr.length; i++) {
        const value = lcalstr[i].text;
        
        if (value !== null && value !== "") {
            const div = document.createElement("div");
            div.classList.add("taskDiv");
            div.dataset.id = String(i);
            const li = document.createElement("li");
            const deletebtn = document.createElement("button");
            deletebtn.innerText = "Törlés";
            
            const checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            checkBox.checked = lcalstr[i].checked;
            const p = document.createElement("p");
            p.innerText = value;
          
            div.appendChild(checkBox);
            div.appendChild(p);
            div.appendChild(deletebtn);
            li.appendChild(div);
            ul.appendChild(li);

            deletebtn.addEventListener("click", deleteData);
            checkBox.addEventListener("click", check);

            if (lcalstr[i].checked == true) {
                div.classList.add("checked");
            }
        }
    }
}


function check(event){
    let lcalstr = JSON.parse(localStorage.getItem("tasks"));

    const i = parseInt(event.target.parentElement.dataset.id);
    const done = event.target;
    if (done.checked) {
        
        done.parentElement.classList.add("checked");
        lcalstr[i].checked = true;
        
    }
    else {
        done.parentElement.classList.remove("checked");
        lcalstr[i].checked = false;
    }
    
    localStorage.setItem("tasks", JSON.stringify(lcalstr));
}


function deleteData(event) {
    let lcalstr = JSON.parse(localStorage.getItem("tasks"));
    const div = event.target.parentElement;

    for (let i = 0; i < lcalstr.length; i++) {
        if (i == div.dataset.id) {
            lcalstr.splice(i, 1)
        }
    }

    ul.removeChild(div.parentElement);
    localStorage.setItem("tasks", JSON.stringify(lcalstr));
  
    localToList();
}


