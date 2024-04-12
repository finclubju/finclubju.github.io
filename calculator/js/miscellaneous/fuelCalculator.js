function fuelcalculator1reset() {
  document.getElementById("fuel-calculator-1").reset();
}
function fuelcalculator2reset() {
  document.getElementById("fuel-calculator-2").reset();
}
document
  .getElementById("fuel-unit-price-calculate")
  .addEventListener("click", () => {
    let fuel_purchased = +document.getElementById("fuel-purchased").value;
    let fuel_cost = +document.getElementById("fuel-cost").value;
    document.getElementById("fuel-unit-price").value = (
      fuel_cost / fuel_purchased
    ).toFixed(2);

    document.getElementById("fuel-result").innerHTML =
      `<p>Fuel unit price: ` + (fuel_cost / fuel_purchased).toFixed(2) + `</p>`;
  });
document
  .getElementById("fuel-purchased-calculate")
  .addEventListener("click", () => {
    let fuel_cost = +document.getElementById("fuel-cost").value;
    let fuel_unit_price = +document.getElementById("fuel-unit-price").value;

    document.getElementById("fuel-purchased").value = (
      fuel_cost / fuel_unit_price
    ).toFixed(2);

    document.getElementById("fuel-result").innerHTML =
      `<p>Fuel purchased: ` + (fuel_cost / fuel_unit_price).toFixed(2) + `</p>`;
  });
document.getElementById("fuel-cost-calculate").addEventListener("click", () => {
  let fuel_unit_price = +document.getElementById("fuel-unit-price").value;
  let fuel_purchased = +document.getElementById("fuel-purchased").value;
  document.getElementById("fuel-cost").value = (
    fuel_purchased * fuel_unit_price
  ).toFixed(2);

  document.getElementById("fuel-result").innerHTML =
    `<p>Fuel cost: ` + (fuel_purchased * fuel_unit_price).toFixed(2) + `</p>`;
});

document.getElementById("distance-calculate").addEventListener("click", () => {
  let distance = +document.getElementById("distance").value;
  let fuel_used = +document.getElementById("fuel-used").value;
  let fuel_economy = +document.getElementById("fuel-economy").value;
  document.getElementById("distance").value = (
    fuel_used * fuel_economy
  ).toFixed(2);

  document.getElementById("fuel-result").innerHTML =
    `<p>Distance: ` + (fuel_used * fuel_economy).toFixed(2) + `</p>`;
});

document.getElementById("fuel-used-calculate").addEventListener("click", () => {
  let distance = +document.getElementById("distance").value;

  let fuel_economy = +document.getElementById("fuel-economy").value;
  document.getElementById("fuel-used").value = (
    distance / fuel_economy
  ).toFixed(2);

  document.getElementById("fuel-result").innerHTML =
    `<p>Fuel used: ` + (distance / fuel_economy).toFixed(2) + `</p>`;
});

document
  .getElementById("fuel-economy-calculate")
  .addEventListener("click", () => {
    let distance = +document.getElementById("distance").value;
    let fuel_used = +document.getElementById("fuel-used").value;
    document.getElementById("fuel-economy").value = (
      distance / fuel_used
    ).toFixed(2);

    document.getElementById("fuel-result").innerHTML =
      `<p>Fuel economy: ` + (distance / fuel_used).toFixed(2) + `</p>`;
  });
