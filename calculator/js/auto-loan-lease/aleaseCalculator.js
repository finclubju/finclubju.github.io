document.getElementById("a-lease-calculate").addEventListener("click",()=>
{
    console.log("what")
    let vfp=Number(document.getElementById("vehicle-final-price").value);
    let st=Number(document.getElementById("sale-tax").value);
    let dp=Number(document.getElementById("down-payment").value);
    let tiv=Number(document.getElementById("trade-in-value").value);
    let aot=Number(document.getElementById("amount-owed-on-trade-in").value);
    let ir = Number(document.getElementById("interest-rate").value);
    let lt=document.getElementById("lease-term").value;
    let rv=Number(document.getElementById("residual-value").value);
    let paytax=document.getElementById("pay-sales-tax-at-signup").checked;
    
    // console.log(vfp,st,dp,tiv,aot,ir,lt,rv,paytax)
    let sales_tax_at_signing=0,lease_price=0,monthly_depreciation_fee=0,monthly_lease_fee=0,monthly_payment=0,monthly_tax=0,total_monthly_payment=0;
    let ncp=vfp+aot-tiv-dp
    let mf=ir/2400
    if (paytax==true)
    {
        sales_tax_at_signing=st/100*vfp
        st=0
    }
    else {
        sales_tax_at_signing=st/100*dp
    }
    // console.log(vfp,aot,tiv,dp)
    lease_price=vfp+aot-tiv-dp
    // console.log(lease_price)
    monthly_depreciation_fee=(lease_price-rv)/lt
    monthly_lease_fee=(lease_price+rv)*mf
    monthly_payment=monthly_depreciation_fee+monthly_lease_fee
    monthly_tax=st/100*monthly_payment
    total_monthly_payment=monthly_payment+monthly_tax

    document.getElementById("a-lease-result").removeAttribute("hidden");
    document.getElementById("sales-tax-at-signup").innerHTML = sales_tax_at_signing.toFixed(2);
    document.getElementById("lease-price").innerHTML = lease_price.toFixed(2);
    document.getElementById("monthly-depreciation-fee").innerHTML = monthly_depreciation_fee.toFixed(2);
    document.getElementById("monthly-lease-fee").innerHTML = monthly_lease_fee.toFixed(2);
    document.getElementById("monthly-payment").innerHTML = monthly_payment.toFixed(2);
    document.getElementById("monthly-tax").innerHTML =monthly_tax.toFixed(2) ;
    document.getElementById("total-monthly-payment").innerHTML =total_monthly_payment.toFixed(2) ;



})

document.getElementById("a-lease-reset").addEventListener("click", () => {
    document.getElementById("a-lease-calculator").reset();
    document.getElementById("a-lease-result").setAttribute("hidden", "true");
});
