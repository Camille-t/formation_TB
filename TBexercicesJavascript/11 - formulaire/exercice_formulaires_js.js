
// Contrôle des champs Société, Personne à contacter et ville qui doivent comporter au moins un caractère entre a et z (insensible à la casse)
document.getElementById("societe").addEventListener("blur", function(e) {
    var regexAuMoinsUnCaractere = /[a-zA-Z]+/;
    var validiteTexte = "";
    if (!regexAuMoinsUnCaractere.test(e.target.value)) {
        validiteTexte = "Vous devez saisir au moins un caractère";
    }
    document.getElementById("aideSociete").textContent = validiteTexte;
});
document.getElementById("personneAContacter").addEventListener("blur", function(e) {
    var regexAuMoinsUnCaractere = /[a-zA-Z]+/;
    var validiteTexte = "";
    if (!regexAuMoinsUnCaractere.test(e.target.value)) {
        validiteTexte = "Vous devez saisir au moins un caractère";
    }
    document.getElementById("aidePersonneAContacter").textContent = validiteTexte;
});
document.getElementById("ville").addEventListener("blur", function(e) {
    var regexAuMoinsUnCaractere = /[a-zA-Z]+/;
    var validiteTexte = "";
    if (!regexAuMoinsUnCaractere.test(e.target.value)) {
        validiteTexte = "Vous devez saisir au moins un caractère";
    }
    document.getElementById("aideVille").textContent = validiteTexte;
});

// Contrôle du courriel en fin de saisie(blur = on sort du focus)
document.getElementById("codePostal").addEventListener("blur", function(e) {
    var regexCodePostal = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
    if (!regexCodePostal.test(e.target.value)) {
        alert("Entrez le code postal sur 5 chiffres s.v.p!")
    }
});

// Affichage de l'environnement technique sélectionné dans la liste déroulante en haut de la zone de texte id = selection 
document.getElementById("environnementTechnique").addEventListener("change", function (e) {
    var selection = document.getElementById("selection");
    selection.value = ("Environnement technique utilisé pour le projet : " + e.target.value);
});
