function saveSettings() {
    let dark = document.getElementById("darkMode").checked;

    localStorage.setItem("darkMode", dark);

    document.getElementById("saved").innerText = "Saved!";
}
