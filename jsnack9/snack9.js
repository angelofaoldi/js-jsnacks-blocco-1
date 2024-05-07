/*

Snack 9
Calcola la somma e la media dei primi 10 numeri.
Stampa i risultati on console

*/

'use strict';

// CREO ARRAY DI 10 NUMERI
const NUMERI = [1. 2. 3. 4. 5. 6. 7. 8. 9. 10];
console.log('Numeri: ', NUMERI);

// CREO VARIABILE SOMMA CHE CAMBIERà SUCCESSIVAMENTE
let somma = 0;

// CREO VARIABILE MEDIA
let media = somma / NUMERI.lenght;

// CICLO FOR
// SOMMARE I NUMERI DENTRO L'ARRAY

for (let i = 0; i < NUMERI.lenght; i++)
    {somma +- NUMERI[i];}

// STAMPARE LA SOMMA
console.log('Somma: ', somma);

// STAMPARE LA MEDIA
console.log('Media: ', media);