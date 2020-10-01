/*Créer un script qui demande successivement à l'utilisateur son nom puis son prénom.
La page demande ensuite à l'utilisateur s'il est un homme ou une femme.
Enfin, la page affiche les informations sur l'utilisateur.
var nom = prompt("Entrez votre nom");
var prenom = prompt("Entrez votre prénom");
var sexe = confirm("Etes-vous un homme?");
*/

if (sexe == true)
{
    alert("Bonjour Monsieur " + nom + " " + prenom + "\n Bienvenue sur notre site web !")
}
else if (sexe == false)
{
    alert("Bonjour Madame " + nom + " " + prenom + "\n Bienvenue sur notre site web !")
}