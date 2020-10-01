
// var phrase = prompt("Veuillez saisir une phrase");
// var lettre = prompt("Veuillez saisir une lettre");

function maVariable(phrase, lettre) {   
    var occurenceLettre = 0;
        for (i = 0; i < phrase.length; i++) {
            if (phrase[i] == lettre) {
                occurenceLettre++;
                }
        }
alert("La lettre " + lettre + " est présente " + occurenceLettre + " fois dans " + phrase);
}

maVariable("Bienvenue à la maison", "m" );


/*
//CORRECTION

// `phrase` de type _string_
// `lettre` de type _string_
// La fonction compte le nombre de fois ou `lettre` apparaît dans `phrase`.
        var compteur = 0;
        var phrase = prompt("Saisir une phrase");
        var lettre = prompt("Saisir une lettre");

		for (i=0; i<phrase.length; i++)
		{
		   if (phrase[i] == lettre)
		   {
 	          compteur++;
		   }
		}

        alert("La lettre '"+lettre+"' est présente "+compteur+" fois dans '"+phrase+"'");
        */