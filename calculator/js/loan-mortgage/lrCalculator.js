document.getElementById("lr-calculate").addEventListener("click", () => {
  let loanAmount = +document.getElementById("loan-amount").value;
  let oldIR = +document.getElementById("old-interest-rate").value;
  let oldLT = +document.getElementById("old-loan-term").value;
  let paymentMade = +document.getElementById("payment-made").value;
  let newIR = +document.getElementById("new-interest-rate").value;
  let newLT = +document.getElementById("new-loan-term").value;

  oldIR /= 12 * 100;
  let x = Math.pow(1 + oldIR, oldLT);
  let monthlyPayment = (loanAmount * oldIR * x) / (x - 1);
  let totalInterest = monthlyPayment * oldLT - loanAmount;

  let interestPaid = 0;
  let balance = loanAmount;
  for (let i = 0; i < paymentMade; i++) {
    let interest = balance * oldIR;
    interestPaid += interest;
    balance -= monthlyPayment - interest;
  }
  let oldRemainingInterest = totalInterest - interestPaid;

  newIR /= 12 * 100;
  x = Math.pow(1 + newIR, newLT);
  let newMonthlyPayment = (balance * newIR * x) / (x - 1);
  let newTotalInterest = newMonthlyPayment * newLT - balance;
  let interestSaved = newTotalInterest - oldRemainingInterest;

  document.getElementById("old-total-mortgage").innerHTML =
    loanAmount.toFixed(2);
  document.getElementById("new-total-mortgage").innerHTML = balance.toFixed(2);
  document.getElementById("old-monthly-payment").innerHTML =
    monthlyPayment.toFixed(2);
  document.getElementById("new-monthly-payment").innerHTML =
    newMonthlyPayment.toFixed(2);
  document.getElementById("old-remaining-interest").innerHTML =
    oldRemainingInterest.toFixed(2);
  document.getElementById("new-remaining-interest").innerHTML =
    newTotalInterest.toFixed(2);
  document.getElementById("interest-saved").innerHTML =
    interestSaved.toFixed(2);

  document.getElementById("lr-result").removeAttribute("hidden");
});

document.getElementById("lr-reset").addEventListener("click", () => {
  document.getElementById("lr-calculator").reset();
  document.getElementById("lr-result").setAttribute("hidden", "true");
});
