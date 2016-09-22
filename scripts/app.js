window.onload = function(event){
	//console.log("The cat says the window is loaded!");

	var checkmark = " [Insert checkbox here]";
	//get a list of element w/ a tag
	var list = document.getElementsByTagName('li');
	//var listOL = document.getElementsByTagName('ol');

	var n = list.length; //length of our list
	var paragraph = document.getElementById("target-for-text");

	var content = buildParagraph("I love hash browns with onions");
	paragraph.innerHTML = content;
	
	var name = document.getElementById("name");
	//name.innerHTML("Jen Jen Jen");
	var username=prompt("What is your name?");
	name.innerHTML = username;

	var content2 = addText("wish I could has");
	added.innerHTML = content2;
	// console.log(checkmark);
	// console.log(list);
	//console.log(paragraph);
	//console.log(content);


	for (var i = 0; i < n; i++) {
		list[i].innerHTML = list[i].innerHTML + checkmark;
	}

	// loop through the ordered list
	// and at the end of the innerHTML of each li
	// add <strong> wish i could has </strong>
	// loop in the reverse order
/*
	for (var i = 0; i < n; i++) {
		list[i].innerHTML = list[i].innerHTML + checkmark;
	}
*/

};

function buildParagraph(content) {
	var openTag = "<em><strong>";
	var closingTag = "</strong></em>";
	return openTag + content + closingTag;
}


