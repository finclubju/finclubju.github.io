function boxChecked() {
  let catchUpBox = document.getElementById("catch-up-box");
  let catchUp = document.getElementById("catch-up");
  console.log(catchUpBox.checked);
  if (catchUpBox.checked) {
    catchUp.removeAttribute("disabled");
  } else {
    catchUp.setAttribute("disabled", "true");
  }
}

function calculate() {
  let maxContribLimit = +document.getElementById("contribution-limit").value;
  let contribToDate = +document.getElementById("contribution-to-date").value;
  let remainingPayPeriods = +document.getElementById("remaining-pay-periods")
    .value;
  let catchUp = +document.getElementById("catch-up").value;
  let maxContribLimit50Plus = catchUp;
  let maxContribLimitTotal = maxContribLimit + maxContribLimit50Plus;

  // Calculate the maximum contribution per pay period
  let maxContribPerPayPeriod =
    (maxContribLimitTotal - contribToDate) / remainingPayPeriods;

  // Calculate the amount remaining to max contribution
  let amountRemaining = maxContribLimitTotal - contribToDate;
  let result1 = document.getElementById("max-contribution");
  let result2 = document.getElementById("amount-remaining");
  result1.innerHTML =
    "<p>Maximum Contribution per Remaining Pay Period (in INR): " +
    maxContribPerPayPeriod.toFixed(2) +
    "</p>";
  result2.innerHTML =
    "<p>Amount Remaining to Max Contribution (in INR): " +
    amountRemaining.toFixed(2) +
    "</p>";
}
