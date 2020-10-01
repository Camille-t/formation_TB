<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Les tableaux PHP</title>
</head>

<body>

    <?php
    $a = array(
        "19001" => array("Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "", "", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Validation", "Validation"),
        "19002" => array("Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Validation", ""),
        "19003" => array("", "", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Centre", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "Stage", "", "", "Validation")
    );

    echo '<p><u>Exercice 0.</u></p>';
    echo '<p><u>Testez les différents exemples du cours, à l\'aide de la fonction var_dump().</u>';

    // var_dump() affiche les informations structurées d'une variable, y compris son type et sa valeur. Les tableaux et les objets sont explorés récursivement, avec des indentations, pour mettre en valeur leur structure.

    echo var_dump($a). '<br>';    

    echo '<p><u>Exercice 1.</u></p>';
    echo '<p><u>Quelle semaine a lieu la validation du groupe 19002?</u></p>';

    echo 'La validation du groupe 19002 a lieu en semaine n°'. array_search("Validation",$a["19002"]).'.'; // la fonction array_search() permet de rechercher une valeur dans un tableau et renvoit sa clé

    echo '<p><u>Exercice 2.</u></p>';
    echo '<p><u>Trouver la position de la dernière occurence de <em>Stage</em> pour le groupe 19001.</u></p>';

    $reversed = array_reverse($a["19001"], true); // array_reverse() retourne le tableau dans le sens inverse (ainsi la dernière occurence de "Stage" devient la première occcurence)

    echo 'La dernière occurence de <em>Stage</em> pour le groupe 19001 se trouve en position : '.array_search("Stage",$reversed).'.'; // on utilise array_search() sur notre tableau qiu contient les valeurs en sens inverse 

    echo '<p><u>Exercice 3.</u></p>';
    echo '<p><u>Extraire, dans un nouveau tableau, les codes des groupes.</u></p>';
    
    $b = array_keys($a); // la fonction array_keys() va extraire les clés d'un tableau associatif. Ici on les place dans un nouvel array $b
    print_r($b);

    ?>

</body>

</html>