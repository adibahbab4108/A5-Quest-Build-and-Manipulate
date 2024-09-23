const donateBtns = document.querySelectorAll("#donate-btn");
const myBalance = document.getElementById('my-balance');
const historySectionBtn = document.getElementById('history-section-btn');
const donationSectionBtn = document.getElementById('donate-section-btn');


// getCurrentDateTimeLocation();
//All Donate Button Click Operation
for (const donateBtn of donateBtns) {
    donateBtn.addEventListener('click', function () {
        let donatedAmount = parseFloat(getDonatedAmount(donateBtn));
        setDonatedAmount(donatedAmount, donateBtn);
        updateMyBalance(myBalance, donatedAmount, donateBtn);
        getDonatedLocation(donateBtn);
        addTransactionToHistory(donatedAmount)
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





