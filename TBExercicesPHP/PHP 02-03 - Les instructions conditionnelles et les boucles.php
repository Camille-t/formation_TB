<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible">
    <title>Les Instructions conditionnelles et les Boucles en PHP</title>
</head>

<body>
    <?php

    echo '<p>Exercice 1</p>';
    echo '<p>Ecrire un script PHP qui affiche tous les nombres impairs entre 0 et 150, par ordre croissant : 1 3 5 7...</p>';

    $i = 0;
    while (++$i <= 150) {
        if ($i % 2 != 0) {
            echo $i . ' ';
        }
    }

    echo '<p>Exercice 2</p>';
    echo '<p>Écrire un programme qui écrit 500 fois la phrase Je dois faire des sauvegardes régulières de mes fichiers.</p>';

    for ($i = 1; $i <= 500; $i++) {
        echo $i . '. Je dois faire des sauvegardes régulières de mes fichiers<br>';
    }

    echo '<p>Exercice 3</p>';
    echo '<p>Ecrire un script qui affiche la table de multiplication totale de {1,...,12} par {1,...,12}</p>';

    echo '<table>'; // pour la mise en forme on utilise les balises <table>
    echo '<tr>';
    $i = 0;
    echo '<td></td>'; 
    for ($i = 0; $i <= 12; $i++) {
        echo '<td><b>' . $i . '</b></td>'; // on affiche la 1ère ligne de notre tableau en utilisant une boucle for 
    }
    echo '</tr>';

    $j = 0;
    for ($j = 0; $j <= 12; $j++) { 

        echo '<tr>'; 
        echo '<td><b>' . $j . '</b></td>'; // on affiche la colonne de gauche


        for ($i = 0; $i <= 12; $i++) { // on utilise une boucle dans une boucle pour obtenir le resultat de notre variable multiplication
            $multiplication = $i * $j;
            echo '<td>' . $multiplication . '</td>';
        }
        echo '</tr>';
    }

    echo '</tbody>';
    echo '</table>';

    ?>

</body>

</html>