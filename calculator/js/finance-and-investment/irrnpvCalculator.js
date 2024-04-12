function calc() {
  // Get the discount rate and cash flows from the HTML form
  let discountRate = +document.getElementById("discount-rate").value;
  discountRate = discountRate / 100;
  let cashFlow0 = +document.getElementById("cash-flow-0").value;
  let cashFlow1 = +document.getElementById("cash-flow-1").value;
  let cashFlow2 = +document.getElementById("cash-flow-2").value;
  let cashFlow3 = +document.getElementById("cash-flow-3").value;
  let cashFlow4 = +document.getElementById("cash-flow-4").value;
  let cashFlow5 = +document.getElementById("cash-flow-5").value;
  let cashFlow6 = +document.getElementById("cash-flow-6").value;
  let cashFlow7 = +document.getElementById("cash-flow-7").value;
  let cashFlow8 = +document.getElementById("cash-flow-8").value;
  let cashFlow9 = +document.getElementById("cash-flow-9").value;

  // Calculate the present value (PV) of each cash flow using the discount rate
  let pv0 = cashFlow0 / Math.pow(1 + discountRate, 0);
  let pv1 = cashFlow1 / Math.pow(1 + discountRate, 1);
  let pv2 = cashFlow2 / Math.pow(1 + discountRate, 2);
  let pv3 = cashFlow3 / Math.pow(1 + discountRate, 3);
  let pv4 = cashFlow4 / Math.pow(1 + discountRate, 4);
  let pv5 = cashFlow5 / Math.pow(1 + discountRate, 5);
  let pv6 = cashFlow6 / Math.pow(1 + discountRate, 6);
  let pv7 = cashFlow7 / Math.pow(1 + discountRate, 7);
  let pv8 = cashFlow8 / Math.pow(1 + discountRate, 8);
  let pv9 = cashFlow9 / Math.pow(1 + discountRate, 9);

  // Calculate the net present value (NPV) by summing the present values of all cash flows
  let npv = pv0 + pv1 + pv2 + pv3 + pv4 + pv5 + pv6 + pv7 + pv8 + pv9;
  //calculating irr

  let irr = calculateIRR([
    cashFlow0,
    cashFlow1,
    cashFlow2,
    cashFlow3,
    cashFlow4,
    cashFlow5,
    cashFlow6,
    cashFlow7,
    cashFlow8,
    cashFlow9,
  ]);
  irr = irr.toFixed(2);

  // Display the NPV to the user
  document.getElementById("irrnpv-result").removeAttribute("hidden");
  document.getElementById("result-npv").innerHTML = npv.toFixed(2);

  document.getElementById("result-irr").innerHTML = irr * 100;
}

function reset() {
  document.getElementById("irrnpv-result").setAttribute("hidden", true);
  document.getElementById("irrnpv-form").reset();
}

function calculateIRR(cashFlows) {
  let lowwerBound = -0.9999;

  let upperBound = 1;
  while (calculateGuess(upperBound) > 0) {
    upperBound *= 2;
  }
  if (calculateGuess(upperBound) < 0) {
    while (upperBound - lowwerBound > 0.001) {
      let guess = (upperBound + lowwerBound) / 2;
      if (calculateGuess(guess) > 0) {
        lowwerBound = guess;
      } else {
        upperBound = guess;
      }
    }
  }
  return (upperBound + lowwerBound) / 2;

  function calculateGuess(x) {
    let guess = x;
    let pv = -cashFlows[0];
    for (let i = 1; i < cashFlows.length; i++) {
      pv += cashFlows[i] / Math.pow(1 + guess, i);
    }
    return pv;
  }
}
