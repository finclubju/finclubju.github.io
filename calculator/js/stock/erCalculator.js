function calculateExpectedReturn() {
    let totalProb = 0;
    let weightedReturn1 = 0;
    let weightedReturn2 = 0;
    
    // Get probabilities and stock returns for each state
    let prob1 = Number(document.getElementById("prob1").value);
    let prob2 = Number(document.getElementById("prob2").value);
    let prob3 = Number(document.getElementById("prob3").value);
    let prob4 = Number(document.getElementById("prob4").value);
    let prob5 = Number(document.getElementById("prob5").value);
    
    let stock1_1 = Number(document.getElementById("stock1_1").value);
    let stock1_2 = Number(document.getElementById("stock1_2").value);
    let stock1_3 = Number(document.getElementById("stock1_3").value);
    let stock1_4 = Number(document.getElementById("stock1_4").value);
    let stock1_5 = Number(document.getElementById("stock1_5").value);
    
    let stock2_1 = Number(document.getElementById("stock2_1").value);
    let stock2_2 = Number(document.getElementById("stock2_2").value);
    let stock2_3 = Number(document.getElementById("stock2_3").value);
    let stock2_4 = Number(document.getElementById("stock2_4").value);
    let stock2_5 = Number(document.getElementById("stock2_5").value);
    
    // Calculate expected returns for each stock
    weightedReturn1 = (prob1/100 * stock1_1) + (prob2/100 * stock1_2) + (prob3/100 * stock1_3) + (prob4/100 * stock1_4) + (prob5/100 * stock1_5);
    weightedReturn2 = (prob1/100 * stock2_1) + (prob2/100 * stock2_2) + (prob3/100 * stock2_3) + (prob4/100 * stock2_4) + (prob5/100 * stock2_5);
    
    // Calculate total probability
    totalProb = prob1 + prob2 + prob3 + prob4 + prob5;
    
    // Display the results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Total Probability: " + totalProb.toFixed(2) + "%<br>";
    resultsDiv.innerHTML += "Expected Return for Stock 1: " + weightedReturn1.toFixed(2) + "%<br>";
    resultsDiv.innerHTML += "Expected Return for Stock 2: " + weightedReturn2.toFixed(2) + "%";
  }