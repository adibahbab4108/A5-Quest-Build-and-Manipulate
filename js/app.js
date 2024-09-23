const donateBtns = document.querySelectorAll("#donate-btn");
let myBalance = parseFloat(document.getElementById('my-balance').innerText);
const historySectionBtn = document.getElementById('history-section-btn');
const donationSectionBtn = document.getElementById('donate-section-btn');



//All Donate Button Click Operation
for (const donateBtn of donateBtns) {
    donateBtn.addEventListener('click', function () {
        let donatedAmount = parseFloat(getDonatedAmount(donateBtn));
        console.log("current", myBalance, donatedAmount)

        if (myBalance < donatedAmount) {
            donateBtn.parentElement.querySelector('.balance-caution').classList.remove('hidden');
            return;
        }

        donateBtn.parentElement.querySelector('.balance-caution').classList.add('hidden');
        myBalance -= donatedAmount;

        setDonatedAmount(donatedAmount, donateBtn);
        updateMyBalance(myBalance, donatedAmount);
        getDonationdLocationName(donateBtn);
        addTransactionToHistory(donatedAmount)
    })


    const inputField = donateBtn.parentElement.querySelector('input')
    inputField.addEventListener('input', function () {
        const amount = parseFloat(inputField.value);
        console.log(amount)
        if (amount > 0 && myBalance>=amount) {
            return donateBtn.setAttribute('onclick', 'my_modal_5.showModal()')
        } else {
            return donateBtn.removeAttribute('onclick');
        }
    })
}



// Donate Section Button click Operation
donationSectionBtn.addEventListener('click', function () {
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
    donationSectionBtn.classList.add('bg-primary');
    historySectionBtn.classList.remove('bg-primary');
})

// History Section Buttton Click Operation
historySectionBtn.addEventListener('click', function () {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    historySectionBtn.classList.add('bg-primary');
    donationSectionBtn.classList.remove('bg-primary');
})





