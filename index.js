document.getElementById("subheader").addEventListener("mouseover", mouseOver);
document.getElementById("subheader").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("subheader").style.color = "yellow";
}

function mouseOut() {
  document.getElementById("subheader").style.color = "aqua";
}


function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "here");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! Did you hover over my name?";
  }
  document.getElementById("name").innerHTML = text;
}