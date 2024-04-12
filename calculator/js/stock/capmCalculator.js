function calculate() {
    // Get the inputs
    let expected_return = parseFloat(document.getElementById("expected_return").value) / 100;
    let risk_free_rate = parseFloat(document.getElementById("risk_free_rate").value) / 100;
    let expected_market_return = parseFloat(document.getElementById("expected_market_return").value) / 100;
    let beta = parseFloat(document.getElementById("beta").value);

    // Calculate the expected return using CAPM
    let expected_return_capm = risk_free_rate + beta * (expected_market_return - risk_free_rate);

    // Display the results
    let result = document.getElementById("result");
    result.innerHTML = "<h2>Results</h2>" +
                       "<p>Expected Return using CAPM: " + (expected_return_capm * 100).toFixed(2) + "%</p>";
}

function calculateBeta() {
    // Get the inputs
    let expected_return = parseFloat(document.getElementById("expected_return").value) / 100;
    let risk_free_rate = parseFloat(document.getElementById("risk_free_rate").value) / 100;
    let expected_market_return = parseFloat(document.getElementById("expected_market_return").value) / 100;
    let expected_return_capm = expected_return - risk_free_rate;
    let beta = expected_return_capm / (expected_market_return - risk_free_rate);

    // Display the beta
    document.getElementById("beta").value = beta.toFixed(2);
}