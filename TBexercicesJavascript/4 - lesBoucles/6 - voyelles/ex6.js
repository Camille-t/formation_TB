/*
Exercice 6 - Nombre de voyelles.
Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :

myVar.length : retourne le nombre de lettres de la chaîne myVar.
myVar.substr(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)
myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1).
*/

var voyelles = 0;
var mot = prompt("Veuillez saisir un mot sans accents :");

while (!(isNaN(mot))) // tant que l'utilisateur saisi autre chose qu'une chaine de caractères on lui demande de recommencer la saisie
{
    mot = prompt("Vous devez saisir un mot :");
}    

mot = mot.toLowerCase(); // on "force" la mise en minuscules pour le cas où l'utilisateur saisi une chaîne de caractères en majuscules
        
for (i = 0 ; i < mot.length ; i++)
{
   if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") // condition : les lettres qui composent le mot saisi sont des voyelles
   {	
       voyelles++;
   }
}

alert("le nombre de voyelles dans " + mot + " est de " + voyelles);

/* 
// autre solution : on utilise un switch pour notre boucle

var mot = prompt("Veuilez saisir un mot");
var compteur = 0;

for (i = 0; i < mot.length; i++) 
{
    switch (mot[i]) 
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'y':
            compteur++; // incrémentation de notre compteur dans tous les cas présents
            break; // fin de la boucle
        default:" ";
    }
}
console.log("Il y a " + compteur + " voyelles dans le mot " + mot);
*/
