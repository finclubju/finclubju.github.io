// get input elements
const savedAtRetirement = document.getElementById("Saved at Retirement");
const retirementYears = document.getElementById("Retirement Years");
const annualReturnRate = document.getElementById("Annual Return Rate");

// get button elements
const retirementIncomeButton = document.getElementById("retirement-income-button");
const resetButton = document.getElementById("reset-button");

// get result element
const retirementIncomeResult = document.getElementById("retirement-income-result");

// add event listeners
retirementIncomeButton.addEventListener("click", calculateRetirementIncome);
resetButton.addEventListener("click", resetCalculator);

function calculateRetirementIncome() {
  const saved = savedAtRetirement.value;
  const years = retirementYears.value;
  const rate = annualReturnRate.value;

  // validate input values
  if (saved <= 0 || years <= 0 || rate <= 0) {
    alert("Please enter valid values for all inputs!");
    return;
  }

  const monthlyRate = rate / 1200;
  const factor = 1 - Math.pow(1 + monthlyRate, -years * 12);
  const monthlyIncome = saved * monthlyRate / factor;

  // display result
  retirementIncomeResult.innerHTML = `Monthly Retirement Income: &#8377;${monthlyIncome.toFixed(2)}`;
}


