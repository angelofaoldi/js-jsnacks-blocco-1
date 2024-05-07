/*

Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Se è dispari inseriscilo nell’array.
Stampa in console l'array risultante.

*/

'use strict';

// CREO ARRAY VUOTO
const ARRAY = [];

// STABILISCO LA LUNGHEZZA DELL'ARRAY
const ARRAY_LENGHT = 6;

// CREO VARIABILE NUMERI = PUNTO DI PARTENZA
let numeri = 0

// CICLO FOR = CHIEDERE SEI VOLTE UN NUMERO
for (let i = 1; i <= ARRAY_LENGHT; i++)
    {let numeri = Number(prompt`Inserisci un numero ${i}:`)
    console.log(`Number ${i}: `, numeri);

    // CONTROLLARE CIO' CHE L'UTENTE INSERISCE
    // STRUTTURA IF {non è un numero} ELSE {è un numero = stampa}

    if (isNaN(numeri))
        {alert ('Inserisci un numero!') i--;

    // SE NUMERO DISPARI = PUSHARE NELL'ARRAY
    else if (number % 2 !== 0)
        {ARRAY.push (numeri);}
}

console.log('Numeri dispari: ', ARRAY);