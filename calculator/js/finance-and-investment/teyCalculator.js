document.getElementById("calc-taxable-yield").addEventListener("click", () => {
  let taxfreeYield = +document.getElementById("tax-free-yield").value;
  let incomeTaxRate = +document.getElementById("income-tax-rate1").value;
  let taxableYield = document.getElementById("res1");

  let res = taxfreeYield / (1 - incomeTaxRate / 100);
  taxableYield.innerHTML = res.toFixed(2);
});

document.getElementById("calc-tax-free-yield").addEventListener("click", () => {
  let taxableYield = +document.getElementById("taxable-yield").value;
  let incomeTaxRate = +document.getElementById("income-tax-rate2").value;
  let taxfreeYield = document.getElementById("res2");

  let res = taxableYield * (1 - incomeTaxRate / 100);
  taxfreeYield.innerHTML = res.toFixed(2);
});

document.getElementById("tey-reset").addEventListener("click", () => {
  document.getElementById("taxable-yield-calculator").reset();
  document.getElementById("tax-free-yield-calculator").reset();
  document.getElementById("res1").innerHTML = "";
  document.getElementById("res2").innerHTML = "";
});

document.getElementById("tey-table").addEventListener("click", () => {
  location.href = "../finance-and-investment/teyTable.html";
});
