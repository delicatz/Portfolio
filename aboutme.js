


let song = document.getElementById("song");
  let songAudio = new Audio("assets/NicoleKidman.mp3");
  function playMusic() {
    if (songAudio.paused) {
      songAudio.play();
      song.textContent = "Stop";
    } else {
      songAudio.pause();
      song.textContent = "Click Me";
    }
  }

  song.addEventListener("click", playMusic);



document.getElementById("drawing").addEventListener("click", function () {
  document.getElementById("drawingcontainer").style.backgroundColor = "";
  let img = document.createElement("img");
  img.setAttribute("src", "assets/goldfish.png");
  document.getElementById("drawingcontainer").append(img);
})

document.getElementById("drawing").addEventListener("click", function () {
  document.getElementById("drawingcontainer");
  document.getElementById("assets/goldfish.png").remove();
})


