// Select DOM elements
const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPauseBtn");
const stopBtn = document.getElementById("stopBtn");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");

// Toggle play and pause
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Stop video
stopBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  playPauseBtn.textContent = "Play";
});

// Update progress bar
video.addEventListener("timeupdate", () => {
  if (video.duration) {
    progressBar.value = (video.currentTime / video.duration) * 100;
  }
});

// Seek functionality
progressBar.addEventListener("input", () => {
  if (video.duration) {
    video.currentTime = (progressBar.value / 100) * video.duration;
  }
});

// Volume control
volumeControl.addEventListener("input", () => {
  video.volume = volumeControl.value;
});
