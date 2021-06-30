// console log
console.log('js ok');

/*
Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
 */

// recupero elemento html
var passwordSpot = document.getElementById('laTuaPassword');

// variabili
var nome = prompt('Inserisci il tuo nome');
console.log('nome utente:',nome);
var cognome = prompt('Inserisci il tuocognome');
console.log('cognome: ',cognome);
var colore = prompt('Inserisci il tuo colore preferito');
console.log('colore preferito:', colore);

// messaggio
var message = 'La tua password è ';
var passwordPlaceholder = '21';

// risultato

passwordSpot.innerText = message + nome + cognome + colore + passwordPlaceholder;