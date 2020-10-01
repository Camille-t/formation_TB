<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Les Bases du langage PHP</title>
</head>
<body>
<p>L'adresse IP du serveur est 
    <?php

        echo $_SERVER["SERVER_ADDR"] . "<br>"; // affiche l'adresse IP du Serveur
    
    ?>  
</p>
    <?php
        echo"L'adresse IP du client est " . $_SERVER["REMOTE_ADDR"]; // affiche l'adresse IP du Client
    ?>
    
</body>
</html>