// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Poi generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
// (Quindi classico gioco pari o dispari dove utente sceglie a priori se uscirà pari o dipsari e poi dichiara un numero (tra 1 e 5) . Il computer genera random altro numero sullo stesso range, così sapremo chi ha vinto.

// Chiediamo al utente di inserire pari o dispari e un numero da 1 a 5 come INPUT
var choose = prompt("Ciao,pari o dispari?")
console.log("Hai scelto " + choose);
var choosenum = parseInt(prompt("Ciao,scegli anche un numero da 1 a 5"))
console.log("Hai scelto il numero " + choosenum);
// Generiamo pari o dispari random per il computer
var wordcomputer = ["Pari" , "Dispari"];
var sceltawordcomputer = wordcomputer[Math.floor(Math.random()*wordcomputer.length)];
console.log("Il computer ha scelto " + sceltawordcomputer);
// Generiamo un numero random (sempre da 1 a 5) per il computer
var computerNr = Math.floor(Math.random() * 5) + 1;
console.log("Il computer ha scelto il numero " + computerNr);
// Output finale vincitore
