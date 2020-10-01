// Ecrire un programme (utilisant une fonction) qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.
// Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème.


var X = parseInt(prompt("Veuillez entrer un nombre"));
var Y = parseInt(prompt("Veuillez entrer un deuxième nombre"));


function multiple(X, Y) {
        for (i = 1; i <= Y; i++) {
                console.log(i + " x " + X + " = " + (i * X));
        }
}
multiple(6, 7);



// Ecrire un programme (utilisant une fonction) qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0). 


var entier;
var somme = 0;
var moyenne = 1;
var i = 0;

function calcul() {

        while (entier !== 0) {
                entier = parseInt(prompt("Veuillez saisir un nombre"));
                somme += entier;
                i++;
                moyenne = somme / i;
        }
        i--;
        console.log("La somme des entiers saisis est égale à " + somme);
        console.log("La moyenne des entiers saisis est égale à " + moyenne);
}

calcul();
 

// Ecrire le programme qui compte le nombre de voyelles d'un mot saisi au clavier en utilisant :
// myVar.length : retourne le nombre de lettres de la chaîne myVar.
// myVar.substr(p, n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention en Javascript, le 1er caractère se trouve à la position 0).
// myVar.indexOf(chaine) : retourne le rang de la première occurence de chaîne dans la variable myVar donnée (si non trouvée : -1).

/* CORRECTION
 function multiple() 
     {
         var nombre = parseInt(prompt("entrez un nombre"));
         var multi = parseInt(prompt("entrez un nombre"));
         
         while (multi > 0) 
         {
             alert(nombre*multi); 
             multi--;
         }
     }
​
     function somme_moyenne() 
     {
          var i=0;
          var somme=0;
          var moyenne=0;
          var nombre=0;
	      nb = parseInt(prompt("moyenne"));
	      notes = new Array(nb);
	
          for(i=1;i<=nb;i++)
	      {
	         x = parseInt(prompt("entre un nombre"));
	         notes[i-1] = parseInt(prompt("entre un second nombre"));
	         somme = x + notes[i-1];
	      }
	
	    moyenne = somme/nb;
		alert("la somme des nombres est :"+somme);
		alert("la moyenne des nombres est :"+moyenne);
	} 
​
    function nb_voyelles()
	{
	    var voyelles = 0;
        var mot = prompt("Saisir un mot :");
				
		for (i=0;i<mot.length;i++)
		{
		   if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") 
		   {	
 	          voyelles++;
		   }
		}
		
        alert("le nombre de voyelles dans :"+mot+" est de "+voyelles);
	}
​
    function comptelettre()
	{ 
        var phrase = prompt("entrez un mot ou une phrase");
	    var lettre = prompt("entrez une lettre");
    
        var compteur=0;
	    var longueur=texte.length;
	    alert(longueur);
		
        for(i=0;i<=longueur;i++)
	    {
	       var d=texte.substr(i,1);
		       
           if (lettre==d)
	       {
	          compteur++;
	       }
		}
	
    	alert(compteur);
	}
​
     var choix = prompt("entrez le chiffre voulu selon l'operation \n1-multiple \n2-somme et moyenne \n3-recherche du nombre de voyelles \n4-recherche du nombre des caractères suivants");
    
     switch (choix) 
     {
         case "1":
            multiple();
            break;
    
         case "2":
            somme_moyenne()
         	break;
	
	     case"3":
	        nb_voyelles();
		    break;
​
		 case"4":
            comptelettre();
            break;
​
         default:
            alert("Choix non valide");
     } 
​

*/