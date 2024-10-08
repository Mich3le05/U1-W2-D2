/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1 = 10
let n2 = 7

if (n1 > n2) {
  console.log(n1 + ' è più grande di ' + n2)
  console.log('il più grande è ' + n1)
} else {
  console.log(n2 + ' è più grande di ' + n1)
  console.log('il più grande è ' + n2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let number = 10

if (number !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let number2 = 75

if (number2 % 5 === 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let x1 = 80
let x2 = 8

// se x1 è 8
// se x2 è 8
// se x1+x2 è 8
// se x1-x2 è 8
// se x2-x1 è 8

if (x1 === 8 || x2 === 8 || x1 + x2 === 8 || x1 - x2 === 8 || x2 - x1 === 8) {
  console.log('verificato')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 40
const shippingCost = 10
let totalToPay

if (totalShoppingCart >= 50) {
  totalToPay = totalShoppingCart
} else {
  totalToPay = totalShoppingCart + shippingCost
}
console.log('Totale da pagare:', totalToPay)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 40
const shippingCost2 = 10
let totalToPay2

if (totalShoppingCart2 * 0.8 >= 50) {
  totalToPay2 = totalShoppingCart2 * 0.8
} else {
  totalToPay2 = totalShoppingCart2 * 0.8 + shippingCost2
}
console.log('Totale da pagare:', totalToPay2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const n4 = 4
const n7 = 7
const n9 = 9

if (n4 >= n7) {
  if (n9 >= n4) {
    console.log(n9, n4, n7)
  } else {
    if (n9 >= n7) {
      console.log(n4, n9, n7)
    } else {
      console.log(n4, n7, n9)
    }
  }
} else {
  if (n9 >= n7) {
    console.log(n9, n7, n4)
  } else {
    if (n9 >= n4) {
      console.log(n7, n9, n4)
    } else {
      console.log(n7, n4, n9)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if (typeof n4 === 'number') {
  console.log(n4, ' è un numero')
} else {
  console.log(n4, ' non è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (n4 % 2 === 0) {
  // non c'è resto nella divisione con due
  console.log('numero pari')
} else {
  console.log('numero dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arr = []
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)
arr.push(9)
arr.push(10)
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr[9] = 100
console.log(arr)
