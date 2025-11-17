const list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");
// let deletebtn = "";

button.addEventListener("click", add);
window.addEventListener("load", save);



function add() {
    if (textarea.value === "") return;
    // if (localStorage.length > 0) {
    //     for (let index = 0; index < localStorage.length; index++) {
    //         list[index] = localStorage.getItem(String(index))
    //     }
    // }
    const task = {
        text: textarea.value,
        checked: false
    };
    list.push(task)
    
    

    // for (let index = 0; index < list.length; index++) {
    //     localStorage.setItem(String(index), list[index])
    //     console.log(localStorage.getItem(String(index), list[index]));
    // }

    textarea.value = "";
    save();    
    
}


function save() {
    localStorage.setItem("tasks", JSON.stringify(list));
    show()
    
    // console.log(localStorage);
    
}

function show() {
    ul.innerHTML = "";
    const lcalstr = JSON.parse(localStorage.getItem("tasks"))
    // console.log(dsjsdsd);
    console.log(lcalstr);
    
    
    // console.log(dsjsdsd);
    
    // console.log(JSON.parse(dsjsdsd));
   
    for (let index = 0; index < lcalstr.length; index++) {
        const value = lcalstr[index].text;
        console.log(lcalstr[index].text);
        
        if (value !== null && value !== "") {
            const div = document.createElement("div");
            div.dataset.id = String(index);
            const li = document.createElement("li")
            const deletebtn = document.createElement("button")
            deletebtn.innerText = "Törlés"
            
            const checkBox = document.createElement('input')
            checkBox.type = "checkbox"
            const p = document.createElement("p")
            p.innerText = value;
          
            div.appendChild(checkBox)
            div.appendChild(p);
            div.appendChild(deletebtn)
            li.appendChild(div);
            ul.appendChild(li);
            
            deletebtn.addEventListener("click", deleteData);
            checkBox.addEventListener("click", check)
        }
    }
}

function check(event){
    const i = parseInt(event.target.parentElement.dataset.id);
    const done = event.target;
    
    if (done.checked) {
        done.parentElement.style.backgroundColor = "green";
        list[i].checked = true;
    }
    else {
        done.parentElement.style.backgroundColor = "bisque";
        list[i].checked = false;
    }
    // console.log(list[i].checked);
    
    save();
    show();
}

function deleteData(event) {
    
    const div = event.target.parentElement;
    console.log(div.parentElement);
    
    ul.removeChild(div.parentElement);
    // console.log(event.target.parentElement);
    show();
    // localStorage.removeItem(String(i));
    // list.remove(i);
}


