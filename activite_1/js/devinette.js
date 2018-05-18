/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// TODO

var NombreEssai = 1
  
for (NombreEssai = 1; NombreEssai <= 6 ; NombreEssai++) {
var User = Number(prompt("Entrez un nombre 1 et 100 : "));

if(User === solution) {  
    console.log("Félicitation ! La bonne reponse est " + solution +" .Vous avez reussi en " + nombreEssai + " " + " essais. ");
    break;
}
    if ((User < solution) && (NombreEssai !== 6))  {
        console.log(User + " est trop petit.");
     
    } if ((User > solution) && (NombreEssai !== 6)) {
        console.log(User + " est trop grand.");
     
    } if ((User < solution) && (NombreEssai === 6)) {
        console.log(User + " est trop petit. Vous avez perdu.");
     
    } if ((User > solution) && (NombreEssai === 6)) {
        console.log(User + " est trop grand. Vous avez perdu.");
    } 




    
    // REMPLACER LES INSTRUCTION PAR UN SWITCH ^^ MOUHAHAHAHAHAHAH 
else { 
        console.log("Manque de Pot ... La solution est" + " " + solution);
    }}