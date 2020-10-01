<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Les fonctions PHP</title>
</head>

<body>
<?php

echo '<p><u>Exercice : Ecrivez la fonction calculator() traitant les opérations d\'addition, de soustraction, de multiplication et de division.</u></p></br>';

require('lib.inc.php'); // ici on indique le lien vers notre fonction à travers la librairie que nous avons créée.

$nb1 = 10;
$nb2 = 20;
$retour = calculator($nb1, $nb2); // on appelle notre fonction calculator avec les paramètres $nb1 et $nb2 à travers le tableau $retour qui stocke les opérations de notre fonction

echo 'L\'addition de '.$nb1.' et de '.$nb2.' est égale à : '.$retour[0].'<br>'; // $retour[0] correspond à l'opération d'addition
echo 'La soustraction de '.$nb1.' et de '.$nb2.' est égale à : '.$retour[1].'<br>';
echo 'La multiplication de '.$nb1.' et de '.$nb2.' est égale à : '.$retour[2].'<br>';
echo 'La division de '.$nb1.' et de '.$nb2.' est égale à : '.$retour[3].'<br>';

?>
</body>

</html>