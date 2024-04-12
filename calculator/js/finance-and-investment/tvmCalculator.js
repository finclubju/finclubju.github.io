document
  .getElementById("present-value-button")
  .addEventListener("click", () => {
    let pv = document.getElementById("present-value");
    let ir = +document.getElementById("interest-rate").value;
    let cp = +document.getElementById("compounding-period").value;
    let y = +document.getElementById("years").value;
    let fv = +document.getElementById("future-value").value;

    let x = Math.pow(1 + ir / (cp * 100), cp * y);
    let res = fv / x;

    // console.log(x);
    // console.log(fv);

    pv.value = res.toFixed(2);
    document.getElementById("tvm-res").innerHTML =
      `<p>Present Value: ` + res.toFixed(2) + `</p>`;
  });

document
  .getElementById("interest-rate-button")
  .addEventListener("click", () => {
    let pv = +document.getElementById("present-value").value;
    let ir = document.getElementById("interest-rate");
    let cp = +document.getElementById("compounding-period").value;
    let y = +document.getElementById("years").value;
    let fv = +document.getElementById("future-value").value;

    let x = Math.log(fv / pv) / (cp * y);
    let res = (Math.exp(x) - 1) * cp * 100;

    // console.log(res);
    ir.value = res.toFixed(2);
    document.getElementById("tvm-res").innerHTML =
      `<p>Interest Rate: ` + res.toFixed(2) + `</p>`;
  });

document.getElementById("years-button").addEventListener("click", () => {
  let pv = +document.getElementById("present-value").value;
  let ir = +document.getElementById("interest-rate").value;
  let cp = +document.getElementById("compounding-period").value;
  let y = document.getElementById("years");
  let fv = +document.getElementById("future-value").value;

  let a = Math.log(fv / pv);
  let b = Math.log(1 + ir / cp);
  let res = a / (b * cp);
  res = Math.ceil(res);

  // console.log(res);
  y.value = res.toFixed(0);
  document.getElementById("tvm-res").innerHTML =
    `<p>Years: ` + res.toFixed(2) + `</p>`;
});

document.getElementById("future-value-button").addEventListener("click", () => {
  let pv = +document.getElementById("present-value").value;
  let ir = +document.getElementById("interest-rate").value;
  let cp = +document.getElementById("compounding-period").value;
  let y = +document.getElementById("years").value;
  let fv = document.getElementById("future-value");

  let res = Math.pow(1 + ir / (cp * 100), cp * y) * pv;

  // console.log(res);
  fv.value = res.toFixed(2);
  document.getElementById("tvm-res").innerHTML =
    `<p>Future Value: ` + res.toFixed(2) + `</p>`;
});

document.getElementById("tvm-reset").addEventListener("click", () => {
  document.getElementById("tvm-calculator").reset();
});
