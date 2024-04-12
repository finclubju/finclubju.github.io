document.getElementById("dt-calculate").addEventListener("click",
    ()=>
    {
        let discount=document.getElementById("discount").checked
        let price=+document.getElementById("price").value
        let percent=+document.getElementById("percent").value
        let sales_tax=+document.getElementById("sales-tax").value
        let flag=-1
        if (discount==false){
            flag=1
            document.getElementById("percent-up-or-down").innerHTML="Percent UP:"
            document.getElementById("savings-or-moretopay").innerHTML="More to Pay:    "
        }
        else{
            flag=-1
            document.getElementById("percent-up-or-down").innerHTML="Percent Down:"
            document.getElementById("savings-or-moretopay").innerHTML="Savings:    "
        }
        // console.log(price,flag,percent,price)
        let new_price=price+flag*percent/100*price
        let difference=Math.abs(new_price-price)
        difference+=difference*sales_tax/100
        let tax=sales_tax/100*new_price
        let total_payment=new_price+tax

        document.getElementById("dt-result").removeAttribute("hidden")
        document.getElementById("difference").innerHTML=difference.toFixed(2)
        document.getElementById("tax").innerHTML=tax.toFixed(2)
        document.getElementById("total-payment").innerHTML=total_payment.toFixed(2)
    })
document.getElementById("dt-reset").addEventListener("click", () => {
    document.getElementById("discount-tax-calculator").reset();
    document.getElementById("dt-result").setAttribute("hidden", "true");
});
