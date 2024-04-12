document.getElementById("date-1-calculate").addEventListener("click",
    ()=>{
    let from_date =new Date( document.getElementById("from-date-1").value);
    let to_date =new Date( document.getElementById("to-date-1").value);
    let date_1_result_in_days=(to_date.getTime()-from_date.getTime())/(1000*3600*24);
    let date_1_result_days=date_1_result_in_days;
    let date_1_result_years=Math.floor(date_1_result_days/365);
    date_1_result_days=date_1_result_days%365;
    let date_1_result_months=Math.floor(date_1_result_days/30);
    date_1_result_days=date_1_result_days%30;
    document.getElementById("date-1-result").removeAttribute("hidden");

    document.getElementById("date-1-result-days").innerHTML=date_1_result_days;
    document.getElementById("date-1-result-years").innerHTML=date_1_result_years;
    document.getElementById("date-1-result-months").innerHTML=date_1_result_months;
    document.getElementById("date-1-result-in-days").innerHTML=date_1_result_in_days;
});
document.getElementById("date-1-reset").addEventListener("click", () => {
    document.getElementById("date-calculator-1").reset();
    document.getElementById("date-1-result").setAttribute("hidden", "true");
});
