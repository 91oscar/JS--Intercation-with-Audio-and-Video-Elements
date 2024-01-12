const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const song = document.getElementById("cancion");

button1.addEventListener("click", function () {
  song.currentTime -= 15;
});

button2.addEventListener("click", function () {
  song.play();
});

button3.addEventListener("click", function () {
  song.currentTime += 15;
});

button4.addEventListener("click", function () {
  song.pause();
});
