document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1");
  // add it in before the variable "currentDiv"
}