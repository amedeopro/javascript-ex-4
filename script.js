// Una funziona per capire se la parola è
// palindroma



var parola = prompt("Inserisci una parola");

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

if (checkPalindrom(parola)) {
  document.writeln('la parola è palindroma');
} else {
  document.writeln('la parola NON è palindroma');
}
