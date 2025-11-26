// admin/admin.js

document.addEventListener("DOMContentLoaded", () => {

    // নতুন ইউজার অ্যাড করার ফর্ম
    const addUserForm = document.getElementById("addUserForm");
    const userList = document.getElementById("userList");

    // LocalStorage থেকে ইউজার লোড করা
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // UI-তে ইউজার লিস্ট দেখানোর ফাংশন
    function displayUsers() {
        userList.innerHTML = "";
        users.forEach((user, index) => {
            const row = document.createElement("div");
            row.classList.add("user-row");
            row.innerHTML = `
                <span>${user.username}</span>
                <span>${user.balance} ৳</span>
                <button class="deleteBtn" data-index="${index}">Delete</button>
            `;
            userList.appendChild(row);
        });
    }

    displayUsers();

    // নতুন ইউজার অ্যাড করা
    addUserForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const balance = document.getElementById("balance").value;

        if (username.trim() === "" || balance.trim() === "") {
            alert("সব ঘর পূরণ করুন!");
            return;
        }

        const newUser = {
            username: username,
            balance: Number(balance),
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        displayUsers();
        addUserForm.reset();
        alert("ইউজার সফলভাবে যুক্ত হয়েছে!");
    });

    // ইউজার ডিলিট করার অপশন
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("deleteBtn")) {
            const index = e.target.getAttribute("data-index");
            users.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            displayUsers();
        }
    });
});
