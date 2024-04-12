function calculateWACC() {
    // Get the inputs
    let costOfEquity = parseFloat(document.getElementById("cost_of_equity").value) / 100;
    let totalEquity = parseFloat(document.getElementById("total_equity").value);
    let costOfDebt = parseFloat(document.getElementById("cost_of_debt").value) / 100;
    let totalDebt = parseFloat(document.getElementById("total_debt").value);
    let corporateTaxRate = parseFloat(document.getElementById("corporate_tax_rate").value) / 100;
  
    // Calculate WACC
    let equityWeight = totalEquity / (totalEquity + totalDebt);
    let debtWeight = totalDebt / (totalEquity + totalDebt);
    let afterTaxCostOfDebt = costOfDebt * (1 - corporateTaxRate);
    let wacc = (equityWeight * costOfEquity) + (debtWeight * afterTaxCostOfDebt);
  
    // Display the results
    let result = document.getElementById("result");
    result.innerHTML = "<h2>Results</h2>" +
                       "<p>WACC: " + (wacc * 100).toFixed(2) + "%</p>";
  }

  function resetForm() {
    document.getElementById("cost_of_equity").value = "";
    document.getElementById("total_equity").value = "";
    document.getElementById("cost_of_debt").value = "";
    document.getElementById("total_debt").value = "";
    document.getElementById("corporate_tax_rate").value = "";
    document.getElementById("result").innerHTML = "";
  }