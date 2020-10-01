-- on utilise la base de données northwind pour nos requêtes
USE northwind;

/* 1 - Liste des contacts français */

SELECT CompanyName AS `Société`, ContactName AS `contact`, ContactTitle AS `Fonction`, Phone AS `Téléphone` /* on sélectionne les colonnes des données que l'on souhaite afficher et on leur donne un alias avec le mot-clé AS */
FROM customers /* on indique avec FROM la table dont proviennent les précédentes colonnes */
WHERE customers.Country = 'France'; /* on ajoute avec WHERE une condition à notre requête de sélection : que la valeur de la colonne country soit égale à la chaîne France */

/* 2 - Produits vendus par le fournisseur « Exotic Liquids » */

SELECT ProductName AS `Produit`, UnitPrice AS `Prix`
FROM products
JOIN suppliers
	ON products.SupplierID = suppliers.SupplierID
WHERE suppliers.CompanyName = 'Exotic Liquids';

/* 3 - Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant */

SELECT suppliers.CompanyName AS `Fournisseur`, COUNT(products.ProductID) AS `Nbre produits` /* la fonction COUNT(ProductID) renvoie le nombre de lignes correspondant à ProductID c-à-d le nombre de produits  */
FROM suppliers 
JOIN products /* ici on joint la table products à la table suppliers */
	ON suppliers.SupplierID = products.SupplierID /* la variable commune entre les deux tables permettant la jointure est SupplierID */
WHERE suppliers.Country = 'France' /* condition */
GROUP BY products.SupplierID /* GROUP BY nous permet de regrouper les lignes qui ont les mêmes valeurs dans des lignes récapitulatives  */
ORDER BY `Nbre produits` DESC; /* on tri nos données (ORDER BY) sur les valeurs de la colonne 'Nbre produits' par ordre décroissant (DESC) */

/* 4 - Liste des clients Français ayant plus de 10 commandes */

SELECT customers.CompanyName AS `Client`, COUNT(orders.OrderID) AS `Nbre Commandes`
FROM customers
JOIN orders 
	ON customers.CustomerID = orders.CustomerID 
WHERE customers.Country = 'France' 
GROUP BY customers.CustomerID
HAVING `Nbre Commandes` > 10; /* ici on utilise HAVING pour notre condition car WHERE ne fonctionne pas avec la fonction d'agrégation GROUP BY */

/* 5 - Liste des clients ayant un chiffre d’affaires > 30.000 */

SELECT customers.CompanyName AS `Client`, SUM(`order details`.Quantity * `order details`.UnitPrice) AS `CA`, customers.Country AS `Pays` /* SUM(Quantity * UnitPrice) permet d'obtenir la somme du total (qtitéXprix) des commandes donc le CA */
FROM customers
JOIN orders
	ON customers.CustomerID = orders.CustomerID /* on doit réaliser deux jointures afin de lier les tables customers et `order details`. On doit "passer" par la table orders */
JOIN `order details` 
	ON `order details`.OrderID = orders.OrderID
GROUP BY customers.CustomerID 
HAVING `CA` > 30000;

/* 6 – Liste des pays dont les clients ont passé commande de produits fournis par « Exotic Liquids */

SELECT DISTINCT orders.ShipCountry AS `Pays` /* SELECT DISTINCT permet d'éviter les doublons */
FROM orders
JOIN `order details`
	ON orders.OrderID = `order details`.OrderID
JOIN products 
	ON `order details`.ProductID = products.ProductID
JOIN suppliers
	ON products.SupplierID = suppliers.SupplierID
WHERE suppliers.CompanyName = 'Exotic Liquids'
ORDER BY `Pays`;

/* 7 – Montant des ventes de 1997 */

SELECT SUM(`order details`.UnitPrice * `order details`.Quantity) AS `Montant Ventes 97`
FROM `order details`
JOIN orders
	ON `order details`.OrderId = orders.OrderID
WHERE YEAR(orders.OrderDate) = '1997'; 

/* 8 – Montant des ventes de 1997 mois par mois */

SELECT MONTH(orders.OrderDate) AS `Mois 97`, SUM(`order details`.UnitPrice * `order details`.Quantity) AS `Montant Ventes` /* la fonction MONTH() permet de renvoyer le mois d'une date */
FROM `order details`
JOIN orders
	ON `order details`.OrderId = orders.OrderID
WHERE YEAR(orders.OrderDate) = '1997'
GROUP BY `Mois 97`
ORDER BY `Mois 97`;

/* 9 – Depuis quelle date le client « Du monde entier » n’a plus commandé */

SELECT orders.OrderDate AS `Date de dernière commande`
FROM orders
JOIN customers
	ON orders.CustomerID = customers.CustomerID
WHERE customers.CompanyName = 'Du monde entier'
ORDER BY `Date de dernière commande` DESC
LIMIT 1; /* on limite les résultats affichés à un résultat donc comme on a classé les dates de commande par ordre décroissant, c'est la date de commande la plus récente qui sera affichée */

/* 10 – Quel est le délai moyen de livraison en jours */

SELECT TRUNCATE(AVG(DATEDIFF(ShippedDate,OrderDate)),0) AS `délai moyen de livraison en jours` /* pour calculer le délai de livraison d'une commande on va utiliser la fonction DATEDIFF() qui va renvoyer le nombre de jours entre deux dates, ici la date de livraison et la date de commande. On utilise également la fonction AVG() pour calculer la valeur moyenne. ENfin, afin de renvoyer un résultat entier on va utiliser la fonction TRUNCATE() qui va limiter à 0 le nombre de chiffres après la virgule d'une donnée de type FLOAT*/
FROM orders;
