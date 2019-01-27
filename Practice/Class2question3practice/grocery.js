document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  var grocery = document.getElementById("grocery").value;
  document.getElementById("grocery").value = "";
  // and give it some content 
  var newContent = document.createTextNode(grocery); 
  var checkBox = document.createElement("INPUT");
  checkBox.setAttribute("type", "checkbox");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  
  newDiv.appendChild(checkBox);


  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}