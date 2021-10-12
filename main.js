const form = document.querySelector('form');

const todoList = document.getElementById('todoList');

const todo = [];

const categoryBtns = document.querySelectorAll('.categoryBtn');

var allTodos = [];

var completedTodos = [];

var activeTodos = [];

document.onkeydown = function (event, keycode) {
    if (event.keyCode === 13) {
    	if(form.elements.todoInput.value != "") {
	        event.preventDefault();
			removeAllChildren(todoList);
			userInput = form.elements.todoInput.value;
			todo.push(userInput);
			todo.forEach(printList);
			allTodos.push(userInput);
			form.reset();
    	}
    	else{
    		event.preventDefault();
    	}
    }
};

function removeAllChildren(parent){
	while(parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
}

function printList(item){

// OBS FIXA DETTA
//arrayen blir inte 0, den blir ingenting

	//visar knappar när todolist innehåller någonting
	for (var i = 0; i < categoryBtns.length; i++){
		categoryBtns[i].style.display = "inline-block";
	}
	// create div
	var row = document.createElement('div');
	row.className = 'lineDiv';

	// create checkbox
	var completeBox = document.createElement('input');
	completeBox.type = 'checkbox';

	// create listItem and text
	var listItem = document.createElement('li');
	var todoEntry = document.createTextNode(item);

	// create delete button
	var deleteBtn = document.createElement('button');
	deleteBtn.textContent = '❌';
	deleteBtn.className ='delete'


	listItem.appendChild(completeBox); // listItem > checkbox
	listItem.appendChild(todoEntry); // listItem > textNode
	listItem.appendChild(deleteBtn); // listItem > deleteBtn
	row.appendChild(listItem); // div > listItem
	todoList.appendChild(row); // todoList > div

	//we give the delete button the id of the item index we use in our parameter
	deleteBtn.id = todo.indexOf(item);
	//completeBox.id = todo.indexOf(item + "a");
	deleteBtn.addEventListener("click",  function(){

		removeAllChildren(todoList);
		//we grab the parent element of the button with the selected id
		todo.splice(event.srcElement.id, 1);
		todo.forEach(printList);
		//kontrollerar todo om den är tom, om den är det så ska knappar döljas
			var styling = (todo.length > 0) ? "inline-block" : "none";
			for (var i = 0; i < categoryBtns.length; i++){
				categoryBtns[i].style.display = styling;
			}
			console.log(todo);
		form.reset();
	});		
}



