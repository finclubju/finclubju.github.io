document.getElementById("iom-calculate").addEventListener("click", () => {
  let loanAmount = +document.getElementById("loan-amount").value;
  let interestOnlyRate = +document.getElementById("interest-only-rate").value;
  let conventionalRate = +document.getElementById("annual-interest-rate").value;
  let loanTerm = +document.getElementById("loan-term").value;

  conventionalRate /= 12 * 100;
  let x = Math.pow(1 + conventionalRate, loanTerm);
  let monthlyPayment = (loanAmount * conventionalRate * x) / (x - 1);
  let totalPayment = monthlyPayment * loanTerm;
  let totalInterest = totalPayment - loanAmount;
  let annualPayment = monthlyPayment * 12;

  interestOnlyRate /= 12 * 100;
  let interestOnlyMonthlyPayment = loanAmount * interestOnlyRate;
  let interestOnlyAnnualPayment = interestOnlyMonthlyPayment * 12;
  let interestOnlyTotalPayment = interestOnlyMonthlyPayment * loanTerm;

  document.getElementById("conventional-monthly-payment").innerHTML =
    monthlyPayment.toFixed(2);
  document.getElementById("interest-only-monthly-payment").innerHTML =
    interestOnlyMonthlyPayment.toFixed(2);
  document.getElementById("conventional-total-payment").innerHTML =
    totalPayment.toFixed(2);
  document.getElementById("interest-only-total-payment").innerHTML =
    interestOnlyTotalPayment.toFixed(2);
  document.getElementById("conventional-total-interest").innerHTML =
    totalInterest.toFixed(2);
  document.getElementById("interest-only-total-interest").innerHTML =
    interestOnlyTotalPayment.toFixed(2);
  document.getElementById("conventional-annual-payment").innerHTML =
    annualPayment.toFixed(2);
  document.getElementById("interest-only-annual-payment").innerHTML =
    interestOnlyAnnualPayment.toFixed(2);
  document.getElementById("conventional-principal-paid").innerHTML =
    loanAmount.toFixed(2);
  document.getElementById("interest-only-principal-paid").innerHTML = 0.0;

  document.getElementById("iom-result").removeAttribute("hidden");
});

document.getElementById("iom-reset").addEventListener("click", () => {
  document.getElementById("iom-calculator").reset();
  document.getElementById("iom-result").setAttribute("hidden", "true");
});
