// Ecrivez un programme qui permet de tester si un nombre est premier.
/* On cherche à évaluer et afficher si un nombre saisi par l'utilisateur est premier c-à-d à afficher estPremier(n)=true.

Si n<2, n ne peut pas être un nombre premier car 0 et 1 ne sont pas des nombres premiers. On déclare donc que si n<2, estPremier(n)=false.

On sait également que si n peut être divisé par un nombre compris entre 2 et racineCarree(n), alors estPremier(n)=false.
*/

var n = parseInt(window.prompt("Veuillez saisir un nombre"));
var racineCarree = Math.sqrt(n);/*La variable racineCarree a pour valeur la racine carree du nombre n saisi par l'utilisateur.*/ 
var estPremier = true;

if (n<2)
	estPremier = false;

for(i=2 ; i<=racineCarree ; i++){ /*Boucle : la boucle commence, on cherche à diviser n par i, on commence la boucle avec la valeur i=2 puis on continue tant que i est inférieur à la racine carrée du nombre saisi. a chaque fois que l'on repart sur la boucle on incrémente i de 1.*/ 

    if(n%i === 0) /*Condition : égalité stricte (pas de conversion de type) Le reste de la division de n par i est égal à 0. Le nombre saisi est donc divisible par un nombre entre n et racineCarree(n) et ce n'est donc pas un nombre premier.*/
		estPremier = false;    

}

console.log(n + " est premier :" + estPremier);  

/* CORRECTION
while (isNaN(number)) {
	    // on renouvèle la saisie
	    number = parseInt(window.prompt('Saisissez un premier nombre :'));
	}
	    var divide = 0;
	    var bool = true;
	    // boucle parcourant les entiers entre n et racine carré du nombre saisi
	    while (n <= Math.sqrt(number)) {
	        // on divise notre nombre par n
	        divide = number / n;
	        console.log('resultat: ' + divide);
	        // si le resultat est différent de 0 et que le reste est égale à 0
	        if ((divide != 0) && (number % n == 0)) {
	            // on definit la variable bool à false
	            bool = false;
	            // et arrêt de la boucle
	            break;
	        }
	        // incrémentation de n
	        n++;
	    }
	    // si le resultat est différent de 0 et que le reste est égale à 0
	    if (bool == false) {
	        // information
	        alert('Ce nombre n\'est pas premier');
	    } else {
	        // information
	        alert('Ce nombre est premier');
	    }

*/