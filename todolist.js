//Create a close button for each list.
var myLists = document.getElementsByTagName("li");
var i;
for (i=0; i<myLists.length; i++){
    var button = document.createElement("button");
    var text = document.createTextNode("\u00D7");
    button.className = "delete";
    button.appendChild(text);
    myLists[i].appendChild(button);
}

//Function for  the close button
var close = document.getElementsByClassName("delete");
var i;
for(i=0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = none;
    }
}
