/*Exercice 3 - Calculette
Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.
Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.
*/

var nb1 = parseInt(prompt("Veuillez saisir un nombre entier"));
var operateur = prompt("Veuillez choisir et saisir un opérateur parmi les suivants : +, -, * ou /");
var nb2 = parseInt(prompt("Veuillez saisir un second nombre entier"));
var resultat;

if ((operateur === "/") && (nb2 == 0)) // on commence par traiter le cas de la division par 0
{
    alert("Un nombre ne peut pas être divisé par 0. Veuillez rafraîchir la page pour recommencer la saisie");
}
    else if (operateur === "+")
    {
        resultat = nb1 + nb2;
    }
    else if(operateur === "-")
    {
        resultat = nb1 - nb2;
    }
    else if(operateur === "*")
    {
        resultat = nb1 * nb2;
    }
    else if((operateur === "/") && (nb2 != 0))
    {
        resultat = nb1 / nb2;
    }
    else // si on n'est pas rentré dans l'un des cas précédent c'est que l'opérateur saisi est invalide
    {   
        alert("L'opérateur que vous avez saisi n'est pas valide. Veuillez rafraîchir la page pour recommencer la saisie");
    }

alert("Le résultat de " + nb1 + operateur + nb2 + " est " + resultat);

/* On peut également utiliser un switch :

 var nb1 = parseInt(prompt("Entrez votre premier nombre entier"));
    var nb2 = parseInt(prompt("Entrez votre deuxième nombre entier"));
    var operateur = prompt("entrez un opérateur +, -, * ou /");  

if (operateur=="/" && nb2==0) // On traite d'abord le cas de la division par 0 :
    {
 	   alert("Division par zéro : impossible");
    } 
    else 
        {
            switch (operateur) 
        {
            case "+":
                resultat = nb1 + nb2;
                break; 
            case "-":
                resultat = nb1 - nb2;
                break; 
            case "*":
                resultat = nb1 * nb2;
                break; 
            case "/":
                resultat = nb1 / nb2;
                break;
            default :
                alert("Opérateur '"+operateur+"' invalide"); // Si on n'est pas rentré dans l'un des cas précédents, c'est que l'opérateur saisi est invalide, on peut alors utiliser le cas par défaut pour afficher un message d'erreur default:
        } // fin du switch
     } // fin du else

alert(nb1+operateur+nb2+" = "+resultat);
*/