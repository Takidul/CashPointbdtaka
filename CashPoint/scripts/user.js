// scripts/user.js

// ===========================
// USER COINS SYSTEM
// ===========================
function getCoins() {
    return Number(localStorage.getItem("coins") || 0);
}

function addCoins(amount) {
    let coins = getCoins();
    coins += amount;
    localStorage.setItem("coins", coins);
    return coins;
}

// ===========================
// DAILY BONUS
// ===========================
function collectDailyBonus() {
    const lastBonus = localStorage.getItem("last_bonus_date");
    const today = new Date().toDateString();

    if (lastBonus === today) {
        alert("আজকের Daily Bonus ইতিমধ্যে নিয়েছো!");
        return;
    }

    addCoins(10);
    localStorage.setItem("last_bonus_date", today);

    alert("🎁 Daily Bonus Added: +10 Coins!");
}

// ===========================
// DISPLAY USER INFO
// ===========================
function loadUserInfo() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    document.getElementById("username").innerText = user.username;
    document.getElementById("firstname").innerText = user.first_name;
    document.getElementById("coins").innerText = getCoins();
}

// Auto-load profile info
window.addEventListener("load", () => {
    if (document.getElementById("coins")) {
        loadUserInfo();
    }
});
