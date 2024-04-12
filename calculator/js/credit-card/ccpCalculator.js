document.getElementById("ccp-calculate").addEventListener("click",
()=>
{
    let ccb=document.getElementById("credit-card-balance").value;
    let r=document.getElementById("credit-card-interest-rate").value;
    let p=document.getElementById("payment-per-month").value;
    let t=document.getElementById("desired-months-until-debt-free").value;
    let total_monthly_payment=0;
    let total_months_to_pay=0;
    let total_interest=0;
    let total_payment=0;
    r=r/100;
    r=r/12;
    console.log(ccb,r,p,t);
    if (ccb!=undefined && r!=undefined &&   (p!=undefined || t!=undefined)  ){
    if(p==undefined || p==NaN || p==null || p==''){
        total_monthly_payment=r*ccb/(1-Math.pow((1+r),-t))
        total_months_to_pay=t;
        console.log("given")
       
        
    }
    else {
        total_monthly_payment=p;
        total_months_to_pay=Math.log(1/(1-(r*ccb/p)))/Math.log(1+r);
        
        
    }
    total_payment=(total_monthly_payment*total_months_to_pay).toFixed(2);
    total_interest=(total_payment-ccb).toFixed(2);
    // console.log(total_monthly_payment);
    // console.log(total_months_to_pay);
    document.getElementById("ccp-result").removeAttribute("hidden");
    document.getElementById("total-interest").innerHTML=total_interest;
    document.getElementById("total-payment").innerHTML=total_payment;

}
})
document.getElementById("ccp-reset").addEventListener("click", () => {
    document.getElementById("ccp-calculator").reset();
    document.getElementById("ccp-result").setAttribute("hidden", "true");
  });
  