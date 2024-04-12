function calc() {
    let cash = +document.getElementById("cash").value;
    let accounts_receivable = +document.getElementById("accounts-receivable").value;
    let inventory = +document.getElementById("inventory").value;
    let total_current_assets = cash + accounts_receivable + inventory;
    document.getElementById("total-current-assets").value = total_current_assets;
    let plant_property = +document.getElementById("plant-property").value;
    let less_accumulated_depreciation = +document.getElementById("less-accumulated-depreciation").value;
    let net_fixed_assets = plant_property - less_accumulated_depreciation;
    document.getElementById("net-fixed-assets").value = net_fixed_assets;
    let total_assets = total_current_assets + net_fixed_assets;
    document.getElementById("total-assets").value = total_assets;

    let accounts_payable = +document.getElementById("accounts-payable").value;
    let notes_payable = +document.getElementById("notes-payable").value;
    let total_current_liabilities = accounts_payable + notes_payable;
    document.getElementById("total-current-liabilities").value = total_current_liabilities;

    let total_long_term_liabilities = +document.getElementById("total-long-term-liabilities").value;
    let common_stock = +document.getElementById("common-stock").value;
    let retained_earnings = +document.getElementById("retained-earnings").value;
    let accum_other_income = +document.getElementById("accum-other-income").value;
    let total_owners_equity = common_stock + retained_earnings + accum_other_income;
    let total_liabilities_and_owners_equity = total_owners_equity + total_long_term_liabilities;
    document.getElementById("total-owners-equity").value = total_owners_equity;
    document.getElementById("total-liabilities-and-equity").vale = total_liabilities_and_owners_equity;


    let sales = +document.getElementById("sales").value;
    let cost_of_goods = +document.getElementById("cost-of-goods").value;
    let administrative_expenses = +document.getElementById("administrative-expenses").value;
    let depreciation = +document.getElementById("depreciation").value;
    let earnings_before_interest_and_taxes = sales - cost_of_goods - administrative_expenses - depreciation;
    document.getElementById("earnings-before-interest-and-taxes").value = earnings_before_interest_and_taxes;

    let interest_expense = +document.getElementById("interest-expense").value;
    let taxable_income = earnings_before_interest_and_taxes - interest_expense;
    document.getElementById("taxable-income").value = taxable_income;

    let taxes = +document.getElementById("taxes").value;
    let net_income = taxable_income - taxes;
    document.getElementById("net-income").value = net_income;

    let dividends = +document.getElementById("dividends").value;
    let addition_to_retained_earnings = net_income - dividends;
    document.getElementById("addition-to-retained-earnings").value = addition_to_retained_earnings;

    let shares_outstanding = +document.getElementById("shares-outstanding").value;
    let price_per_share = +document.getElementById("price-per-share").value;

    document.getElementById("balance-sheet-result").removeAttribute("hidden")
    document.getElementById("current-ratio").innerHTML= current_ratio=(total_current_assets/total_current_liabilities).toFixed(2);
    document.getElementById("quick-ratio").innerHTML =quick_ratio= ((total_current_assets-inventory)/total_current_liabilities).toFixed(2);
    document.getElementById("receivable-turnover").innerHTML =receivable_turnover= (sales/accounts_receivable).toFixed(2);

    document.getElementById("days-receivable").innerHTML = days_receivable = (365/receivable_turnover).toFixed(2);
    document.getElementById("inventory-turnover").innerHTML = inventory_turnover = (cost_of_goods/inventory).toFixed(2);
    document.getElementById("days-inventory").innerHTML =days_inventory= (365/inventory_turnover).toFixed(2);

    document.getElementById("fixed-assets-turnover").innerHTML = fixed_assets_turnover = (sales/net_fixed_assets).toFixed(2);
    document.getElementById("total-assets-turnover").innerHTML = total_assets_turnover = (sales/total_assets).toFixed(2);

    document.getElementById("times-interest-earned").innerHTML = times_interest_earned = (earnings_before_interest_and_taxes/interest_expense).toFixed(2);
    document.getElementById("debt-ratio").innerHTML = debt_ratio = ((total_assets-total_owners_equity)/total_assets).toFixed(2);

    document.getElementById("debt-to-eqity-ratio").innerHTML = debt_to_equity_ratio = ((total_assets-total_owners_equity)/total_owners_equity).toFixed(2);
    document.getElementById("equity-multiplier").innerHTML = equity_multiplier = (total_assets/total_owners_equity).toFixed(2);

    document.getElementById("profit-margin").innerHTML = profit_margin = (net_income/sales).toFixed(2);
    document.getElementById("return-on-assets").innerHTML =return_on_assets =(net_income/total_assets).toFixed(2);
    document.getElementById("return-on-equity").innerHTML =return_on_equity=(net_income/total_owners_equity).toFixed(2) ;
    document.getElementById("payout-and-retention-ratios").innerHTML =payout_and_retention_ratios =(dividends/net_income).toFixed(2);
    document.getElementById("earning-per-share").innerHTML = earning_per_share =(net_income/shares_outstanding).toFixed(2);
    document.getElementById("price-per-earning-ratio").innerHTML = price_per_earning_ratio=(price_per_share/earning_per_share).toFixed(2);
    document.getElementById("book-value-per-share").innerHTML = book_value_per_share=(total_owners_equity/shares_outstanding).toFixed(2);
    document.getElementById("market-to-book-ratio").innerHTML = market_to_book_ratio=(price_per_share/book_value_per_share).toFixed(2);



}

document.getElementById("balance-sheet-reset").addEventListener("click", () => {
    document.getElementById("balance-sheet-analyzer").reset();
    document.getElementById("balance-sheet-result").setAttribute("hidden", "true");
});
