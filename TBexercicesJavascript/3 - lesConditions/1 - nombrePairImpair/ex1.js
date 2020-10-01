/*Exercice 1 - Parité
Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair. 
Le programme doit afficher le résultat nombre pair ou nombre impair. 
Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, si ce reste est égal à zéro, a est divisible par 2.
*/

var nombre = prompt("Veuillez saisir un nombre");

if ((nombre % 2) == 0)
{
    alert("nombre pair");
}
else
{
    alert("nombre impair");
};