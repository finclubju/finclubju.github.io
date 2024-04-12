document.getElementById("apr-calculate").addEventListener("click", () => {
  let la = +document.getElementById("loan-amount").value;
  let ir = +document.getElementById("interest-rate").value;
  let lt = +document.getElementById("loan-term").value;
  let fees = +document.getElementById("fees").value;

  //   let apr = +calculateAPR(la, lt, ir / 100, fees);
  ir /= 12 * 100;
  let x = Math.pow(1 + ir, lt);
  let mp = ((la + fees) * ir * x) / (x - 1);
  let tp = mp * lt;
  let ti = tp - la - fees;
  //   let apr = ((fees + ti) / (la * lt * 30)) * 365 * 100;
  let apr = ((ti + fees) / la / (lt * 30)) * 365 * 100;

  console.log(mp);
  console.log(apr);

  //   document.getElementById("monthly-payment").innerHTML = mp.toFixed(2);
  //   document.getElementById("total-payment").innerHTML = tp.toFixed(2);
  //   document.getElementById("total-interest").innerHTML = ti.toFixed(2);
  document.getElementById("apr").innerHTML = apr.toFixed(2);

  document.getElementById("apr-result").removeAttribute("hidden");
});

document.getElementById("apr-reset").addEventListener("click", () => {
  document.getElementById("apr-calculator").reset();
  document.getElementById("apr-result").setAttribute("hidden", "true");
});
