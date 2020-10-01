/* Ecrire le programme qui réalise le tri à bulles.
Le principe est le suivant :
Le tableau est parcouru en comparant les éléments consécutifs.
S’ils sont mal ordonnés, ces deux éléments sont permutés. On recommence jusqu’à ce qu’il n’y ait plus d’échange.
Méthode :
Les éléments sont comparés deux à deux, et on affecte une variable booléenne à vraie si un échange est réalisé.
La condition d’arrêt du traitement est que la variable booléenne soit restée à faux.
*/

function triABulles(tableau)
{
    var echange;

    do
    {
        echange = false;
        for(var i = 0 ; i < tableau.length-1; i++)
        {
            if(tableau[i] > tableau[i+1]) // on analyse si le premier élément est supérieur au second (18 et 5), si c'est vrai on permute les deux éléments (echange = true), le 5 prend la place du 18
            {
                var temporaire = tableau[i];
                tableau[i] = tableau[i+1];
                tableau[i+1] = temporaire;
                echange = true;
            }
        }
    } while(echange); // tant que echange = true , le tri n'est pas terminé
}

var tableau = [18, 5, 14, 4, 26];
triABulles(tableau);
console.log(tableau);


// le programme va commencer par comparer tableau[0] et tableau[1], si tableau[0] > tableau[1] on va créer une variable temporaire qui prendra la valeur de tableau[0]
// ==> 18 > 5 donc var temporaire = 18
// ensuite on va passer (echange) la valeur de tableau[1] dans tableau[0]
// ==> tableau[0] = tableau[1] donc tableau[0] = 5
// et on va se servir de la variable temporaire pour remplacer la valeur de tableau[1] par cette valeur
// ==> tableau[1] = temporaire donc tableau[1]= 18
// Il y a eu un échange donc on indique que la variable booleenne echange est true car la boucle doit continuer jusqu'à ce qu'il n'y ai plus d'échange ce qui signifiera que le tri du tableau est terminé

/*
function triABulles(tableau) 
{
    var i = 0;
    var j = 0;
    var temporaire;
    var len = tableau.length;
    while (j < len) // on crée une boucle qui va aller "interroger" toutes les valeurs présentes dans notre tableau
    {
        while (i < len)
        {
            if (tableau[i] > tableau[i + 1]) // si la première valeur est supérieure à la valeur qui suit
            {
                temporaire = tableau[i]; // on affecte la première valeur dans une variable temporaire
                tableau[i] = tableau[i + 1] // et on affecte la deuxième valeur à la première "cellule" du tableau
                tableau[i + 1] = temporaire; // la deuxième "cellule" de notre tableau prend alors la valeur temporaire(la valeur supérieure)
                console.log(tableau);
            }
            i++ // 
        }
        i = 0; // on redonne la valeur 0 à i pour qu'il aille tester la première valeur de notre tableau
        len --;
        j++;
    }
    return tableau;
}
var tableau = [18, 5, 14, 4, 26]; // on précise les valeurs du tableau
triABulles(tableau); // on appelle la fonction triABulles sur le tableau que l'on vient de déclarer
console.log(tableau);
*/