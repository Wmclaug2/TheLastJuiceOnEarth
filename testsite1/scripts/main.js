var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/vapor.jpg'){
		myImage.setAttribute ('src', 'images/vaper.jpg');
} else {
	myImage.setAttribute('src', 'images/vapor.jpg');
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h5');
var myName = localStorage.getItem('name');

function setUserName(){
	var myName = prompt ("Please enter your name.");
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hello there, ' + myName + '!';
}

if(!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hello there, ' + myName +'!';
}

myButton.onclick = function(){
	setUserName();
}

// var inputText = document.querySelector('text');
// inputText.onclick = function(){
// 	inputText = prompt("test");
// 	inputText.textValue = '';
// }

