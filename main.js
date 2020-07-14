var input = document.getElementById("userInput");
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
    input.value = ""; 
    
	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	
	function deleteListItem(){
		li.classList.add("delete")
	}

}
document.getElementById("enter").addEventListener('click', addListAfterClick);
function addListAfterClick(){
		if (inputLength() > 0) {
			createListElement();
		}
	}
	
document.getElementById("userInput").addEventListener("keypress", addListAfterKeypress);
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) {
		createListElement();
	} 
}
	

