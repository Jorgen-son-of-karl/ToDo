const form = document.querySelector('form');

const todoList = document.getElementById('todoList');

var todo = [];

 	document.onkeydown = function (event, keycode) {
        if (event.keyCode === 13) {
            event.preventDefault();
			removeAllChildren(todoList);
			userInput = form.elements.todoInput.value;
			todo.push(userInput);
			todo.forEach(printList);
			form.reset();
        }
    };



console.log(todo);

	function removeAllChildren(parent){
		while(parent.firstChild){
			parent.removeChild(parent.firstChild);
		}
	}

function printList(item){
	// create div
	// var row = document.createElement('div');
	// row.className = 'lineDiv';

	// create checkbox
	var completeBox = document.createElement('input');
	completeBox.type = 'checkbox';

	// create listItem and text
	var listItem = document.createElement('li');
	var todoEntry = document.createTextNode(item);

	// row.appendChild(completeBox); // div > checkbox
	listItem.appendChild(todoEntry); // listItem > textNode
	// row.appendChild(listItem); // div > listItem
	todoList.appendChild(row); // todoList > div

	console.log(item)

}