
//Add EventListenerS to Add Button
const additem = document.getElementById("add");
additem.addEventListener('click', addTodoItem);

function addTodoItem(){
    const newlist = document.createElement('li');
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    //const item = document.getElementById("newItem").value;
    label.innerText = document.getElementById("newItem").value;
    if (label.innerText === '') {
        alert("Write Something");
        console.log("Empty Input");
        return ;
    }

    const text = document.createTextNode(label.innerText);
    checkbox.type= "checkbox";
    checkbox.className = "checked";
    checkbox.id = "toggle";
    newlist.className = "myList";
    span.className = "close";
    label.htmlFor = "toggle";
    span.appendChild(txt);
    newlist.appendChild(checkbox);
    newlist.appendChild(span);
    newlist.appendChild(text);
    document.getElementById("todolist").appendChild(newlist);
    document.getElementById("newItem").value = "";
    console.log("Added");
    
    const cancel = document.getElementsByClassName("close");
    for (i = 0; i < cancel.length; i++) {
        cancel[i].addEventListener('click', closeList);
    }
};

//Add Event listener to Close
const closeList = (x) => {
    console.log("Canceled");
    var div = x.target.parentElement;
    div.remove();
}

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', arrowFunction);
})


//Add EventListeners to Clear all
const clearAll = document.getElementById("clear-all");
clearAll.addEventListener('click', Clear);
const ul = document.getElementById("todolist");

function Clear(){
    if (ul.hasChildNodes()){
        console.log(ul);
        ul.innerHTML = '';
    }else{
        console.log("Empty List");
    }
}

//Add EventListener to Checkbox
//const ullist = document.querySelector('ul');
//ullist.addEventListener('click', function(ev) {
  //if (ev.target.tagName === 'li') {
    //ev.target.classList.toggle('checked');
  //}
//}, false);

//const checkList = document.getElementById("toggle");
//const value = label.innerText;
//checkList.addEventListener('click', CheckedList);
//const CheckedList = (ev) => {
    //if(checkList.checked){
       // ev.target.value.style.textDecoration ="line-through";
    //}
//

function legacyFunc() {
    console.log("legacy runs")
    var div = this.parentElement;
    div.remove();
}

const arrowFunction = (x) => {
    //x.persist();
    console.log("arrow runs");
    var div = x.target.parentElement;
    div.remove();
    };