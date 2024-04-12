//function isNumberKey(evt)
//			{
//                let theEvent = evt || window.event;
//                let key = theEvent.keyCode || theEvent.which;
//                if ((key < 48 || key > 57) && !(key == 8 || key == 9 || key == 13 || key == 37 || key == 39 || key == 46  ) ){
//                    theEvent.returnValue = false;
//                    if (theEvent.preventDefault) theEvent.preventDefault();
//                }
//            }
//
//			function formatCurrency(num) {
//    num = isNaN(num) || num === '' || num === null ? 0.00 : num;
//    return parseFloat(num).toFixed(2);
//}
//
			function hide() {
    let ele = document.getElementById("result");
    ele.style.display = "none";
    document.getElementById("salary-increase-calculator").reset();
}


				function calc() {

    let ele = document.getElementById("result");
    ele.style.display = "block";

    let annualSalary = document.getElementById("annual-salary").value;
    let increaseRate = document.getElementById("annual-increase-rate").value;
    let years = document.getElementById("years").value;

    let table = document.getElementById("resultTable");
    table.innerHTML = "";
    // set table style
    //               border="0"
    //               cellspacing="10"
    //               cellpadding="5"
    //               style="font-size: 12px"


    table.setAttribute("border","0");
    table.setAttribute("cellspacing","10");

    table.setAttribute("cellpadding","5");
    table.setAttribute("style","font-size: 12px");
    // table.setAttribute("hidden","true");


    let header = table.createTHead();
    let row = header.insertRow(0);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    let c8 = row.insertCell(7);

    c1.innerHTML = "<b>Year</b>";
    c2.innerHTML = "<b>Weekly</b>";
    c3.innerHTML = "<b>Biweekly</b>";
    c4.innerHTML = "<b>Semimonthly</b>";
    c5.innerHTML = "<b>Monthly</b>";
    c6.innerHTML = "<b>Bimonthly</b>";
    c7.innerHTML = "<b>Quaterly</b>";
    c8.innerHTML = "<b>Yearly</b>";

    c1.style.textAlign = 'center';
    c2.style.textAlign = 'center';
    c3.style.textAlign = 'center';
    c4.style.textAlign = 'center';
    c5.style.textAlign = 'center';
    c6.style.textAlign = 'center';
    c7.style.textAlign = 'center';
    c8.style.textAlign = 'center';

    let result;
    let sum = 0;
    for(let j=0;j<=years;j++)
    {
        let newSalary = annualSalary * Math.pow((1 + increaseRate/100), j);
        sum = sum + newSalary;
        let row = table.insertRow(j+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);

        // if(j%2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';
        cell3.style.textAlign = 'right';
        cell4.style.textAlign = 'right';
        cell5.style.textAlign = 'right';
        cell6.style.textAlign = 'right';
        cell7.style.textAlign = 'right';
        cell8.style.textAlign = 'right';


        cell1.innerHTML=j;
        cell2.innerHTML=formatDollar(newSalary/52);
        cell3.innerHTML=formatDollar(newSalary/26);
        cell4.innerHTML=formatDollar(newSalary/24);
        cell5.innerHTML=formatDollar(newSalary/12);
        cell6.innerHTML=formatDollar(newSalary/6);
        cell7.innerHTML=formatDollar(newSalary/4);
        cell8.innerHTML=formatDollar(newSalary);

    }

                    let footer = table.createTHead();
    let footerRow = footer.insertRow(years+2);
    let fc1 = footerRow.insertCell(0);
    let fc2 = footerRow.insertCell(1);
    let fc3 = footerRow.insertCell(2);
    let fc4 = footerRow.insertCell(3);
    let fc5 = footerRow.insertCell(4);
    let fc6 = footerRow.insertCell(5);
    let fc7 = footerRow.insertCell(6);
    let fc8 = footerRow.insertCell(7);

    fc1.style.textAlign = 'left';
    fc2.style.textAlign = 'right';
    fc3.style.textAlign = 'right';
    fc4.style.textAlign = 'right';
    fc5.style.textAlign = 'right';
    fc6.style.textAlign = 'right';
    fc7.style.textAlign = 'right';
    fc8.style.textAlign = 'right';

    let averageSalary = sum/(years+1)
                    fc1.innerHTML='<b>Average</b>';
    fc2.innerHTML='<b>' + formatDollar(averageSalary/52) + '</b>';
    fc3.innerHTML='<b>' + formatDollar(averageSalary/26) + '</b>';
    fc4.innerHTML='<b>' + formatDollar(averageSalary/24) + '</b>';
    fc5.innerHTML='<b>' + formatDollar(averageSalary/12) + '</b>';
    fc6.innerHTML='<b>' + formatDollar(averageSalary/6) + '</b>';
    fc7.innerHTML='<b>' + formatDollar(averageSalary/4) + '</b>';
    fc8.innerHTML='<b>' + formatDollar(averageSalary) + '</b>';

}

				function formatDollar(num) {
    let p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
        }, "") + "." + p[1];
}