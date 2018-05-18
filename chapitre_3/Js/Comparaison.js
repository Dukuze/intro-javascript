
/* 
Exercice : comparer deux nombres.
*/
 console.log("Nous allons comparer deux nombres.");

var nombre1 = Number(prompt("Entrez le 1er nombre :"));
var nombre2 = Number(prompt("Entrez le 2ème nombre :"));

if (nombre1 < nombre2) {
    console.log(nombre1 + " est plus petit que " + nombre2);
} 
else if (nombre1 > nombre2) {
    console.log(nombre1 + " est plus grand que " + nombre2);
} 
else {
    console.log(nombre1 + " et " + nombre2 + " sont égaux");
}