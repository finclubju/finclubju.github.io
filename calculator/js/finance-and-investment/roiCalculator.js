document.getElementById("roi-calculate").addEventListener("click", () => {
  let oi = +document.getElementById("original-investment").value;
  let ir = +document.getElementById("investment-return").value;
  let p = +document.getElementById("holding-period").value;

  let gain;
  let roi;
  let annualizedROI;

  if (oi === "" || ir === "" || p === "") {
    gain = "";
    roi = "";
    annualizedROI = "";
  } else {
    gain = ir - oi;
    roi = (gain / oi) * 100;
    annualizedROI = (Math.pow(ir / oi, 1 / p) - 1) * 100;
  }

  document.getElementById("gain").innerHTML = gain;
  document.getElementById("roi").innerHTML = roi.toFixed(2) + "%";
  document.getElementById("annualized-roi").innerHTML =
    annualizedROI.toFixed(2) + "%";
  document.getElementById("roi-result").removeAttribute("hidden");
  //   console.log(roi);
});

document.getElementById("roi-reset").addEventListener("click", () => {
  document.getElementById("roi-calculator").reset();
  document.getElementById("roi-result").setAttribute("hidden", "true");
});
