/*Exercice 0
Codez les exemples 1 à 6 présentés dans le paragraphe L'action conditionnée.
*/
var patient = confirm("S'agit-il d'un patient?");

if (patient != true)
{
    alert("Éconduire l'olibrius");
}
else 
{
    var temperature = prompt("Veuillez saisir la température du patient");
    console.log(temperature);
    var tension = prompt("Veuillez saisir la tension du patient");
    console.log(tension);
    var pouls = prompt("Veuillez saisir le pouls du patient");
    console.log(pouls);

if(temperature > 38) 
    alert("Le patient a de la fièvre");
if ((temperature > 41) && (tension > 25)) 
    alert("Le patient va perdre patience");    
if ((temperature > 42) || ((tension < 25) && (pouls > 180)))
    alert("Prévenir la famille");
if ((temperature > 40) || (tension >= 25)) 
    alert("Hospitaliser le patient");
if ((patient == true) && (pouls == 0))
    alert("Appeler le curé");
};