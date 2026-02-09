// Quotes for Valentine
const quotes = [
    "Love is not perfect, but it's real ❤️",
    "You make my heart smile 💖",
    "Every love story is beautiful, but ours is my favorite 💑",
    "With you, I found my home 💞"
];

let i = 0;

// Get elements
const quote = document.getElementById("quote");
const btn = document.getElementById("loveBtn");
const box = document.getElementById("valentineBox");
const music = document.getElementById("music");
const hearts = document.querySelector(".hearts");

// Change quotes one by one
setInterval(() => {
    quote.textContent = quotes[i];
    i = (i + 1) % quotes.length;
}, 2500);

// Button click event
btn.addEventListener("click", () => {
    // Show Valentine message
    box.classList.remove("hidden");

    // Hide button
    btn.style.display = "none";

    // Start music from 37 seconds
    music.currentTime = 37;
    music.play();

    // Start heart animation
    createHearts();
});

// Create floating hearts
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 2) + "s";
        heart.style.fontSize = (16 + Math.random() * 14) + "px";

        hearts.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
