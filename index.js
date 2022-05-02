var source = "backsound/mubarak.mp3";
var audio = document.createElement("audio");
audio.load()
audio.addEventListener("load", function() {
  audio.play();
}, true);
audio.src = source;



$("#playBtn").click(function() {
  audio.play();
});

$("#pauseBtn").click(function() {
  audio.pause();
});

$("#stopBtn").click(function() {
  audio.pause();
  audio.currentTime = 0;
});
