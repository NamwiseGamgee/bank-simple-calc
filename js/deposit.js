// step 1: add event listener to the button
document.getElementById('deposit-btn').addEventListener('click',function(){
    // step 2: get the deposit amount from the deposit input field
    // for input field use .value to get the value inside the field 
    
    const depoField = document.getElementById('d-amount');
    const newDepAmountString = depoField.value;
    const newDepAmount = parseFloat(newDepAmountString);

    if(isNaN(newDepAmount)){
        alert('Put a number');
        depoField.value='';
        return;
    }
    // console.log(newDepAmount);
    // step 3: get the current deposit total amount
    // for non input (element other than text area or input... use .innerText)
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 4: update the deposited amount
    const currentDepositTotal = previousDepositTotal + newDepAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: update total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalalnceTotalString = balanceTotalElement.innerText;
    const prevBalalnceTotal = parseFloat(prevBalalnceTotalString);

    // step 6: add the balance to the current bal
    const currentBalanceTotal = prevBalalnceTotal + newDepAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // clear the deposit field
    depoField.value='';
    
});