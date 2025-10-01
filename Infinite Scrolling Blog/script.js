const gallery = document.getElementById("gallery");

// Load fake images dynamically
let count = 0;
function loadImages() {
    for (let i = 0; i < 6; i++) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/200/200?random=${count++}`;
        gallery.appendChild(img);
    }
}

// Detect scroll to bottom
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadImages();
    }
});

// Initial load
loadImages();
