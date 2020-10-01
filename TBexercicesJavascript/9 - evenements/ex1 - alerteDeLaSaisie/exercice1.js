var bouton = document.getElementById("button"); // on créé une variable bouton qui va aller chercher dans le document la balise qui a l'id "button"

function affichePrenomUtilisateur() { // on créé une fonction affichePrenomUtilisateur qui comportera 2 instructions
    var prenom = document.getElementById("prenom").value; // 1ère instruction : on récupère la valeur de notre balise(ici un input) dont l'id est "prenom" avec la méthode getElementsById.value et on la "donne" à une variable que nous appelons prenom
    alert("Vous avez saisi " + prenom); // 2ème instruction = on affiche une fenêtre d'alerte contenant la chaine "Vous avez saisi" + la valeur de notre variable prenom
};

bouton.addEventListener("click", affichePrenomUtilisateur); // Quand l'évènement "click" a lieu dans ma variable bouton, il exécute la fonction affichePrenomUtilisateur



