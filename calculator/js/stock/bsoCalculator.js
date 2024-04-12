function calculate() {
    // Get the inputs
    let stock_price = parseFloat(document.getElementById("stock_price").value);
    let strike_price = parseFloat(document.getElementById("strike_price").value);
    let volatility = parseFloat(document.getElementById("volatility").value) / 100;
    let interest_rate = parseFloat(document.getElementById("interest_rate").value) / 100;
    let days_to_maturity = parseFloat(document.getElementById("days_to_maturity").value) / 365;

    // Calculate the option price
    let d1 = (Math.log(stock_price / strike_price) + (interest_rate + volatility**2/2) * days_to_maturity) / (volatility * Math.sqrt(days_to_maturity));
    let d2 = d1 - volatility * Math.sqrt(days_to_maturity);
    let call_price = stock_price * normCDF(d1) - strike_price * Math.exp(-interest_rate * days_to_maturity) * normCDF(d2);
    let put_price = strike_price * Math.exp(-interest_rate * days_to_maturity) * normCDF(-d2) - stock_price * normCDF(-d1);

    // Display the results
    let result = document.getElementById("result");
    result.innerHTML = "<h2>Results</h2>" +
                       "<p>Call Option Price: " + call_price.toFixed(2) + "</p>" +
                       "<p>Put Option Price: " + put_price.toFixed(2) + "</p>";
}

function normCDF(x) {
    // Cumulative distribution function of the standard normal distribution
    let a1 = 0.31938153, a2 = -0.356563782, a3 = 1.781477937, a4 = -1.821255978, a5 = 1.330274429;
    let l = Math.abs(x);
    let k = 1 / (1 + 0.2316419 * l);
    let p = k * (a1 + k * (a2 + k * (a3 + k * (a4 + k * a5))));
    if (x >= 0) {
        return 1 - (1 / (Math.pow(2 * Math.PI, 0.5))) * Math.exp(-0.5 * x * x) * p;
    } else {
        return 1 - normCDF(-x);
    }
}