<?php
function calculator($nb1, $nb2) // on créé une fonction calculator() 
{
    $addition = $nb1 + $nb2; // on stocke dans une variable $addition l'opération à exécuter
    $soustraction = $nb1 - $nb2;
    $multiplication = $nb1 * $nb2;
    $division = $nb1 / $nb2;
    $retour = array($addition, $soustraction, $multiplication, $division); // on stocke nos 4 variables dans un tableau lui-même stocké dans une variable $retour
    return $retour; // on return notre variable $retour (qui est donc un tableau)   
}

?>