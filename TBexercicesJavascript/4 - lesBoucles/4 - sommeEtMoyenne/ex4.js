/*
Exercice 4 - Moyenne
Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).
*/

var total = 0;
var compteur = 0;
var moyenne = null;
var entier = null;
     
while (entier != 0) // tant que l'utilisateur n'a pas saisi la valeur 0, 
{
    entier = parseInt(prompt("Veuillez saisir un nombre entier ou saisir 0 puis cliquer sur Ok pour arrêter la saisie")); 
    total += entier; // total est égale à la somme des valeurs saisies par l'utilisateur
    compteur++; // on incrémente compteur à chaque passage dans la boucle afin de récupérer le nombre d'entiers saisis par l'utilisateur       
} 
   
moyenne = total / (compteur - 1); // Une fois sorti de la boucle, on peut calculer la moyenne car on a le total et le nombre de tours définitifs (que l'on décrémente afin de ne pas prendre en compte la saisie de 0)
console.log("La somme des valeurs saisies est égale à : " + total);
console.log("La moyenne des valeurs saisies est égale à : " + moyenne);

/* 
// autre solution, avec une boucle for

for(compteur = 0 ; entier !=0 ; compteur++)
{
    entier = parseInt(prompt("Veuillez saisir un nombre entier ou saisir 0 puis cliquer sur Ok pour arrêter la saisie"));
    total += entier;
}
moyenne = total / (compteur - 1); // Une fois sorti de la boucle, on peut calculer la moyenne car on a le total et le nombre de tours définitifs (que l'on décrémente afin de ne pas prendre en compte la saisie de 0)
console.log("La somme des valeurs saisies est égale à : " + total);
console.log("La moyenne des valeurs saisies est égale à : " + moyenne);
*/