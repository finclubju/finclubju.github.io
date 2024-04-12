document.getElementById("tip-calculate").addEventListener("click",()=>
{
    let bill=+document.getElementById("bill").value
    let tax=+document.getElementById("tax").value
    let tip=+document.getElementById("tip").value
    let split=+document.getElementById("split").value
    let withtax=+document.getElementById("after-tax").checked
    console.log(bill,tax,tip,split)
    let tip_tax=withtax*tip/100*bill*tax/100
    let total_tip_amount=tip/100*bill+tip_tax
    let total_check=total_tip_amount+tax/100*bill+bill
    let each_tip_amount=total_tip_amount/split
    let each_pay=total_check/split
    let round_up_each_pay=Math.ceil(each_pay+0.001)
    let round_up_tip_percentage=((round_up_each_pay*split-bill-tax/100*bill)/bill)*100
    if (withtax==1)
    {
        round_up_tip_percentage=((round_up_each_pay*split-bill-tax/100*bill)/bill)*100*100/(100+tax)
    }
    document.getElementById("tip-result").removeAttribute("hidden")
    document.getElementById("total-tip-amount").innerHTML=total_tip_amount.toFixed(2)
    document.getElementById("total-check").innerHTML=total_check.toFixed(2)
    document.getElementById("each-tip-amount").innerHTML=each_tip_amount.toFixed(2)
    document.getElementById("each-pay").innerHTML=each_pay.toFixed(2)
    document.getElementById("round-up-pay").innerHTML=round_up_each_pay.toFixed(2)
    document.getElementById("round-up-percentage").innerHTML=round_up_tip_percentage.toFixed(2)
    
})
document.getElementById("tip-reset").addEventListener("click", () => {
    document.getElementById("tip-calculator").reset();
    document.getElementById("tip-result").setAttribute("hidden", "true");
});
