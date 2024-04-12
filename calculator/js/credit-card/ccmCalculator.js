document.getElementById("ccm-calculate").addEventListener("click", () => {
  let ccb = document.getElementById("credit-card-balance").value * 100;
  let r = document.getElementById("interest-rate").value;
  let mp = document.getElementById("minimum-percentage-monthly").value;
  let ma = document.getElementById("minimum-amount-monthly").value * 100;
  let adding_interest=document.getElementById("adding-interest").value
  // console.log(ccb,r,mp,ma);
  principalamount = ccb;
  r = r / 100;
  r = r / 12;
  mp = mp / 100;
  months = 0;
  totalpayment = 0;
  while (ccb > 0) {
    interest = ccb * r;
    interest = Math.round(interest);
    payment = Math.min(
      Math.max(Math.round(interest*adding_interest + mp * ccb), ma),
      ccb + interest
    );

    ccb += interest;
    ccb -= payment;
    months += 1;
    totalpayment += payment;
    console.log(
      months,
      payment / 100,
      interest / 100,
      (payment - interest) / 100,
      ccb
    );
  }
  totalinterest = totalpayment - principalamount;
  totalinterest = totalinterest / 100;
  totalpayment = totalpayment / 100;
  // console.log(months)
  // console.log(totalinterest)
  // console.log(totalpayment)
  document.getElementById("ccm-result").removeAttribute("hidden");
  document.getElementById("total-interest").innerHTML = totalinterest;
  document.getElementById("total-payment").innerHTML = totalpayment;
  document.getElementById("pay-off-months").innerHTML = months;
});

document.getElementById("ccm-reset").addEventListener("click", () => {
  document.getElementById("ccm-calculator").reset();
  document.getElementById("ccm-result").setAttribute("hidden", "true");
});
