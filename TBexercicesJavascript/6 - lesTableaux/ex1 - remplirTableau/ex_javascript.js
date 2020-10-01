/* Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
Puis votre programme doit afficher le contenu du tableau.*/


var tableau = Array(); // ici on déclare et initialise un tableau avec ? éléments 
var i;
var contenu; // variable contenu qui nous permettra d'afficher le contenu du tableau
tableau.length = parseInt(window.prompt("Veuillez saisir le nombre d'éléments que vous souhaitez intégrer au tableau")); // on demande à l'utilisateur d'entrer un Entier afin de choisir la longueur du tableau c'est-à-dire le nombre d'éléments qu'il contiendra

for ( i = 0 ; i < tableau.length ; i++ ){ // on utilise une boucle afin que l'utilisateur puisse rentrer les différentes valeurs du tableau. Cette boucle commence avec le premier élément du tableau en position 0 et continue jusqu'à atteindre le dernier élément du tableau correspondant à la longueur du tableau. A chaque passage dans la boucle on ajoute passe à l'élément suivant du tableau c-àd celui qui a la position+1
    tableau[i]=(window.prompt("Veuillez saisir une entrée")); // pour chaque élément du tableau on invite l'utilisateur à saisir une donnée
}
contenu = tableau.join("\n"); // ici on transforme les données du tableau en une chaine de caractère en séparant les éléments du tableau avec le caractère \n qui effectue un renvoi à la ligne.
alert("Voici le contenu du tableau : \n" +contenu); // on affiche le contenu du tableau transformé en chaine



