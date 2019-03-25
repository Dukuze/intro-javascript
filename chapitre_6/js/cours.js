console.log("ABC".length); // Affiche 3
console.log("Je suis une chaîne".length); // Affiche 18

var mot = "Kangourou";

var longueurMot = mot.length; // longueurMot contient la valeur 9

console.log(longueurMot); // Affiche 9


var motInitial = "Bora-Bora";

var motEnMinuscules = motInitial.toLowerCase();

console.log(motEnMinuscules); // Affiche "bora-bora"

var motEnMajuscules = motInitial.toUpperCase();

console.log(motEnMajuscules); // Affiche "BORA-BORA"


var chaine = "azerty";

console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "qwerty"); // Affiche false

var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"