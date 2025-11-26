// scripts/monetage.js

// ===========================
// Load Monetag Script
// ===========================
function loadMonetag() {
    const script = document.createElement("script");
    script.src = "https://alwingulla.com/88/tag.min.js"; 
    script.dataset.zone = "YOUR_MONETAG_ZONE_ID"; // তোমার Zone ID বসাবে
    script.async = true;
    document.body.appendChild(script);
}

// Auto load ads
window.addEventListener("load", loadMonetag);

// ===========================
// Reward Coins After Ad Click
// ===========================
function rewardForAd() {
    let coins = Number(localStorage.getItem("coins") || 0);
    coins += 1;
    localStorage.setItem("coins", coins);
    alert("🎉 You Earned 1 Coin!");
}

// Call from ad button:
function watchAd() {
    loadMonetag();

    // 3 sec delay = assume ad opened
    setTimeout(() => {
        rewardForAd();
    }, 3000);
}
