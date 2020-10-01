/* Votre programme doit générer un nombre aléatoire à l'aide de la fonction Math.random.
Ecrivez la fonction verif qui doit vérifier si la saisie de l'utilisateur (dans textBox1) correspond au
nombre magique, elle affiche des informations (trop grand, trop petit dans le label1.
Quand votre programme fonctionne, modifiez-le pour rendre le javascript non intrusif.
*/
var magic = parseInt(Math.random() * 100); // Le programme commence par générer un nombre aléatoire qu'il va stocker dans la variable magic
function verif()
{
    var nombreSaisi = document.getElementById("textBox1").value; // la valeur de la chaine saisie par l'utilisateur dans la balise portant l'id textBox1 est attribuée à une variable nombreSaisi
    if (nombreSaisi > magic) // on compare ensuite les valeurs des variables magic et nombreSaisi
    {
        document.getElementById("label1").textContent="Plus petit!"; //.textcontent me permet de remplacer le texte de ma balise label1
    }
    else if (nombreSaisi < magic) 
    {
        document.getElementById("label1").textContent="Plus grand!";
    }
    else
    {
        document.getElementById("label1").textContent="Bravo! Vous avez trouvé!";
    }
}
document.getElementById("button1").addEventListener("click",verif); // Quand l'évènement click a lieu dans mon document, il exécute la fonction verif 
