document.getElementById("ptd-calculate").addEventListener("click", () => {
  let ir = +document.getElementById("annual-interest-rate").value;

  let rule72 = 72 / ir;
  let exact = Math.log(2) / Math.log(1 + ir / 100);

  document.getElementById("ptd-rule72").innerHTML =
    rule72.toFixed(2) + " years";
  document.getElementById("ptd-exact").innerHTML = exact.toFixed(2) + " years";
});

document.getElementById("ir-calculate").addEventListener("click", () => {
  let ytd = +document.getElementById("years-to-double").value;

  let rule72 = 72 / ytd;
  let exact = (Math.exp(Math.log(2) / ytd) - 1) * 100;

  document.getElementById("ir-rule72").innerHTML = rule72.toFixed(2) + "%";
  document.getElementById("ir-exact").innerHTML = exact.toFixed(2) + "%";
});

document.getElementById("rule72-table").addEventListener("click", () => {
  location.href = "../finance-and-investment/rule72Table.html";
});
