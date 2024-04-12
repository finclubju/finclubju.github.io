    function calculate() {
        // Retrieve input values
        var savingsGoal = parseFloat(document.getElementById("savings-goal").value.replace(/,/g, ''));
        var yearsUntilRetirement = parseInt(document.getElementById("years-until-retirement").value);
        var annualReturnRate = parseFloat(document.getElementById("annual-return-rate").value);
        var currentSavings = parseFloat(document.getElementById("current-savings").value.replace(/,/g, ''));

        // Calculate monthly savings
        var monthlySavings = (savingsGoal - currentSavings * Math.pow(1 + annualReturnRate / 100, yearsUntilRetirement)) * (annualReturnRate / 100 / 12) / (Math.pow(1 + annualReturnRate / 100 / 12, 12 * yearsUntilRetirement) - 1);

        // Display monthly savings
        var formatter = new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR'
        });
        document.getElementById("monthly-savings").innerHTML = formatter.format(monthlySavings);
    }


    function resetForm() {
        document.getElementById("savings-goal").value = "";
        document.getElementById("years-until-retirement").value = "";
        document.getElementById("annual-return-rate").value = "";
        document.getElementById("current-savings").value = "";
        document.getElementById("monthly-savings").innerHTML = "";
      }
