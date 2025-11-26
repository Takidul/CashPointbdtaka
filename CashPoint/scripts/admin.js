// TOTAL USERS
firebase.database().ref("users").on("value", snap => {
    document.getElementById("totalUsers").innerText = snap.numChildren();
});

// ACTIVE USERS (UIDs)
firebase.database().ref("activeUsers").on("value", snap => {
    let list = "";
    snap.forEach(u => {
        list += `<li>${u.key}</li>`;
    });
    document.getElementById("activeUsers").innerHTML = list;
});

// UPDATE USER COINS
function updateCoins() {
    let uid = document.getElementById("editUid").value;
    let coins = Number(document.getElementById("editCoins").value);

    firebase.database().ref("users/" + uid).update({
        coins: coins
    });

    alert("Coins Updated!");
}
