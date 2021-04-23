
//Add EventListeners to Add Button
const add = document.getElementById("add");
let close = document.getElementsByClassName("close");
add.addEventListener('click', addTodoItem);

function addTodoItem(){
    var newlist = document.createElement('li');
    var checkbox = document.createElement("input");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var item = document.getElementById("newItem").value;
    if (item === '') {
        alert("Write Something");
        return ;
    }
    var text = document.createTextNode(item);

    checkbox.type= "checkbox";
    newlist.className = "myList";
    span.className = "close";
    span.appendChild(txt);
    span.addEventListener('click',arrowFunction);
    // close = document.getElementsByClassName("close");
    /**
     * addEventListener<"click">(type: "click", listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void
     */

    newlist.appendChild(checkbox)
    newlist.appendChild(text);
    newlist.appendChild(span);
    document.getElementById("todolist").appendChild(newlist);
    document.getElementById("newItem").value = "";
    // loopRem();
    console.log(close);
    // legacyFunc();
    // arrowFunction();
};

// function testClick() {
//     console.log("clicked");
//     var div = this.parentElement;
//     div.remove();
//     // div.style.display = "none";
// }

function legacyFunc() {
    console.log("legacy runs")
    var div = this.parentElement;
    div.remove();
}

const arrowFunction = (x) => {
    // x.persist();
    console.log("arrow runs", x);
    var div = x.target.parentElement;
    div.remove();
}

console.log("code re-running...");
// var close = document.getElementsByClassName("close");
// function loopRem() {
//     console.log("looping...");
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         console.log(i, "Clicked");
//         var div = this.parentElement;
//         div.remove();
//         // div.style.display = "none";
//       }
//     }
// }

//Clear all
var clearAll = document.getElementById("clear-all");
clearAll.addEventListener('click', Clear);
function Clear(){
    var items = document.getElementsByTagName('li').innerHTML;
    //var ul = items.parentNode;
    items.remove();
}


