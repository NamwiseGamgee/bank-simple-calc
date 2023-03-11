document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawElement = document.getElementById('with-total');
    const withdrawTotalString = withdrawElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    const prevBalanceElement = document.getElementById('balance-total');
    const prevBalanceString = prevBalanceElement.innerText;
    const prevBalance = parseFloat(prevBalanceString);


    const newWithdrawElement = document.getElementById('w-amount');
    const newWithdrawAmountString = newWithdrawElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if (prevBalance >= newWithdrawAmount) {
        const withdrawTotalF = withdrawTotal + newWithdrawAmount;
        withdrawElement.innerText = withdrawTotalF;
        const newBalance = prevBalance - newWithdrawAmount;
        prevBalanceElement.innerText = newBalance;
    }
    else {
        alert('Yo you aint got that much money homie. Careful');
    }

    
    newWithdrawElement.value = '';

});