let firstName;
firstName = prompt("Inserisci il tuo nome");

let lastName;
lastName = prompt("Inserisci il tuo cognome");

let color;
color = prompt("Inserisci il tuo colore preferito");


const number = 23



document.getElementById("title").innerHTML =
    `Benvenuto ${firstName} ${lastName}`
;

document.getElementById("password").innerHTML =
    `Questa è la tua password sicurissima: 
    ${firstName + lastName + color + number}`
;













console.log(firstName);
console.log(lastName);
console.log(color);