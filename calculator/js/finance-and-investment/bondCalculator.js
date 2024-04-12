document.getElementById("bond-calculate").addEventListener("click", () => {
  let cp = +document.getElementById("current-price").value;
  let fv = +document.getElementById("face-value").value;
  let cr = +document.getElementById("coupon-rate").value;
  let ytm = +document.getElementById("years-to-maturity").value;
  let compounding = document.getElementById("compounding").value;
  let n;
  if (compounding === "Semiannually") n = 2;
  else n = 1;

  let currentYield = (fv * cr) / cp;
  //   let yieldToMaturity = Math.pow(fv / (cr / 100), 1 / ytm) - 1;
  let c = (cr / (n * 100)) * fv;
  let a = (fv - cp) / (n * ytm);
  let b = (fv + cp) / 2;
  let yieldToMaturity = ((c + a) / b) * n * 100;

  console.log(currentYield);
  console.log(yieldToMaturity);

  document.getElementById("current-yield").innerHTML =
    currentYield.toFixed(2) + "%";
  document.getElementById("yield-to-maturity").innerHTML =
    yieldToMaturity.toFixed(2) + "%";

  document.getElementById("bond-result").removeAttribute("hidden");
});

document.getElementById("bond-reset").addEventListener("click", () => {
  document.getElementById("bond-calculator").reset();
  document.getElementById("bond-result").setAttribute("hidden", "true");
});
