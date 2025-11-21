let list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");
// let deletebtn = "";

button.addEventListener("click", add);
window.addEventListener("load", show);
window.addEventListener("load", localToList)
ul.addEventListener("click", clicked);


function moveTask(event) {
    // if (event.key != "ArrowDown") return;

    // const a = list[x], b = list[y];

    // for (let i = 0; i < list.length; i++) {
        
        
    // }

    console.log(event.target);
    
    

    
    
}

function clicked(event) {
    const allTasks = document.getElementsByClassName("taskDiv");

    
    for (var i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList.contains("clicked") && i != event.target.dataset.id) {
            allTasks[i].classList.remove("clicked");
        }
    }
    
    
    
    event.target.classList.toggle("clicked");
    event.target.addEventListener("keydown", moveTask);

}



function add() {
    if (textarea.value === "") return;
    // if (localStorage.length > 0) {
    //     for (let index = 0; index < localStorage.length; index++) {
    //         list[index] = localStorage.getItem(String(index))
    //     }
    // }
    let task = {
        text: textarea.value,
        checked: false
    };
    
   
    // console.log(list);
    
    

    localToList();
    list.push(task)
    

    // for (let index = 0; index < list.length; index++) {
    //     localStorage.setItem(String(index), list[index])
    //     console.log(localStorage.getItem(String(index), list[index]));
    // }

    textarea.value = "";
    save();    
    
}

function localToList() {
    if (localStorage.length > 0) {
        list = JSON.parse(localStorage.getItem("tasks"))
    }
}


function save() {
    
   
   
    localStorage.setItem("tasks", JSON.stringify(list));
   
        
    show();
    
    
    
    // console.log(localStorage);
    
}

function show() {
    ul.innerHTML = "";
    if (localStorage.length <= 0) return;
    
    let lcalstr = JSON.parse(localStorage.getItem("tasks"));
   
    
  
    // localStorage.setItem("tasks", JSON.parse())
    // console.log(dsjsdsd);
    // console.log(lcalstr);
    
    
    // console.log(dsjsdsd);
    
    // console.log(JSON.parse(dsjsdsd));
   
    for (let index = 0; index < lcalstr.length; index++) {
        const value = lcalstr[index].text;
        // console.log(value);
        
        // console.log(lcalstr[index].text);
        
        if (value !== null && value !== "") {
            const div = document.createElement("div");
            div.classList.add("taskDiv");
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


            //animation
            // lastLi = ul.lastElementChild;
            // li.classList.add("fade-in");
            // li.addEventListener("animationend", (event) => { event.target.classList.remove("fade-in") })
        }
    }
}

function check(event){
    const i = parseInt(event.target.parentElement.dataset.id);
    const done = event.target;
    if (done.checked) {
        // done.parentElement.style.backgroundColor = "green";
        
        done.parentElement.classList.add("checked");
        list[i].checked = true;
        
    }
    else {
        // done.parentElement.style.backgroundColor = "bisque";
        done.parentElement.classList.remove("checked")
        list[i].checked = false;
    }
    
    // save();
    // show();
}

function deleteData(event) {
    
    const div = event.target.parentElement;
    // console.log(div.parentElement);
    
    ul.removeChild(div.parentElement);
    
    
    // list
    // console.log(event.target.parentElement);
    show();
    // localStorage.removeItem(String(i));
    // list.remove(i);
}


