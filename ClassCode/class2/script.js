function changeColor() {
  var newColor = prompt("What color do you want this button?")
  var elem = document.getElementById('special');
  elem.style.color = newColor;
}
