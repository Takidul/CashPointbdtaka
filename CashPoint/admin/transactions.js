document.addEventListener("DOMContentLoaded", loadTxns);

function loadTxns() {
  const txns = JSON.parse(localStorage.getItem("transactions")) || [];
  const box = document.getElementById("txnList");

  box.innerHTML = "";

  txns.forEach(txn => {
    let div = `
      <div class="txn-box">
        <strong>User:</strong> ${txn.user} <br>
        <strong>Type:</strong> ${txn.type} <br>
        <strong>Amount:</strong> ${txn.amount} <br>
        <strong>Date:</strong> ${txn.date}
      </div>
    `;

    box.innerHTML += div;
  });
}
