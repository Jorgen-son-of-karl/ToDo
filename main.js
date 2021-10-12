const form = document.querySelector('form');

const todoList = document.getElementById('todoList');

var todo = [];

var allTodos = [];

document.onkeydown = function (event, keycode) {
    if (event.keyCode === 13) {
        event.preventDefault();
		removeAllChildren(todoList);
		userInput = form.elements.todoInput.value;
		todo.push(userInput);
		todo.forEach(printList);
		allTodos.push(userInput);
		form.reset();
    }
};


	const categoryBtn = document.querySelector('.categoryBtn');
	categoryBtn.style.display = "inline-block";



//console.log(todo);
console.log(todoList)

function removeAllChildren(parent){
	while(parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
}

function printList(item){

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

	deleteBtn.id = todo.indexOf(item);
	// checkbox.id = todo.indexOf(item)

	deleteBtn.addEventListener("click",  function(){
		removeAllChildren(todoList);
		todo.splice(event.srcElement.id, 1);
		todo.forEach(printList);
		form.reset();
	});
}