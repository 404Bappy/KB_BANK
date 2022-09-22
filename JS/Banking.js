//Handle Deposit Submit Event //

document.getElementById("Deposite-submit").addEventListener('click', function () {
    //Get the Deposited Amount//
    const depositInput = document.getElementById('Deposit-amount');
    const newDepositAmount = depositInput.value;
    console.log(newDepositAmount);

    /// Update Deposit Total ////

    const totalDeposit = document.getElementById('Total-Deposit');
    const previousDepositAmount = totalDeposit.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    totalDeposit.innerText = newDepositTotal;

    ////Updating Balancea ////////

    const






    //clear the deposit input field//
    depositInput.value = ' ';
})