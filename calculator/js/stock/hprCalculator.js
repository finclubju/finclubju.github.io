function calculate() {
    // Get the inputs
    let beginning_value = parseFloat(document.getElementById("beginning_value").value);
    let ending_value = parseFloat(document.getElementById("ending_value").value);
    let income_received = parseFloat(document.getElementById("income_received").value);

    // Calculate the holding period return
    let hpr = ((ending_value - beginning_value) + income_received) / beginning_value;

    // Display the result
    let result = document.getElementById("result");
    result.innerHTML = 
                       "<p>Holding Period Return: " + (hpr * 100).toFixed(2) + "%</p>";
}