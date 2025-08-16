// ========== CONFIG ==========
// If you want the placeholder to remain blank forever, set VIDEO_ID = ""
// Otherwise put the YouTube ID (e.g. "dQw4w9WgXcQ") and the iframe will replace the blank box when countdown ends.
const VIDEO_ID = ""; // blank means no video to load after countdown

// Target date: Midnight 31 August 2025 NZ time (NZST = UTC+12)
const targetDateNZ = new Date("2025-08-31T00:00:00+12:00");

// Function to calculate remaining seconds
function getRemainingSeconds() {
    const now = new Date();
    return Math.floor((targetDateNZ - now) / 1000);
}

let countdownSeconds = getRemainingSeconds();
// ============================

const comingSoonEl = document.getElementById('comingSoonText');

// Countdown tick
const interval = setInterval(() => {
    countdownSeconds = getRemainingSeconds();

    if (countdownSeconds <= 0) {
        clearInterval(interval);
        comingSoonEl.style.display = "block";
        return;
    }

    // Convert seconds to D:H:M:S
    let days = Math.floor(countdownSeconds / (24 * 60 * 60));
    let hrs = Math.floor((countdownSeconds % (24 * 60 * 60)) / (60 * 60));
    let mins = Math.floor((countdownSeconds % (60 * 60)) / 60);
    let secs = countdownSeconds % 60;

    // Update each box
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hrs.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = mins.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = secs.toString().padStart(2, "0");

}, 1000);
