function calc()
{
    let flag = document.getElementById("net-distribution").checked;
    let amount= +document.getElementById("amount").value;
    let federal_withholdings=+document.getElementById("federal-withholdings").value/100;
    let state_withholdings=+document.getElementById("state-withholdings").value/100;
    let fee=+document.getElementById("fee").value;

    let result_total_tax,result_federal_withholdings,result_state_withholdings,result_distribution;
    if (flag===true)
        {
            document.getElementById("amount-label").innerHTML="Gross Amount";
            document.getElementById("result-distribution-label").innerHTML="Net Distribution";
            result_federal_withholdings=federal_withholdings*amount;
            result_state_withholdings=state_withholdings*amount;
            result_total_tax=result_federal_withholdings+result_state_withholdings;
            result_distribution=amount-fee-result_total_tax;
        }
    else
        {
            document.getElementById("amount-label").innerHTML="Net Amount:";
            document.getElementById("result-distribution-label").innerHTML="Gross Distribution";
            result_distribution=amount/(1-federal_withholdings-state_withholdings);
            result_total_tax=result_distribution-amount;
            result_federal_withholdings=result_total_tax*federal_withholdings/(federal_withholdings+state_withholdings)
            result_state_withholdings=result_total_tax*state_withholdings/(federal_withholdings+state_withholdings);
            result_distribution-=fee;


        }
    document.getElementById("distribution-result").removeAttribute("hidden")
    document.getElementById("result-total-tax").innerHTML=result_total_tax.toFixed(2);
    document.getElementById("result-fee").innerHTML=fee.toFixed(2);
    document.getElementById("result-federal-withholdings").innerHTML=result_federal_withholdings.toFixed(2);
    document.getElementById("result-state-withholdings").innerHTML=result_state_withholdings.toFixed(2);
    document.getElementById("result-distribution").innerHTML=result_distribution.toFixed(2);

}

document.getElementById("distribution-reset").addEventListener("click", () => {
    document.getElementById("net-distribution-calculator").reset();
    document.getElementById("distribution-result").setAttribute("hidden", "true");
});
