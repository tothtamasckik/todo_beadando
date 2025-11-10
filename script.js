const list = [];
const button = document.querySelector("#btn");
const textarea = document.querySelector("#area");
const ul = document.querySelector("ul");
// let deletebtn = "";

button.addEventListener("click", add);
window.addEventListener("load", show);



function add() {
    if (textarea.value === "") return;
    // const data   = {
    //     text,
    //     checked
    // };
    
    // data.text = textarea.value;
    // data.checked = "false";
    list.push(textarea.value)
    console.log(list);
    for (let index = 0; index < list.length; index++) {
        localStorage.setItem(String(index), list[index])
        // console.log(localStorage.getItem(String(index), list[index]));
        
    }
    
    const li = document.createElement("li");
    li.innerText = textarea.value;
    ul.appendChild(li);
    textarea.value = "";
    // show()
    
}


function show() {
    ul.innerHTML = "";
    
    for (let i = 0; i < localStorage.length; i++) {
        const value = localStorage.getItem(String(i));
        if (value !== null && value !== "") {
            list.push(value);
            const div = document.createElement("div");
            div.dataset.id = String(i);
            const li = document.createElement("li")
            const deletebtn = document.createElement("button")
            deletebtn.innerText = "Törlés"
            
            const checkBox = document.createElement('input')
            checkBox.type = "checkbox"


            li.innerText = value;
            div.appendChild(checkBox)
            div.appendChild(li);
            div.appendChild(deletebtn)
            
            
            ul.appendChild(div);
            deletebtn.addEventListener("click", deleteData);
        }
    }

    
}



function deleteData(event) {
    
    const i = event.target.parentElement.dataset.id;

    // localStorage.removeItem();
    // ul.remove();
    
    // console.log(event.target.parentElement.dataset.id);
    // localStorage.removeItem()
    // delete(event.target.parentElement);
    ul.removeChild(event.target.parentElement)
    localStorage.removeItem(String(i));
    // document.removeChild();

    
}


