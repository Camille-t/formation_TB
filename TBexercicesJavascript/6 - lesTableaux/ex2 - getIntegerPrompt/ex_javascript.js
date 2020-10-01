/* Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir
d’un tableau à une dimension :
 Affichage du contenu de tous les éléments du tableau,
 Affichage du contenu d’un élément dont l’index est saisi au clavier,
 Affichage du maximum et de la moyenne des éléments du tableau

Ce programme sera structuré de la manière suivante :
 une fonction GetInteger pour lire un entier au clavier,
 une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
 une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
 une fonction AfficheTab pour afficher tous les postes du tableau,
 une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
 une fonction InfoTab qui affichera le maximum et la moyenne des postes.
Les fonctions seront appelées successivement.
*/



function GetInteger() { // fonction qui lit un entier au clavier
    return parseInt(window.prompt("Veuillez saisir un Entier que vous souhaitez intégrer comme élément du tableau"));
}

function InitTab() { // fonction qui créé et initialise l'instance du tableau avec le nombre de postes entré au clavier
    var tab = [];
    tab.length = window.prompt("Veuillez saisir le nombre de postes que vous souhaitez intégrer au tableau");
    console.log(tab.length);
    return tab;
}

function SaisieTab(tab) { // fonction qui permet la saisie des différents postes du tableau
    for (var i = 0; i < tab.length; i++) {
        tab[i] = GetInteger();
    } console.log(tab);
    return tab;
}

function AfficheTab(tableau) { // fonction qui permet d'afficher tous les postes du tableau
    var contenu = tableau.join("\n");
    alert(contenu);
}

function RechercheTab(tableau) { // fonction pour afficher le contenu d'un poste de tableau dont le rang est saisi au clavier
    var index = parseInt(window.prompt("Indiquer le rang d'un poste du tableau dont vous souhaitez consulter le contenu"));
    alert(tableau[index - 1]);
}

function InfoTab(tableau) { // fonction qui affichera le maximum et la moyenne des postes
    var somme = 0;
    for (i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    } 
        var moyenne = somme / (tableau.length);
        var max = Math.max(...tableau);
        alert("La moyenne des postes est égale à : " + moyenne);
        alert("La valeur maximum des postes est : " +max);
}

var tableau = SaisieTab(InitTab(tableau));
AfficheTab(tableau);
RechercheTab(tableau);
InfoTab(tableau);



