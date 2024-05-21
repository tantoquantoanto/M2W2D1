//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function findTheBigger (num1, num2) {
    if (num1 > num2) {
        console.log("il numero più grande è", + num1)
}
else {
    console.log("il numero più grande è", + num2)
}
}
findTheBigger (5,8) 





/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

function showTheMessage (number) {
    if (number < 5) {
        console.log("Tiny")
    }
    else if (number < 10) {
        console.log("Small")
    }
    else if (number < 15) {
        console.log("Medium")
    }
    else if (number < 20) {
        console.log ("Large")
    }
    else if (number >= 20) {
        console.log("Huge")
    }
}
showTheMessage (7)

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i < 11; i++) {
    if (i === 3) {
        continue
    }
    if (i === 8) {
        continue
    }
    console.log(i)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/


for(let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(i, "even")
    }
    else {
        console.log(i, "odd")
    }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verify (num1, num2) {
    if (num1 === 8 || num2 === 8) {
        console.log("Uno dei due numeri è uguale a 8")
    }
    if (num1 + num2 === 8) {
        console.log("la somma dei due numeri è uguale a 8")
    }
    if (num1-num2 === 8) {
        console.log("la differenza tra i due numeri è uguale a 8")
    }

    }
    verify (5, 3)

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 55;


function findTheTotal (totalShoppingCart) {
    let shippingCost = 10;
    let finalPrice;
    if (totalShoppingCart > 50) {
        shippingCost = 0;
    }
    finalPrice = totalShoppingCart + shippingCost;
    return finalPrice
}
console.log("il totale da pagare è", + findTheTotal(totalShoppingCart))

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = 55;


function findTheTotal (totalShoppingCart) {
    let shippingCost = 10;
    let discount = 0.20;
    let finalPrice;
    let discountPrice = totalShoppingCart - (totalShoppingCart * discount )
    if (discountPrice > 50) {
        shippingCost = 0;

    }
    finalPrice = discountPrice + shippingCost;
    return finalPrice
}
console.log("il totale da pagare è", + findTheTotal(totalShoppingCart))

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/


let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender);



/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 0; i < 101; i++) {
    if (i % 3 === 0) {
        console.log("fizz")
    }
    if(i % 5 === 0) {
        console.log("buzz")
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("fizzBuzz")
    }
    console.log(i)
}
