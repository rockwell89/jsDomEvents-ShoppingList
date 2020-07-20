//assign elements to variable
var input = document.getElementById("input");
var addBtn = document.getElementById("add");
var ul = document.querySelector("ul");


function inputLength() {
    //get text length of user input
    return input.value.length;
}

function createListItem() {
// Add input to list
        //create a li element
    var li = document.createElement("li");
    
        //put text in li and button
    li.appendChild(document.createTextNode(input.value));
        //put it at the bottom of the list
    ul.appendChild(li);
        //clear input value after button is clicked
    input.value = "";

//if li is clicked run toggleDone function
    li.addEventListener('click', toggleDone);
        // Toggle line-through on click
    function toggleDone() {
        li.classList.toggle('done');
    }

// Add delete button next to list item 
        //create a button element
    var deleteBtn = document.createElement("button");
        //add text to button
    deleteBtn.appendChild(document.createTextNode("-"));
        //add delete button inside list item
    li.append(deleteBtn);
        //add delete button after list item
        //li.parentNode.insertBefore(deleteBtn, li.nextSibling);

        //when button is clicked run deleteItem function
    deleteBtn.addEventListener('click', deleteItem);
        //remove list item
    function deleteItem(){
        li.remove();
    }
}

function addOnClick () {
        //check to see if text is in input
    if(inputLength() > 0){
            //add input to list
        createListItem();
    }
}

function addOnKeypress(event) {
        //check to see if text is in input AND the enter key was pressed
    if(inputLength() > 0 && event.keyCode === 13){
            //add input to list
        createListItem();
    }
}


    //when button is clicked, run function
addBtn.addEventListener("click", addOnClick);
    //when Enter key is pressed, run function
input.addEventListener("keypress", addOnKeypress);