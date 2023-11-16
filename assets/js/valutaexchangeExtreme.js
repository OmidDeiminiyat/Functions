

//Funktion 1
function gatherInputData() { //En fanktion kaldet gatherInputData
    //Vi giv variable til værdier
    const myEuroRate = document.getElementById('euroRate').value;  
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;
// Vi sender 3 værdier
    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}

//
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {

    let myDollars = calculateExchange(myDanishAmount, myDollarRate);
    let myEuros = calculateExchange(myDanishAmount, myEuroRate);

    showResult(myEuros, myDollars, myDanishAmount);
}





