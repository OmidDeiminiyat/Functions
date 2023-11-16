
//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});




// indsamling af data fra dom (model code fra MVC)
function gatherInputData() {
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;




    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}






// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}

// skriv din kode herunder. 
// Funktion en Dele en


function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {

    let myDollars = calculateExchange(myDanishAmount, myDollarRate);
    let myEuros = calculateExchange(myDanishAmount, myEuroRate);

    showResult(myEuros, myDollars, myDanishAmount);
}


// Funktion en Dele to

function calculateExchange(test1, test2) { // vi har en funktion navnet calculateExchange med to værdier

    let ExchangeAmount = test1 * test2; // vi gange vores værdiger 
    return ExchangeAmount; // vi sender resulter tilbag
 }
    let AmounDKK = 100;  // værdig danske kroner
    let test2 = 1.3;  //rate
    let ExchangeAmount = calculateExchange(AmounDKK); 


// funktion to



