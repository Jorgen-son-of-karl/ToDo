//here we declare some global variables
let totalLines = 0;
var allBtn = document.getElementById("all");
var activeBtn = document.getElementById("active");
var completeBtn = document.getElementById("completed");
const categoryBtns = document.querySelectorAll('.categoryBtn');
const markAllBtn = document.getElementById("markAll");
var container = document.getElementById("container");
var form = document.querySelector("form");
let allChecked = false;
var removeCompleted = document.getElementById("removeCompleted");
var checkedItems = 0;


// the buttons to show completed/active/all todos does similar things so we just
// call the filter method with different parameters
completeBtn.onclick = function(){
	filter("completed");
};

activeBtn.onclick = function(){
	filter("active");
};

allBtn.onclick = function(){
	filter("all");
};

//this is our method that filters what to show, depending on whats checked as completed, and what button we pressed
function filter(method) {
    //var checkboxes = document.getElementsByClassName("check");
    for (var i = 0; i < checkboxes.length; i++) {
        var checked = checkboxes.item(i).checked;
        if((checked && method == 'completed') || (!checked && method == 'active') || method == 'all') {
            checkboxes.item(i).parentNode.style.display = 'list-item';
        }
        else {
            checkboxes.item(i).parentNode.style.display = 'none';
        }
    }
}

//this funcion changes all checboxes to checked, unless all is allready checked, then it unchecks them
//effectively, a toggle function
function check(checked = true) {
    const cbs = document.querySelectorAll('.check');
    cbs.forEach((cb) => {
    	if(allChecked == false){
    		cb.checked = true;
    	}
    	else{
    		cb.checked = false;
    	}    
    });
    allChecked = allChecked ? false : true;
}


//we call our "toggle" function on this button
markAllBtn.onclick = function(){
	check();
}

//this eventhandler starts if we press "enter"
//first we check if the user has written anything in the input
//then we add the new todo, reset the form so we get back our placeholder text
//and we prevent the default behaviour so the page doesnt get refreshed
document.onkeydown = function (event, keycode) {
    if (event.keyCode === 13){
    	if(form.elements.todoInput.value != "") {
			AddNewLine();
			form.reset();
    	}
		event.preventDefault();
    }
}

//this function adds the user input on our todolist
function AddNewLine() {
	//this variable keeps track on how many lines we have
	totalLines++; 
	    //if we call this function we want our category buttons to be shown
	  	for (var i = 0; i < categoryBtns.length; i++){
			categoryBtns[i].style.display = "inline-block";
		}
	var textInput = document.getElementById("todoInput").value;
	var todoList = document.getElementById("todoList");
	var newLine = document.createElement("li");
	//here we add to our li a checkbox and a delete span with the id of the variable that keeps tracks on our lines
	newLine.innerHTML = "<input class='check' type='checkbox' id='"+totalLines+"'><div class='note'>"+textInput+"</div> <span class=" +"delete"+ " onclick='delLine("+totalLines+");'>❌</span>";
  
  	todoList.appendChild(newLine);  
}

//this delete function gets called when we click the del span or
//the button to remove all completed
function delLine(lineID, delcompleted = 0) {

	if(delcompleted){
		var checkboxes = document.querySelectorAll(".check:checked");
		for(i = 0; i < checkboxes.length; i++){
			checkboxes.item(i).parentNode.remove();
			totalLines--;
		}
		console.log(totalLines);
	}
	
	else if(lineID){
		//removes the parent of the element with the lineID
		document.getElementById(lineID).parentNode.remove();
		//the variable gets updated
		totalLines--;

		//and if we dont have any todos we want to hide theese buttons again
		if(totalLines < 1) {
			for (var i = 0; i < categoryBtns.length; i++){
				categoryBtns[i].style.display = "none";
			}
		}
	}
}
