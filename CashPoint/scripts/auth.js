// scripts/auth.js

// ===========================
// Telegram Mini App Auth
// ===========================

// User data storage
function saveUserData(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

// ===========================
// Telegram WebApp Initialization
// ===========================
const tg = window.Telegram.WebApp;

tg.ready();

// Receive user details from Telegram
const telegramUser = tg.initDataUnsafe?.user;

if (telegramUser) {
    const userData = {
        id: telegramUser.id,
        first_name: telegramUser.first_name,
        last_name: telegramUser.last_name || "",
        username: telegramUser.username || "",
        photo_url: telegramUser.photo_url || "",
        auth_date: tg.initDataUnsafe.auth_date,
    };

    saveUserData(userData);
}

// ===========================
// Check Login Status
// ===========================
function checkLogin() {
    const user = getUserData();
    if (!user) {
        window.location.href = "../login.html";
    }
}

// If file loaded on protected pages
if (location.pathname.includes("dashboard.html") ||
    location.pathname.includes("tasks.html") ||
    location.pathname.includes("withdraw.html")) {
    checkLogin();
}
