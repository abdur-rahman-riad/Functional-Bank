const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');

depositButton.addEventListener('click', function () {
    // Connecting With html ID
    const depositInput = document.getElementById('deposit-amount');
    const depositBox = document.getElementById('deposit-box');
    const balanceBox = document.getElementById('balance-box');
    // Convert String to Float
    const depositAmount = parseFloat(depositInput.value);
    const previousDepositAmount = parseFloat(depositBox.innerText);
    const previousBalanceAmount = parseFloat(balanceBox.innerText);
    // Calculation and Showing Result
    const currentDepositAmount = depositAmount + previousDepositAmount;
    const currentBalanceAmount = depositAmount + previousBalanceAmount;
    depositBox.innerText = currentDepositAmount;
    balanceBox.innerText = currentBalanceAmount;
    console.log(depositAmount + " Taka Added.");
    console.log("Current Deposit: " + currentDepositAmount + " | Current Balance: " + currentBalanceAmount);
    depositInput.value = '';
});

withdrawButton.addEventListener('click', function () {
    // Connecting With html ID
    const withdrawBox = document.getElementById('withdraw-box');
    const withdrawInput = document.getElementById('withdraw-amount');
    const balanceBox = document.getElementById('balance-box');
    // Convert String to Float
    const withdrawAmount = parseFloat(withdrawInput.value);
    const previousWithdrawAmount = parseFloat(withdrawBox.innerText);
    const previousBalanceAmount = parseFloat(balanceBox.innerText);
    // Calculation and Showing Result
    const currentWithdrawAmount = withdrawAmount + previousWithdrawAmount;
    const currentBalanceAmount = previousBalanceAmount - withdrawAmount;
    withdrawBox.innerText = currentWithdrawAmount;
    balanceBox.innerText = currentBalanceAmount;
    console.log(withdrawAmount + " Taka Withdraw.");
    console.log("Current Withdraw: " + currentWithdrawAmount + " | Current Balance: " + currentBalanceAmount);
    withdrawInput.value = '';
});