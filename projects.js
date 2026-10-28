document.getElementById("git").addEventListener("mouseover", mouseOver);
document.getElementById("git").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("git").style.color = "aqua";
  document.getElementById("git").style.fontSize = "70px"
}

function mouseOut() {
  document.getElementById("git").style.color = "black";
  document.getElementById("git").style.fontSize = "50px"
}