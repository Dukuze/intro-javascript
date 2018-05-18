var nombre = Number(prompt("Entrez un nombre :"));

if (nombre > 0) {

    console.log(nombre + " est positif");

} else { // nombre <= 0

    if (nombre < 0) {

        console.log(nombre + " est négatif");

    } else { // nombre === 0

        console.log(nombre + " est nul");

    }

} // Use the deboguer 

// Operateur logique / cf new folder after the chap .

// Op Et

if ((nombre >= 0) && (nombre <= 100)) {

    console.log(nombre + " est compris entre 0 et 100");

}

// OP Ou

if ((nombre < 0) || (nombre > 100)) {

    console.log(nombre + " est en dehors de l'intervalle [0, 100]");

}

// Op Non

if (!(nombre > 100)) {

    console.log(nombre + " est inférieur ou égal à 100");

}

