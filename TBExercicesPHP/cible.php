<p>Tu t'appelles <?php echo $_POST['prenom']; ?> !</p>
<p> <?php echo $_POST['pseudo']; ?> </p>
<p> Voici le message que tu souhaites nous faire parvenir : <?php echo $_POST['message']; ?> .</p>
<p> Tu vis <?php echo htmlspecialchars($_POST['choix']); ?> </p> <!-- htmlspecialchars permet de sécuriser l'envoi des données texte (on echappe les données texte donc si un utilisateur inclu dans le texte des balises html cela provoquera leur affichage plutôt que leur exécution). -->
<p>
    <?php
        if(!empty($_POST['plat'])) // si au moins un plat est coché
        {
            echo htmlspecialchars('Ce midi tu as déjeuné :<br/>'); // j'affiche
            foreach ($_POST['plat'] as $value) // chacune des value correspondant aux plats cochés
            {
                echo htmlspecialchars($value.', ');
            }
        }
    ?>
</p>
<p>
    <?php
    if ($_POST['huitres'] == 'oui') {
        echo strip_tags('Tu aimes les huîtres!'); // 
    } else  {
        echo htmlspecialchars('Tu n\'aimes pas les huîtres');
    }
    ?>
</p>
