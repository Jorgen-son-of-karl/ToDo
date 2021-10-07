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
	var listItem = document.createElement('li');
	var todoEntry = document.createTextNode(item);	
	listItem.appendChild(todoEntry);
	todoList.appendChild(listItem);
	console.log(item)

}