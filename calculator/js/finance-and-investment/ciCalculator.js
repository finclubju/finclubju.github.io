document.getElementById("ci-calculate").addEventListener("click", () => {
  let pa = +document.getElementById("principal-amount").value;
  let ir = +document.getElementById("interest-rate").value;
  let t = +document.getElementById("time").value;
  let compounding = document.getElementById("compounding").value;

  let interestAmount;
  let totalPrincipal;

  if (compounding === "No Compound") {
    interestAmount = (pa * ir * t) / 100;
    totalPrincipal = interestAmount + totalPrincipal;
  } else {
    let n;
    if (compounding === "Daily") n = 365;
    if (compounding === "Weekly") n = 52;
    if (compounding === "Monthly") n = 12;
    if (compounding === "Quarterly") n = 4;
    if (compounding === "Semiannually") n = 2;
    if (compounding === "Annually") n = 1;

    totalPrincipal = pa * Math.pow(1 + ir / (100 * n), n * t);
    interestAmount = totalPrincipal - pa;
  }

  document.getElementById("total-principal").innerHTML =
    totalPrincipal.toFixed(2);
  document.getElementById("interest-amount").innerHTML =
    interestAmount.toFixed(2);
  document.getElementById("ci-result").removeAttribute("hidden");
  // console.log(interestAmount);
});

document.getElementById("ci-reset").addEventListener("click", () => {
  document.getElementById("ci-calculator").reset();
  document.getElementById("ci-result").setAttribute("hidden", "true");
});
