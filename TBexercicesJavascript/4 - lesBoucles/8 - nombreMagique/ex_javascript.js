// Ecrire un programme qui met en œuvre le jeu du nombre magique : l'ordinateur choisit un nombre aléatoire 
// et l'utilisateur doit trouver ce nombre. A chaque fois que l'utilisateur saisit une valeur, il reçoit une indication lui indiquant "plus petit" ou "plus grand".
// Vous aurez besoin de générer un nombre aléatoire avec la fonction `random` de l'objet `Math` :


var magic = parseInt(Math.random() * 100);// permet de générer un nombre aléatoire compris dans l'intervalle [0, 1[ *100 donc 100 en est exclu. //
var nombreUtilisateur = parseInt(window.prompt("Saisissez un nombre entre 0 et 100"));

if ( nombreUtilisateur<0 || nombreUtilisateur>100 )// Si l'utilisateur saisi un nombre qui n'est pas compris entre 0 et 100 on lui demande de saisir à nouveau un nombre.//
    window.prompt("Vous devez saisir un nombre entre 0 et 100");

while (nombreUtilisateur != magic) { // tant que le nombreUtilisateur est différent du nombre magique généré par le programme, alors, //
    if (nombreUtilisateur > magic) { // si c'est parce que la valeur du nombreUtilisateur est supérieur au nombre magic, alors on affiche une fenêtre qui lui indique qu'il doit choisir un nombre plus petit.//
        window.alert("plus petit:");
    } else if (nombreUtilisateur < magic) {// si c'est parce que la valeur du nombreUtilisateur est inférieur au nombre magic, alors on affiche une fenêtre qui lui indique qu'il doit choisir un nombre plus grand.//
        window.alert("plus grand:");
    }
    nombreUtilisateur = window.prompt("Essayez encore");// Dans les deux cas comme le nombreUtilisateur est différent du nombre magic on demande à l'utilisateur de saisir un nouveau chiffre//
}

window.alert("Bravo vous avez deviné le nombre magique!");// on sort de la boucle à partir du moment ou nombreUtilisateur != magic est false donc quand l'utilisateur a deviné le nombre magique ; on l'en informe donc!//
/*
// CORRECTION
var magic = parseInt(Math.random() * 100);
var nombre = 0;
var play = true;
do {
    nombre = parseInt(window.prompt("Saisissez un nombre\n(ou cliquez sur Annuler pour arrêter)"));
    if (nombre == magic) {
        alert("Gagné !\nLe nombre était bien " + magic);
        break;
    } else if (nombre > magic) {
        play = window.confirm("Trop grand ! Rejouer ?")
    } else {
        play = window.confirm("Trop petit ! Rejouer ?");
    }
} while (nombre != magic && nombre != null && play == true);
if (nombre == null || play == false) {
    alert("Le nombre à trouver était " + magic);
}
*/