// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha
// vinto.

//genero un numero random da tra 1 e 5 in una funzione
function randomizza(){
  var numeroCaso =  Math.floor(Math.random() * 5) + 1 ;
  return numeroCaso;
}

var funzione_random = randomizza();

// l'utente sceglie se è pari o dispari e un numero tra 1 e 5

var utente1 = prompt("Scegli tra PARI e DISPARI");
var numeroUtente = parseInt(prompt("Sceglie un numero tra 1 e 5"))

document.writeln("Il numero scelto dall'utente è " + numeroUtente + " " + "Il numero dell'avversario è " + funzione_random);

// una volta che l'utente ha scelto la cpu sarà di conseguenza pari o dispari
//creo la condizione in cui se un numero è pari o dispari e decreto il vincitore

if ((funzione_random + numeroUtente) % 2 == 0) {
  document.writeln("Ha vinto PARI");
} else if((funzione_random + numeroUtente) % 2 != 0) {
  document.writeln("Ha vinto DISPARI");
}
