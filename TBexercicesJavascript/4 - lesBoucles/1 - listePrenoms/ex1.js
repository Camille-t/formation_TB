/* Exercice 1 - Saisie
Créer une page HTML qui demande à l'utilisateur un prénom.
La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.
*/

var prenom = "chaine à écraser"; 
var compteur = 0;
var liste = "";

while ((prenom != "") && (prenom != null)) // tant que l'utilisateur ne clique pas sur OK en laissant le champ vide ET qu'il ne clique pas sur Annuler
{
    prenom = prompt("Saisissez le prenom N°" + compteur + "\nou Clic sur Annuler pour arrêter la saisie."); // on lui demande de saisir des prénoms

    if(!(prenom != "") || (prenom != null)) // si l'utilisateur clique sur annuler (prenom prend alors la valeur null) OU s'il clique sur OK en laissant le champ vide (prenom prend la valeur "")
    {
        liste += ("\n" + prenom + "\n"); // liste prend comme valeur le(s) prenom(s) saisi(s) 
    }

    compteur++; // on incrémente notre compteur à chaque passage dans la boucle
}


console.log("Nombre de prénom(s) saisi(s) : " + (compteur - 1)); // lorsque l'utilisateur clic sur Ok en laissant le champ vide, compteur est incrémenté "inutilement" donc on le décrémente ici
console.log("Liste de(s) prénom(s) saisi(s) : " + liste);

/* 
// autre solution avec une boucle do while:

var compteur = 1;
    var lstPrenoms = "";
​
    do 
    {
		var prenom = window.prompt("Saisissez le prénom n°" + compteur + "\n ou clic sur Annuler pour arrêter la saisie");
		console.log(prenom);
	
        if (prenom == null || prenom == "") 
        { 
            break; 
        }
        compteur++;

        if (lstPrenoms == "") 
        {
			lstPrenoms += (prenom);
			continue;
		}
		lstPrenoms += (", " + prenom);	
    } 
    while (prenom != "" && prenom != null)
​
console.log(compteur-1);
alert((compteur-1) + " prénom.s saisi.s : \n" + lstPrenoms);
*/