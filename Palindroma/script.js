// Capire se la parola inserita dall’utente è palindroma o no (e quindi output di conseguenza)
// Il palindromo è una sequenza di caratteri che, letta al contrario, rimane invariata.
// Chiedere al utente una parola come input
var word_input = prompt("Inserisci una parola/stringa");
console.log("Qua e stata inserita una parola/stringa");
console.log(word_input);
// Separare i caratteri della parola inserita in input
var charsplit = word_input.split("");
console.log("Qua i caratteri sono separati");
console.log(charsplit);
// Sequenziamo i caratteri in reverse (palindormo)
var charreverse = charsplit.reverse("");
console.log("Qua i caratteri sono invertiti");
console.log(charreverse);
// Inseriamo i caratteri invertiti in una array
var charjoin = charreverse.join("");
console.log("Qua i carattere sono invertiti e rinstampati");
console.log(charjoin);
// Output : Controlliamo se la parola/stringa inserita dall'utente e palindroma o no.
if (word_input === charjoin) {
  console.log("La parola e palindroma")
} else {
  console.log("La parola non e palindroma")
}
