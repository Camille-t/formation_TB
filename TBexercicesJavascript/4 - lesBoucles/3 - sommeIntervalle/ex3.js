/*
Exercice 3 - Somme d'un intervalle
Ecrire un programme qui saisit deux nombres n1 et n2 et qui calcul ensuite la somme des entiers de n1 à n2.
*/

var nb1 = parseInt(prompt("Veuillez saisir un premier nombre"));
var nb2 = parseInt(prompt("Veuillez saisir un second nombre"));;
var somme = 0;

if (nb1 < nb2) // si le premier nombre saisi par l'utilisateur est inférieur au second nombre qu'il saisit
{
    for (i = nb1 ; i <= nb2 ; i++)
    {
        somme += i; // la valeur de somme est égale à la somme des valeurs de i
    }
}
    else // si le premier nombre saisi par l'utilisateur est supérieur au second nombre qu'il saisit
{
    for (i = nb2 ; i <= nb1 ; i++)
    {
        somme += i;
    }
}

console.log(" la somme des entiers de " + nb1 + " à " + nb2 + " est égale à " +somme);
