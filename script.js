const quotes = [
    "Love is not perfect, but it's real ❤️",
    "You make my heart smile 💖",
    "Every love story is beautiful, but ours is my favorite 💑",
    "With you, I found my home 💞"
];

let i = 0;
const quote = document.getElementById("quote");
const btn = document.getElementById("loveBtn");
const box = document.getElementById("valentineBox");
const music = document.getElementById("music");
const hearts = document.querySelector(".hearts");

// Quote animation
setInterval(() => {
    quote.textContent = quotes[i];
    i = (i + 1) % quotes.length;
}, 2500);

// Button click
btn.addEventListener("click", () => {
    box.classList.remove("hidden");
    btn.style.display = "none";
    music.play();
    createHearts();
});

// Hearts function
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 2) + "s";
        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
