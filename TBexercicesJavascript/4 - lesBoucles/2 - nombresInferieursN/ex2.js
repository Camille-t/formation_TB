/* Exercice 2 - Entiers inférieurs à N
Ecrire un programme qui affiche les nombres inférieurs à N.
*/

var N = parseInt(prompt("Veuillez saisir un nombre"));
var i;

for (i = N ; i != 0 ; i--) // On démarre notre boucle avec i qui a la valeur du nombre saisi par l'utilisateur. Tant que i est différent de 0, i est décrémenté
{
       console.log(i); // on affiche dans la console toutes les valeurs de i
}

/* 
//autre solution avec une boucle While

var N = parseInt(prompt("Veuillez saisir un nombre"));

while (--N != 0) // on décrémente N directement pour ne pas afficher dans la console le nombre saisi par l'utilisateur. Tant que N est différent de 0 il est décrémenté
{   
    console.log(N);
}
*/