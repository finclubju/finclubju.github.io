function calculateLoan(event) {
  event.preventDefault();

  // Get form values
  const vehiclePrice = Number(document.getElementById("vehiclePrice").value);
  const salesTax = Number(document.getElementById("salesTax").value);
  const maxSalesTax = Number(document.getElementById("maxSalesTax").value);
  const taxableFees = Number(document.getElementById("taxableFees").value);
  const nonTaxableFees = Number(
    document.getElementById("nonTaxableFees").value
  );
  const downPayment = Number(document.getElementById("downPayment").value);
  const tradeInValue = Number(document.getElementById("tradeInValue").value);
  const amountOwed = Number(document.getElementById("amountOwed").value);
  const interestRate = Number(document.getElementById("interestRate").value);
  const loanTerm = Number(document.getElementById("loanTerm").value);
  const extraPayment = Number(document.getElementById("extraPayment").value);

  // Calculate loan details
  const taxRate = Math.min(salesTax, maxSalesTax) / 100;
  const taxAmount = (vehiclePrice + taxableFees) * taxRate;
  const totalFees = taxableFees + nonTaxableFees;
  const loanAmount =
    vehiclePrice +
    totalFees +
    taxAmount -
    downPayment -
    tradeInValue +
    amountOwed;
  const monthlyRate = interestRate / 1200;
  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
  const totalInterest = monthlyPayment * loanTerm - loanAmount;
  const totalLoanPayment = loanAmount + totalInterest;
  const upfrontPayment =
    downPayment + tradeInValue - amountOwed + totalFees + taxAmount;
  const total = vehiclePrice + totalFees + taxAmount + totalInterest;

  // Display loan details
  const results = document.getElementById("results");
  results.innerHTML = `
    <h2>Loan Details:</h2>
    <p>Affordable Vehicle Price: $${vehiclePrice.toFixed(2)}</p>
    <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
    <p>Sales Tax: $${taxAmount.toFixed(2)}</p>
    <p>Amount Financed: $${loanAmount.toFixed(2)}</p>
    <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    <p>Total Loan Payment: $${totalLoanPayment.toFixed(2)}</p>
    <p>Upfront Payment: $${upfrontPayment.toFixed(2)}</p>
    <p>Total (Price + Interest + Tax + Fee): $${total.toFixed(2)}</p>
`;
}
