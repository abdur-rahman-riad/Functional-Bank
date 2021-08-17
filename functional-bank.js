// Getting User Input Using Funtion
function takeInput(inputID) {
    const inputFiled = document.getElementById(inputID);
    const inputAmount = parseFloat(inputFiled.value);
    inputFiled.value = '';
    return inputAmount;
}
// Update Deposit & Withdraw Box Value
function boxDepositWithdraw(boxValueID, newAmount) {
    const boxAmount = document.getElementById(boxValueID);
    const previousAmount = parseFloat(boxAmount.innerText);
    boxAmount.innerText = previousAmount + newAmount;
}
// Getting Current Balance
function currentBalance() {
    const balacne = docuemnt.getElementById('balance-box');
    return balanceAmount = parseFloat(balacne.innerText);
}
// Update Balance
function updateBalance(amount, isAdd) {
    const balacne = docuemnt.getElementById('balance-box');
    const previousBalance = currentBalance();
    if (isAdd == true) {
        balacne.innerText = previousBalance + amount;
    }
    else {
        balacne.innerText = previousBalance - amount;
    }
}
// Event Handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = takeInput('deposit-amount');
    boxDepositWithdraw('deposit-box', depositAmount);
    updateBalance(depositAmount, true);
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = takeInput('withdraw-amount');
    boxDepositWithdraw('withdraw-box', withdrawAmount)
    updateBalance(withdrawAmount, false);
});