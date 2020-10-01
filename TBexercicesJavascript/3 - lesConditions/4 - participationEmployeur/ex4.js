/*Exercice 4 - Participation
Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la façon suivante :

si il est célibataire : participation de 20%
si il est marié : participation de 25%
si il a des enfants : participation de 10% supplémentaires par enfant
la participation est plafonnée à 50%
si le salaire mensuel est inférieur à 1200 €, la participation est majorée de 10%.
Ecrire le programme qui lit les informations au clavier et affiche pour chaque salarié, la participation à laquelle il a droit.
*/

var marie = confirm("Etes-vous marié?");
var enfant = parseInt(prompt("Combien d'enfants avez-vous? Si vous n'en avez pas merci de saisir 0"));
var salaire = parseInt(prompt("Veuillez renseigner votre salaire"));
var participation = 0;

if(salaire < 1200) 
{
    if(marie === true)
    {
        participation = 10 + 25 + (10 * enfant);
    }
    else
    {
        participation = 10 + 20 + (10 * enfant); 
    }
}
else // cas où salaire <= 1200
{
    if(marie === true)
    {
        participation = 25 + (10 * enfant);
    }
    else
    {
        participation = 20 + (10 * enfant); 
    }
}

if(participation > 50) // Dans tous les cas on force le taux de participation a rester à 50% max
{
    participation = 50;
}

alert("Le taux de participation de votre employeur aux prix de vos repas est de " + participation + " %.");