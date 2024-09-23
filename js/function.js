function getDonatedAmount(donateBtn) {
    const val = parseFloat(donateBtn.parentElement.querySelector('input').value);
    donateBtn.parentElement.querySelector('input').value = "";

    //input validation
    if (val <= 0 || isNaN(val)) {
        alert("Invalid input");
        return 0;
    }
    return val;
}
function setDonatedAmount(donatedAmount, donateBtn) {
    let totalDonatedAmount = parseFloat(donateBtn.parentElement.querySelector('#donated-amount').innerText);
    totalDonatedAmount += donatedAmount;
    donateBtn.parentElement.querySelector('#donated-amount').innerText = totalDonatedAmount;

}

function updateMyBalance(myBalance, donatedAmount, donateBtn) {
    myBalance = parseFloat(myBalance.innerText);
    const myCurrentBalance = myBalance - donatedAmount;
    // console.log(myBalance)
    document.querySelector('#my-balance').innerText = myCurrentBalance;
}

let text = '';
function getDonatedLocation(donateBtn) {
    text = donateBtn.parentElement.querySelector('#donate-location').innerText;
    console.log(text)
}


let dateTimeLocation = '';
const date = new Date();
const options = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short'
};

const formattedDate = date.toLocaleString('en-US', options);
const countryName = new Intl.DisplayNames([navigator.language], { type: 'region' }).of('BD');
dateTimeLocation = `${formattedDate} (${countryName} Standard Time)`;
console.log(dateTimeLocation)


function addTransactionToHistory(donatedAmount,) {
    document.getElementById('history-section').innerHTML += `
         <div class="p-4 border rounded-lg">
                <h2 class="font-bold mb-4">${donatedAmount} Taka is Donated for ${text} </h2>
                <small class="text-gray-400"> Date: ${dateTimeLocation} </small>
            </div>
    `
}