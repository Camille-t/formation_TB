-- 1. Quelles sont les commandes du fournisseur 09120 ?
SELECT numcom AS 'numéro de commande du fournisseur 09120'
FROM entcom
WHERE numfou = 9120;

-- 2. Afficher le code des fournisseurs pour lesquels des commandes ont été passées.
SELECT DISTINCT numfou AS 'code fournisseur'
FROM entcom
WHERE numcom IS NOT NULL; 

-- 3. Afficher le nombre de commandes fournisseurs passées, et le nombre de fournisseur concernés.
SELECT COUNT(DISTINCT numcom) AS 'nombre de commandes fournisseurs passées', COUNT(DISTINCT numfou) AS 'nombre de fournisseurs concernés'
FROM entcom;

-- 4. Editer les produits ayant un stock inférieur ou égal au stock d'alerte et dont la quantité annuelle est inférieur est inférieure à 1000 (informations à fournir : n° produit, libellé produit, stock, stock actuel d'alerte, quantité annuelle)
SELECT codart AS 'n° produit', libart AS 'libellé produit', stkphy AS 'stock', stkale AS 'stock actuel d''alerte', qteann AS 'quantité annuelle'
FROM produit
WHERE stkphy < stkale AND qteann < 1000;

-- 5. Quels sont les fournisseurs situés dans les départements 75 78 92 77 ? L’affichage (département, nom fournisseur) sera effectué par département décroissant, puis par ordre alphabétique
SELECT SUBSTRING(posfou, 1, 2) AS 'département', nomfou AS 'nom fournisseur'
FROM fournis
WHERE SUBSTRING(posfou, 1, 2) = '75' OR SUBSTRING(posfou, 1, 2) = '78' OR SUBSTRING(posfou, 1, 2) = '92' OR SUBSTRING(posfou, 1, 2) = '77'
ORDER BY posfou DESC, nomfou;

-- 6. Quelles sont les commandes passées au mois de mars et avril ?
SELECT numcom AS 'numéro de commande', DATE_FORMAT(datcom, '%M') AS 'mois où la commande a été passée'
FROM entcom
WHERE DATE_FORMAT(datcom, '%M') = 'March' OR DATE_FORMAT(datcom, '%M') = 'April';

-- 7. Quelles sont les commandes du jour qui ont des observations particulières ? (Affichage numéro de commande, date de commande)
SELECT numcom AS 'numéro de commande', DATE(datcom) AS 'date de commande'
FROM entcom 
WHERE DATE(datcom) = CURDATE() AND obscom IS NOT NULL;

-- 8. Lister le total de chaque commande par total décroissant (Affichage numéro de commande et total)
SELECT numcom AS 'numéro de commande', SUM(priuni * qteliv) AS 'total commande' 
FROM ligcom
GROUP BY numcom
ORDER BY SUM(priuni * qteliv) DESC; 

-- 9. Lister les commandes dont le total est supérieur à 10 000€ ; on exclura dans le calcul du total les articles commandés en quantité supérieure ou égale à 1000. (Affichage numéro de commande et total)
SELECT numcom AS 'numéro de commande', SUM(priuni * qteliv) AS 'total commande' 
FROM ligcom
WHERE qtecde >= 1000 
GROUP BY numcom
HAVING SUM(priuni * qteliv) > 10000;

-- 10.Lister les commandes par nom fournisseur (Afficher le nom du fournisseur, le numéro de commande et la date)
SELECT fournis.nomfou AS 'nom fournisseur', entcom.numcom AS 'numéro de commande', entcom.datcom AS 'date'
FROM fournis
JOIN entcom
	ON entcom.numfou = fournis.numfou;

-- 11.Sortir les produits des commandes ayant le mot "urgent' en observation? (Afficher le numéro de commande, le nom du fournisseur, le libellé du produit et le sous total = quantité commandée * Prix unitaire) 
SELECT ligcom.numcom AS 'numéro de commande', fournis.nomfou AS 'nom du fournisseur', obscom AS 'observation', libart AS 'libellé du produit', (qtecde * priuni) AS 'sous total'
FROM entcom
JOIN fournis
	ON fournis.numfou = entcom.numfou
JOIN ligcom
	ON entcom.numcom = ligcom.numcom
JOIN produit
	ON ligcom.codart = produit.codart
HAVING obscom LIKE '%urgent%';

