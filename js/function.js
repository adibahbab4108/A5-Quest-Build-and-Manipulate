function getDonatedAmount(donateBtn) {
    const val = parseFloat(donateBtn.parentElement.querySelector('input').value);

    //input validation
    if (val <= 0 || isNaN(val)) {
        alert("Invalid input");
        return 0;
    }
    donateBtn.parentElement.querySelector('input').value = "";
    return val;
}

function setDonatedAmount(donatedAmount, donateBtn) {
    let totalDonatedAmount = parseFloat(donateBtn.parentElement.querySelector('.donated-amount').innerText);
    totalDonatedAmount += donatedAmount;
    donateBtn.parentElement.querySelector('.donated-amount').innerText = totalDonatedAmount;

}

function updateMyBalance(myCurrentBalance) {

    document.querySelector('#my-balance').innerText = myCurrentBalance;
}

let text = '';
function getDonationdLocationName(donateBtn) {
    text = donateBtn.parentElement.querySelector('#donate-location').innerText;
}




function addTransactionToHistory(donatedAmount) {
    const date = new Date();
    if (donatedAmount <= 0) return;
    else {
        document.getElementById('history-section').innerHTML += `
         <div class="p-6 border rounded-lg">
                <h2 class="font-bold mb-4">${donatedAmount} Taka is Donated for ${text} </h2>
                <small class="text-gray-400"> Date: ${date} </small>
            </div>
    `
    }
}