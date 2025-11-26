document.addEventListener("DOMContentLoaded", loadUsers);

function loadUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let table = document.getElementById("userTable");

  table.innerHTML = "";

  users.forEach(user => {
    let row = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.balance}</td>
        <td>
          <button class="action-btn" onclick="removeUser('${user.id}')">Delete</button>
        </td>
      </tr>
    `;

    table.innerHTML += row;
  });
}

function removeUser(id) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.filter(u => u.id !== id);
  localStorage.setItem("users", JSON.stringify(users));
  loadUsers();
}
