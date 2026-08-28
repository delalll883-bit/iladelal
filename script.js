// ===============================
// 1. TANGGAL JADIAN
// ===============================
// Ubah tanggal di bawah sesuai tanggal kalian.
// Format: YYYY-MM-DDTHH:MM:SS
// Contoh: 17 Agustus 2025 = 2025-08-17T00:00:00

const tanggalJadian = new Date("2025-08-24T10:32:00");

function updateCounter() {
  const now = new Date();
  let difference = now - tanggalJadian;

  if (difference < 0) {
    difference = 0;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateCounter();
setInterval(updateCounter, 1000);

// ===============================
// 2. BUKA SURAT
// ===============================

const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

openLetter.addEventListener("click", () => {
  letter.classList.add("show");
  letter.scrollIntoView({ behavior: "smooth" });
});

// ===============================
// 3. MUSIK
// ===============================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

musicButton.addEventListener("click", () => {
  if (!musicPlaying) {
    music
      .play()
      .then(() => {
        musicPlaying = true;
        musicButton.textContent = "⏸️ Matikan Musik";
      })
      .catch(() => {
        alert("Musik belum bisa diputar. Pastikan file music/lagu.wav ada.");
      });
  } else {
    music.pause();
    musicPlaying = false;
    musicButton.textContent = "🎵 Putar Musik";
  }
});

// ===============================
// 4. TOMBOL KEJUTAN
// ===============================

const surpriseButton = document.getElementById("surpriseButton");

surpriseButton.addEventListener("click", () => {
  createHeartBurst();

  setTimeout(() => {
    alert(
      "❤️ Aku cuma ingin kamu tahu...\n\n" +
        "Aku bersyukur bisa mengenal kamu.\n" +
        "Terima kasih sudah hadir di hidupku.\n\n" +
        "Aku sayang kamu. ❤️",
    );
  }, 250);
});

// ===============================
// 5. HATI BERJATUHAN
// ===============================

const heartsContainer = document.getElementById("hearts-container");

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = ["❤️", "💕", "💗", "💖", "💘"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = 14 + Math.random() * 22 + "px";
  heart.style.animationDuration = 5 + Math.random() * 6 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

setInterval(createFloatingHeart, 450);

// ===============================
// 6. LEDAKAN HATI SAAT KEJUTAN
// ===============================

function createHeartBurst() {
  for (let i = 0; i < 28; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = "❤️";
    heart.style.left = 35 + Math.random() * 30 + "%";
    heart.style.bottom = 25 + Math.random() * 20 + "%";
    heart.style.fontSize = 18 + Math.random() * 20 + "px";
    heart.style.animationDuration = 1.5 + Math.random() * 2 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
