// Playlist of tracks
const tracks = [
    { title: "Track 1", src: "track1.mp3" },
    { title: "Track 2", src: "track2.mp3" },
    { title: "Track 3", src: "track3.mp3" }
];

// Select DOM elements
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");
const trackTitle = document.getElementById("trackTitle");

// Track index
let currentTrack = 0;

// Load a track
function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    audio.load();
}

// Play or pause audio
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
}

// Play previous track
function playPrev() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "Pause";
}

// Play next track
function playNext() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "Pause";
}

// Update progress bar as audio plays
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    }
});

// Seek functionality
progressBar.addEventListener("input", () => {
    if (audio.duration) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
});

// Volume control
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

// Event listeners for buttons
playPauseBtn.addEventListener("click", togglePlayPause);
prevBtn.addEventListener("click", playPrev);
nextBtn.addEventListener("click", playNext);

// Load the first track initially
loadTrack(currentTrack);
