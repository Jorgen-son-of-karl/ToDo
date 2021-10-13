let totalLines = 0;
var allBtn = document.getElementById("all");
var activeBtn = document.getElementById("active");
var completeBtn = document.getElementById("completed");
const categoryBtns = document.querySelectorAll('.categoryBtn');
const markAllBtn = document.getElementById("markAll");
var container = document.getElementById("container");
var form = document.querySelector("form");
let allChecked = false;

completeBtn.onclick = function(){
	filter("completed");
};

activeBtn.onclick = function(){
	filter("active");
};

allBtn.onclick = function(){
	filter("all");
};

function filter(method) {

    var checkboxes = document.getElementsByClassName("check");

    for (var i = 0; i < checkboxes.length; i++) {

        // Vi sparar om checkboxen för denna iteration är true/false för att korta ned if-statement nedanför
        var checked = checkboxes.item(i).checked;

        if((checked && method == 'completed') || (!checked && method == 'active') || method == 'all') {
            checkboxes.item(i).parentNode.style.display = 'list-item';
        }
        else {
            checkboxes.item(i).parentNode.style.display = 'none';
        }
    }
}

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

markAllBtn.onclick = function(){
	check();
}

document.onkeydown = function (event, keycode) {
    if (event.keyCode === 13){
    	if(form.elements.todoInput.value != "") {
			AddNewLine();
			form.reset();
    	}
		event.preventDefault();
    }
}

function AddNewLine() {
  totalLines++;
  
  	for (var i = 0; i < categoryBtns.length; i++){
		categoryBtns[i].style.display = "inline-block";
	}
  
  var textInput = document.getElementById("todoInput").value;
  var todoList = document.getElementById("todoList");
  var newLine = document.createElement("li");
  newLine.innerHTML = "<input class='check' type='checkbox' id='"+totalLines+"'> "+textInput+" <span class=" +"delete"+ " onclick='delLine("+totalLines+");'>❌</span>";
  
  container.insertBefore(newLine, todoList);
  
}

function delLine(lineID) {
document.getElementById(lineID).parentNode.remove();
totalLines--;

	if(totalLines<1) {
		for (var i = 0; i < categoryBtns.length; i++){
			categoryBtns[i].style.display = "none";
		}
	}
}