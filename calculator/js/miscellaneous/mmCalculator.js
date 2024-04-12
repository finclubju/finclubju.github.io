function margin_markup_mode()
{
    x=+document.getElementById("margin-markup-mode").value
    switch (x){
        case 1:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Revenue:";
            break;
        case 2:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Gross Profit:";
            break;
        case 3:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Gross Margin (%):";
            break;
        case 4:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Markup (%):";
            break;
        case 5:
            document.getElementById("variable-1-label").innerHTML="Revenue:";
            document.getElementById("variable-2-label").innerHTML="Gross Profit:";
            break;
        case 6:
            document.getElementById("variable-1-label").innerHTML="Revenue:";
            document.getElementById("variable-2-label").innerHTML="Gross Margin (%):";
            break;
        case 7:
            document.getElementById("variable-1-label").innerHTML="Revenue:";
            document.getElementById("variable-2-label").innerHTML="Markup (%):";
            break;
        case 8:
            document.getElementById("variable-1-label").innerHTML="Gross Profit:";
            document.getElementById("variable-2-label").innerHTML="Gross Margin (%):";
            break;
        case 9:
            document.getElementById("variable-1-label").innerHTML="Gross Profit:";
            document.getElementById("variable-2-label").innerHTML="Markup(%):";
            break;
    }
}

document.getElementById("margin-markup-calculate").addEventListener("click",()=>
{
   let cost,revenue,profit,margin,markup;
   let variable_1=+document.getElementById("variable-1").value;
   let variable_2=+document.getElementById("variable-2").value;
   let flag=+document.getElementById("margin-markup-mode").value;
    switch (flag){
        case 1:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Revenue:";
            revenue=variable_2;
            cost=variable_1;
            profit=revenue-cost;

            margin=profit/revenue;
            markup=profit/cost

            break;
        case 2:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Gross Profit:";

            cost=variable_1;
            profit=variable_2;
            revenue=profit+cost;
            margin=profit/revenue;
            markup=profit/cost;
            break;
        case 3:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Gross Margin (%):";
            cost=variable_1;
            margin=variable_2/100;
            revenue=cost/(1-margin)
            profit=revenue-cost;
            revenue=profit+cost;
            markup=profit/cost;

            break;
        case 4:
            document.getElementById("variable-1-label").innerHTML="Cost:";
            document.getElementById("variable-2-label").innerHTML="Markup (%):";
            cost=variable_1;
            markup=variable_2/100;
            profit=cost*markup;
            revenue=profit+cost;
            margin=profit/revenue;
            break;
        case 5:
            document.getElementById("variable-1-label").innerHTML="Revenue:";
            document.getElementById("variable-2-label").innerHTML="Gross Profit:";
            revenue=variable_1;
            profit=variable_2;
            cost=revenue-profit;
            markup=profit/cost;
            margin=profit/revenue;


            break;
        case 6:
            document.getElementById("variable-1-label").innerHTML="Revenue:";
            document.getElementById("variable-2-label").innerHTML="Gross Margin (%):";
            revenue=variable_1;
            margin=variable_2/100;

            profit=margin*revenue;
            cost=revenue-profit;
            markup=profit/cost;

            break;
        case 7:
            document.getElementById("variable-1-label").innerHTML="Revenue:";
            document.getElementById("variable-2-label").innerHTML="Markup (%):";
            revenue=variable_1;
            markup=variable_2/100;
            cost=revenue/(1+markup);
            profit=revenue-cost;
            margin=profit/revenue;


            break;
        case 8:
            document.getElementById("variable-1-label").innerHTML="Gross Profit:";
            document.getElementById("variable-2-label").innerHTML="Gross Margin (%):";
            profit=variable_1;
            margin=variable_2/100;
            revenue=profit/margin;

            cost=revenue-profit;
            markup=profit/cost;
            break;
        case 9:
            document.getElementById("variable-1-label").innerHTML="Gross Profit:";
            document.getElementById("variable-2-label").innerHTML="Markup(%):";
            profit=variable_1;
            markup=variable_2/100;
            cost=profit/markup;
            revenue=profit+cost;
            margin=profit/revenue;
            break;
    }
    document.getElementById("margin-markup-result").removeAttribute("hidden");
    document.getElementById("margin-markup-result-cost").innerHTML=cost;
    document.getElementById("margin-markup-result-revenue").innerHTML=revenue;
    document.getElementById("margin-markup-result-profit").innerHTML=profit;
    document.getElementById("margin-markup-result-margin").innerHTML=margin*100;
    document.getElementById("margin-markup-result-markup").innerHTML=markup*100;
});


document.getElementById("margin-markup-reset").addEventListener("click", () => {
    document.getElementById("margin-markup-calculator").reset();
    document.getElementById("margin-markup-result").setAttribute("hidden", "true");
});
