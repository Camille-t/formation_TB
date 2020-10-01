// Ecrivez un programme permettant de saisir différentes valeurs numérique (avec l'instruction window.prompt), ces valeurs seront rangées dans un tableau. La saisie s'arrête quand l'utilisateur entre la valeur 0.
// A la fin de la saisie, votre programme doit afficher le nombre de valeurs saisies, la somme et la moyenne.


function SaisieTab() 
{ 
    let i = 0;
    let tableau = [];
    while (tableau[i - 1] != 0) 
    {
        tableau[i] = parseInt(prompt("Veuillez entrer une valeur numérique"));
        i++;
    }
    return tableau;
}

function NbValeursSaisies(tableau) 
{
    var nbValeursSaisies = tableau.length - 1;
    alert("Vous avez saisi " + nbValeursSaisies + " valeurs");
}

function InfoTab(tableau) 
{
    let somme = 0;
    let i = 0;
    let moyenne = 0;
    for (i = 0; i < tableau.length; i++) 
    {
        somme += tableau[i];
    } moyenne = somme / (tab.length -1);
    alert("La somme des valeurs saisies est : " + somme);
    alert("La moyenne des valeurs saisies est : " + moyenne)
}
var tab = SaisieTab();
NbValeursSaisies(tab);
InfoTab(tab);
