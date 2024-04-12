function hide() {
    let ele = document.getElementById("result");
    ele.style.display = "none";
    document.getElementById("business-forecast-calculator").reset();
}


function calc() {

    let ele = document.getElementById("result");
    ele.style.display = "block";

    let revenue = +document.getElementById("revenue").value;
    let revenueGrow = +document.getElementById("revenue-growth").value;
    let years = +document.getElementById("years-growth").value;
    let costPercent = +document.getElementById("cost-of-revenue").value;
    let costIncrease = +document.getElementById("cost-percentage-increase-per-year").value;

    let table = document.getElementById("resultTable");
    table.innerHTML = "";

    table.setAttribute("border","0");
    table.setAttribute("cellspacing","10");

    table.setAttribute("cellpadding","5");
    table.setAttribute("style","font-size: 12px");

    let header = table.createTHead();
    let row = header.insertRow(0);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);

    c1.innerHTML = "<b>Year</b>";
    c2.innerHTML = "<b>Revenue</b>";
    c3.innerHTML = "<b>Cost</b>";
    c4.innerHTML = "<b>Profit</b>";
    c5.innerHTML = "<b>Margin (%)</b>";
    c6.innerHTML = "<b>Markup (%)</b>";
    c7.innerHTML = "<b>Cost of Revenue (%)</b>";

    c1.style.textAlign = 'center';
    c2.style.textAlign = 'center';
    c3.style.textAlign = 'center';
    c4.style.textAlign = 'center';
    c5.style.textAlign = 'center';
    c6.style.textAlign = 'center';
    c7.style.textAlign = 'center';

    let result;

    let d = new Date();
    let n = d.getFullYear();

    for (let j = 0; j <= years; j++) {

        let row = table.insertRow(j + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);

        // if (j % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';
        cell3.style.textAlign = 'right';
        cell4.style.textAlign = 'right';
        cell5.style.textAlign = 'right';
        cell6.style.textAlign = 'right';
        cell7.style.textAlign = 'right';

        let rev = revenue * Math.pow(1 + revenueGrow / 100, j);
        if (j > 0) costPercent = costPercent + costIncrease;
        let cost = rev * (costPercent / 100);
        let profit = rev - cost;
        let margin = 100 * profit / rev;
        let markup = 100 * profit / cost;

        cell1.innerHTML = n + j;
        cell2.innerHTML = formatDollar(rev);
        cell3.innerHTML = formatDollar(cost);
        cell4.innerHTML = formatDollar(profit);
        cell5.innerHTML = formatDollar(margin);
        cell6.innerHTML = formatDollar(markup);
        cell7.innerHTML = formatDollar(costPercent);

    }


}


function formatDollar(num) {
    let p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function (acc, num, i, orig) {
        return num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
}
