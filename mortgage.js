function calculateMortagage(){
    var cost=document.getElementById("inCost").value;
	
	if ((cost=="") ||(cost<0)){
		alert("Please put in a non-negative cost amount.")
	}
	
	var downPayment=document.getElementById("inDown").value;
	var interest=document.getElementById("inInterest").value;
	var term=document.getElementById("inPeriod").value;
	var amountBorrowed=cost-downPayment;
	
	//convert percentage to decimal
	interest= percentToDecimal(interest);
	
	// Convert ears to months
	term= yearsToMonth(term);

	var pmt= (amountBorrowed*interest)/(1- (Math.pow((1+ interest), (-term))));

	var finalAnswer= parseFloat(pmt.toFixed(2));
	
	postPayment(finalAnswer);
}

function percentToDecimal(percent){
	return (percent/12)/100;
}

function yearsToMonth(year){
	return year * 12;
}

function postPayment(amount){
	var payment=document.getElementById("outMonthly");
	payment.innerHTML="$" + amount;
}


	
