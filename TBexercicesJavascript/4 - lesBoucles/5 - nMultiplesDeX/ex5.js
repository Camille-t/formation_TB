/*
Exercice 5 - Multiples
Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

Exemple pour N=5 et X=7 :

1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
5 x 7 = 35
Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème.
*/

x = parseInt(prompt("Table de mulitplication du nombre :")); 
n = parseInt(prompt("Multiplier jusqu'à :"));

var resultat= 0;

for(i = 1 ; i <= n ; i++)
{
        resultat=i*x;
        console.log(x+ "x" +i+ "=" +resultat);
}
