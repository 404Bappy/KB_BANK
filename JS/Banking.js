//Handle Deposit Submit Event //

document.getElementById("Deposite-submit").addEventListener('click', function(){
    //Get the Deposited Amount//
    const depositInput = document.getElementById('Deposit-amount');
    const deposiAmount = depositInput.value ;
    console.log(deposiAmount)

    const totalDeposit = document.getElementById('Total-Deposit');
   totalDeposit.innerText = deposiAmount;

   //clear the deposit input field//
   depositInput.value = ' ';
})