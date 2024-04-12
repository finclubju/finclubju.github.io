document.getElementById("loan-calculate").addEventListener("click", () => {
  let la = +document.getElementById("loan-amount").value;
  let ir = +document.getElementById("interest-rate").value;
  let lt = +document.getElementById("loan-term").value;

  ir /= 12 * 100;
  let x = Math.pow(1 + ir, lt);
  let mp = (la * ir * x) / (x - 1);
  let tp = mp * lt;
  let ti = tp - la;
  let ap = mp * 12;

  document.getElementById("monthly-payment").innerHTML = mp.toFixed(2);
  document.getElementById("total-payment").innerHTML = tp.toFixed(2);
  document.getElementById("total-interest").innerHTML = ti.toFixed(2);
  document.getElementById("annual-payment").innerHTML = ap.toFixed(2);

  document.getElementById("loan-result").removeAttribute("hidden");
});

document.getElementById("loan-reset").addEventListener("click", () => {
  document.getElementById("loan-calculator").reset();
  document.getElementById("loan-result").setAttribute("hidden", "true");
});
