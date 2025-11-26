function requestWithdraw() {
    let amount = document.getElementById("amount").value;
    let msg = document.getElementById("msg");

    if (amount < 10) {
        msg.innerText = "Minimum withdraw 10 tk!";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "Withdraw request submitted!";
    msg.style.color = "green";
}
