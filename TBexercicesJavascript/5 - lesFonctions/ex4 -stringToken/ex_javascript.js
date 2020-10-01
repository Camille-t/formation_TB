/* Concevez la fonction strtok qui prend 3 paramètres str1, str2, n en entrée et renvoie une
 chaîne de caractères : str1 est composée d’une liste de mots séparés par le caractère str2.

 strtok sert à extraire le nième mot de str1.

 Exemple :
 Pour str1 = « robert ;dupont ;amiens ;80000 », strtok (str1, « ; », 3) doit retourner « amiens »
 */


/* CORRECTION
 function strtok(str1,str2,n) 
    {
        var res = str1.split(str2);
        console.log(res[n]);
     }  
​
     var str1 = "robert ;dupont ;amiens ;80000";
     var str2 = ";";
     var n = 2;
     
     strtok(str1, str2, n);
*/








str1 = word + str2;
str2 = prompt("Veuillez saisir un caractère");
n = parseInt(prompt("Veuillez saisir un nombre"));


