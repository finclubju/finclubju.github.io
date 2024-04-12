
function hide() {
    let ele = document.getElementById("result");
    ele.style.visibility = "hidden";
    document.getElementById("fibonacci-calculator").reset();
}


function calc() {

    let mUptrendRetracement = [
        "0% (b)",
        "23.6%",
        "38.2%",
        "50%",
        "61.8%",
        "76.4%",
        "100% (a)",
        "138.2%",
    ];

    let mUptrendExtension = [
        "261.8%",
        "200%",
        "161.8%",
        "138.2%",
        "100%",
        "61.8%",
        "50%",
        "38.2%",
        "23.6%",
    ];
    let mDowntrendRetracement = [
        "138.2%",
        "100% (b)",
        "76.4%",
        "61.8%",
        "50%",
        "38.2%",
        "23.6%",
        "0% (a)",
    ];
    let mDowntrendExtension = [
        "23.6%",
        "38.2%",
        "50%",
        "61.8%",
        "100%",
        "138.2%",
        "161.8%",
        "200%",
        "261.8%",
    ];


    let ele = document.getElementById("result");
    ele.style.visibility = "visible";

    let high = +document.getElementById("high").value;
    let low = +document.getElementById("low").value;

    let table1 = document.getElementById("resultTable1");
    table1.innerHTML = "";

    let table2 = document.getElementById("resultTable2");
    table2.innerHTML = "";

    let table3 = document.getElementById("resultTable3");
    table3.innerHTML = "";

    let table4 = document.getElementById("resultTable4");
    table4.innerHTML = "";


    table1.setAttribute("border","0");
    table1.setAttribute("cellspacing","10");

    table1.setAttribute("cellpadding","5");
    table1.setAttribute("style","font-size: 12px");


    table2.setAttribute("border","0");
    table2.setAttribute("cellspacing","10");
    table2.setAttribute("cellpadding","5");
    table2.setAttribute("style","font-size: 12px");

    table3.setAttribute("border","0");
    table3.setAttribute("cellspacing","10");
    table3.setAttribute("cellpadding","5");
    table3.setAttribute("style","font-size: 12px");

    table4.setAttribute("border","0");
    table4.setAttribute("cellspacing","10");
    table4.setAttribute("cellpadding","5");
    table4.setAttribute("style","font-size: 12px");



    for (let i = 0; i < mUptrendRetracement.length; i++) {
        let str = mUptrendRetracement[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(high) - (parseFloat(high) - parseFloat(low)) * d;

        let row = table1.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        // if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mUptrendRetracement[i];
        cell2.innerHTML = value.toFixed(4);

    }

    for (let i = 0; i < mUptrendExtension.length; i++) {
        let str = mUptrendExtension[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(high) + (parseFloat(high) - parseFloat(low)) * d;

        let row = table2.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        // if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mUptrendExtension[i];
        cell2.innerHTML = value.toFixed(4);

    }


    for (let i = 0; i < mDowntrendRetracement.length; i++) {
        let str = mDowntrendRetracement[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(low) + (parseFloat(high) - parseFloat(low)) * d;

        let row = table3.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        // if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mDowntrendRetracement[i];
        cell2.innerHTML = value.toFixed(4);

    }


    for (let i = 0; i < mDowntrendExtension.length; i++) {
        let str = mDowntrendExtension[i];
        str = str.replace("%", "");
        str = str.replace("(a)", "");
        str = str.replace("(b)", "");
        let d = parseFloat(str) / 100;

        let value = parseFloat(low) - (parseFloat(high) - parseFloat(low)) * d;

        let row = table4.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        // if (i % 2 == 0) row.style.backgroundColor = '#FCF6CF';

        cell2.style.textAlign = 'right';


        cell1.innerHTML = mDowntrendExtension[i];
        cell2.innerHTML = value.toFixed(4);

    }
    // table 1 name = Uptrend Retracements
    // table 2 name = Uptrend Extensions
    // table 3 name = Downtrend Retracements
    // table 4 name = Downtrend Extensions

    // set table names
    let row = table1.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "Uptrend Retracements";

    row = table2.insertRow(0);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Uptrend Extensions";

    row = table3.insertRow(0);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Downtrend Retracements";

    row = table4.insertRow(0);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Downtrend Extensions";


    // set table headers

    row = table1.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Percentage";
    cell2.innerHTML = "Value";
    row = table2.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Percentage";
    cell2.innerHTML = "Value";
    row = table3.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Percentage";
    cell2.innerHTML = "Value";
    row = table4.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Percentage";
    cell2.innerHTML = "Value";


    let table1_width = table1.offsetWidth;
    let table2_width = table2.offsetWidth;
    let table3_width = table3.offsetWidth;
    let table4_width = table4.offsetWidth;

    let table1_height = table1.offsetHeight;
    let table2_height = table2.offsetHeight;
    let table3_height = table3.offsetHeight;
    let table4_height = table4.offsetHeight;

    table1.style.width = table2_width;
    table2.style.width = table3_width;
    table3.style.width = table4_width;
    table4.style.width = table1_width;

    table1.style.height = table2_height;
    table2.style.height = table3_height;
    table3.style.height = table4_height;
    table4.style.height = table1_height;

    table1.style.float = "left";
    table2.style.float = "left";
    table3.style.float = "left";


}
//
//function hide() {
//    let ele = document.getElementById("result");
//    ele.style.display = "none";
//    document.getElementById("fibonacci-calculator").reset();
//}