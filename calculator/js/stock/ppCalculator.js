document.getElementById("pp-calculate").addEventListener("click", () => {
  let low = +document.getElementById("low").value;
  let high = +document.getElementById("high").value;
  let close = +document.getElementById("prev_close").value;

  let pp = (low + high + close) / 3;
  let r1 = 2 * pp - low;
  let r2 = pp + (high - low);
  let r3 = high + 2 * (pp - low);
  let s1 = 2 * pp - high;
  let s2 = pp - (high - low);
  let s3 = low - 2 * (high - pp);

  document.getElementById("r3-r").innerHTML = r3.toFixed(2);
  document.getElementById("r2-r").innerHTML = r2.toFixed(2);
  document.getElementById("r1-r").innerHTML = r1.toFixed(2);
  document.getElementById("pivot-point").innerHTML = pp.toFixed(2);
  document.getElementById("s1-s").innerHTML = s1.toFixed(2);
  document.getElementById("s2-s").innerHTML = s2.toFixed(2);
  document.getElementById("s3-s").innerHTML = s3.toFixed(2);

  document.getElementById("pp-result").removeAttribute("hidden");
});

document.getElementById("pp-reset").addEventListener("click", () => {
  document.getElementById("pp-result").setAttribute("hidden", "true");
});
