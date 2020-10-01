/*Exercice 2 - Age
Ecrivez un programme qui demande l'année de naissance à l'utilisateur. En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.
*/

var anneeDeNaissance = prompt("Vauillez saisir votre année de naissance");
var age = 2019 - anneeDeNaissance;

if (age >= 18) 
{
    alert("Vous avez " + age + " ans\nVous êtes majeur");
}
else
{
    alert("Vous avez " + age + " ans\nVous êtes mineur");
};
