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
	var todoLine = document.createElement('div');
	todoLine.id = 'lineDiv';
	var completeBox = document.createElement('input');
	completeBox.type = 'checkbox';
	var listItem = document.createElement('li');
	var todoEntry = document.createTextNode(item);
	todoLine.appendChild(completeBox);
	listItem.appendChild(todoEntry);
	todoLine.appendChild(listItem);
	todoList.appendChild(todoLine);

	console.log(item)

}