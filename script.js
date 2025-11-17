const list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");
// let deletebtn = "";

button.addEventListener("click", add);
window.addEventListener("load", show);



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
    localStorage.setItem("tasks", JSON.stringify(list));

    

    // for (let index = 0; index < list.length; index++) {
    //     localStorage.setItem(String(index), list[index])
    //     console.log(localStorage.getItem(String(index), list[index]));
    // }

    textarea.value = "";
    show()
    
}


function show() {
    ul.innerHTML = "";
   
    for (let index = 0; index < list.length; index++) {
        const value = list[index].text;
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
    const i = event.target.dataset.id;
    const done = event.target;
    console.log(done);
    if (done.checked) {
        done.parentElement.style.backgroundColor = "green";
    }
    else {
        done.parentElement.style.backgroundColor = "bisque";
    }
}

function deleteData(event) {
    
    // const i = parseInt(event.target.parentElement.dataset.id);
    console.log(event.target.parentElement);
    
    ul.removeChild(event.target.parentElement);
    console.log(event.target.parentElement);
    show();
    // localStorage.removeItem(String(i));
    // list.remove(i);
}


