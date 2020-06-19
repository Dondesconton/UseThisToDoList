var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");




function inputLength() {
	return input.value.length;
}
//Creates Li and button items  and Removes the whole thing if the callback function is triggered.
function createListElement() {
	var li = document.createElement("li");//Crea el tagElement
	li.appendChild(document.createTextNode(input.value));//crea el texto del tagElement from the input value.
	ul.appendChild(li);
	input.value = "";

	var deleteBtn = document.createElement('button');
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBtn);
	deleteBtn.onclick = removeParent;
}
//Ads item to the ul

/*function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}*/

const addListAfterClick =()=>inputLenght()>0 ? createListElement():undefined;

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//creates toggle event for a tageted clicked

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle('done');
}


//Remove a list targeted <li> element
function removeParent(event){
	event.target.parentElement.remove();
	
}