-- 12.Coder de 2 manières différentes la requête suivante : Lister le nom des fournisseurs susceptibles de livrer au moins un article
SELECT DISTINCT fournis.nomfou AS 'nom du fournisseur'
FROM fournis
JOIN entcom 
	ON fournis.numfou = entcom.numfou
JOIN ligcom
	ON ligcom.numcom = entcom.numcom
WHERE ligcom.qteliv > 0;
-- HURRYTAPE numfou=9180 n'a pas livré la commande numcom=70629 comportant les articles codart=B001 et codart=B002.
-- DISCOBOL numfou=9120 n'a pas livré la commande numcom=70020 comportant les articles codart=B001 et codart=B002 mais elle a livré la commande numcom=70300 comportant l'article codart=I100.
-- MEDICIS numfou=8700 a livré la commande numcom=70250(pour laquelle il manque 3000 unités de codart=P230)
-- GROBRIGAN numfou=120 a livré toutes ses commandes : numcom=70625(OK), numcom=70210(OK), numcom=70010(pour laquelle il manque 400 unités de codart=P240)
-- ECLIPSE numfou=540 a livré toutes ses commandes :  numcom=70011(OK) numcom=70620(OK)
-- DEPANPAP numfou=9150 a livré sa commande numcom=70025

-- 13.Coder de 2 manières différentes la requête suivante Lister les commandes (Numéro et date) dont le fournisseur est celui de la commande 70210 

SELECT numcom AS 'numéro de commande', datcom AS 'date de commande'
FROM entcom
WHERE numfou = (SELECT numfou FROM entcom WHERE numcom= 70210);

SELECT numcom AS 'numéro de commande', datcom AS 'date de commande'
FROM entcom
WHERE numfou = 120;

-- 14.Dans les articles susceptibles d’être vendus, lister les articles moins chers (basés sur Prix1) que le moins cher des rubans (article dont le premier caractère commence par R). On affichera le libellé de l’article et prix1
SELECT DISTINCT produit.libart AS 'Libellé Article', vente.prix1 AS 'Prix1' 
FROM vente 
JOIN produit 
	ON produit.codart = vente.codart
WHERE vente.prix1 < ALL (SELECT vente.prix1 FROM vente WHERE vente.codart LIKE 'r%');

-- 15.Editer la liste des fournisseurs susceptibles de livrer les produits dont le stock est inférieur ou égal à 150 % du stock d'alerte. La liste est triée par produit puis fournisseur
SELECT DISTINCT fournis.nomfou AS 'Fournisseur', produit.libart AS 'Produit'
FROM produit 
JOIN vente 
	ON produit.codart = vente.codart
JOIN fournis 
	ON vente.numfou = fournis.numfou
WHERE produit.stkphy <= (1.5 * produit.stkale)
ORDER BY produit.libart, fournis.nomfou;

-- 16.Éditer la liste des fournisseurs susceptibles de livrer les produit dont le stock est inférieur ou égal à 150 % du stock d'alerte et un délai de livraison d'au plus 30 jours. La liste est triée par fournisseur puis produit
SELECT DISTINCT fournis.nomfou AS 'Fournisseur', produit.libart AS 'Produit'
FROM fournis 
JOIN vente 
	ON vente.numfou = fournis.numfou
JOIN produit 
	ON produit.codart = vente.codart
WHERE produit.stkphy <= (1.5 * produit.stkale)
AND vente.delliv <= 30
ORDER BY fournis.nomfou, produit.libart;

-- 17.Avec le même type de sélection que ci-dessus, sortir un total des stocks par fournisseur trié par total décroissant


-- 18.En fin d'année, sortir la liste des produits dont la quantité réellement commandée dépasse 90% de la quantité annuelle prévue.
SELECT produit.libart AS 'produit'
FROM produit 
JOIN ligcom 
	ON produit.codart = ligcom.codart
WHERE (produit.qteann * 0.9) < ligcom.qtecde
GROUP BY ligcom.codart;

-- 19.Calculer le chiffre d'affaire par fournisseur pour l'année 93 sachant que les prix indiqués sont hors taxes et que le taux de TVA est 20%.
SELECT fournis.nomfou AS 'fournisseur', SUM(ligcom.qteliv * ligcom.priuni) * 1.2 AS 'Chiffre d''affaire'
FROM fournis 
JOIN vente 
	ON vente.numfou = fournis.numfou
JOIN ligcom 
	ON ligcom.codart = vente.codart
GROUP BY fournis.nomfou;