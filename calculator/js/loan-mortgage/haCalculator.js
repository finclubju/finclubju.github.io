document.getElementById("ha-calculate").addEventListener("click", () => {
  let annualIncome = +document.getElementById("annual-income").value;
  let monthlyDebt = +document.getElementById("monthly-debt").value;
  let downPayment = +document.getElementById("down-payment").value;
  let interestRate = +document.getElementById("interest-rate").value / 1200;
  let loanTerm = +document.getElementById("loan-term").value;
  let dtiRatio = +document.getElementById("dti-ratio").value;
  let propertyTax = +document.getElementById("annual-property-tax").value;
  let insurance = +document.getElementById("annual-insurance").value;

  let annualPayment =
    (annualIncome * dtiRatio) / 100 -
    propertyTax -
    insurance -
    monthlyDebt * 12;
  let monthlyPayment = annualPayment / 12;
  let x = Math.pow(1 + interestRate, loanTerm);
  let affordablePrice =
    (monthlyPayment * (x - 1)) / (interestRate * x) + downPayment;

  let finalAffordablePrice = Math.abs(affordablePrice.toFixed(2));
  let finalMonthlyPayment = Math.abs(monthlyPayment.toFixed(2));
  let finalAnnualPayment = Math.abs(annualPayment.toFixed(2));

  document.getElementById("affordable-home-price").innerHTML =
    affordablePrice >= 0
      ? finalAffordablePrice
      : "(" + finalAffordablePrice + ")";
  document.getElementById("monthly-payment").innerHTML =
    monthlyPayment >= 0
      ? monthlyPayment.toFixed(2)
      : "(" + finalMonthlyPayment + ")";
  document.getElementById("annual-payment").innerHTML =
    annualPayment >= 0
      ? annualPayment.toFixed(2)
      : "(" + finalAnnualPayment + ")";

  document.getElementById("ha-result").removeAttribute("hidden");
});

document.getElementById("ha-reset").addEventListener("click", () => {
  document.getElementById("ha-calculator").reset();
  document.getElementById("ha-result").setAttribute("hidden", "true");
});
