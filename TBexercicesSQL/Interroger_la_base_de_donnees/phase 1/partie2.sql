USE exemple;

-- Rechercher le prénom des employés et le numéro de la région de leur département. 
SELECT prenom, noregion -- je sélectionne les colonnes prenom de la table employe et noregion de la table dept
FROM employe -- je travaille sur la table employe
JOIN dept -- je la joins à la table dept
	ON employe.nodep = dept.nodept; -- la jointure se fait sur la colonne nodep de la table employe et la colonne nodept de la table dept, qui doivent donc correspondre

-- Rechercher le numéro du département, le nom du département, le nom des employés classés par numéro de département (renommer les tables utilisées). 
SELECT nodept AS 'numero_departement', dept.nom AS 'nom_departement', employe.nom AS 'nom_employe' 
FROM employe
JOIN dept 
	ON employe.nodep = dept.nodept
ORDER BY nodept;

-- Rechercher le nom des employés du département Distribution. 
SELECT employe.nom AS 'nom_employes_departement_distribution' 
FROM employe
JOIN dept 
	ON dept.nodept = employe.nodep
WHERE dept.nom = 'distribution';

-- Rechercher le nom et le salaire des employés qui gagnent plus que leur patron, et le nom et le salaire de leur patron. 
SELECT t1.nom AS nompatron, t1.salaire AS salairepatron, t2.nom AS nomemploye, t2.salaire AS salaireemploye
FROM employe AS t1
JOIN employe AS t2
 ON t1.noemp = t2.nosup
WHERE t1.salaire < t2.salaire;

-- Rechercher le nom et le titre des employés qui ont le même titre que Amartakaldire.
SELECT nom, titre
FROM employe
WHERE titre IN
	(SELECT titre FROM employe WHERE nom = 'amartakaldire');
	
-- Rechercher le nom, le salaire et le numéro de département des employés qui gagnent plus qu'un seul employé du département 31, classés par numéro de département et salaire.
SELECT nom, salaire, nodep
FROM employe
WHERE salaire > any 
	(SELECT salaire FROM employe WHERE nodep = 31)
ORDER BY nodep, salaire;
	
-- Rechercher le nom, le salaire et le numéro de département des employés qui gagnent plus que tous les employés du département 31, classés par numéro de département et salaire.
SELECT nom, salaire, nodep
FROM employe
WHERE salaire > all 
	(SELECT salaire FROM employe WHERE nodep = 31) 
ORDER BY nodep, salaire;

-- Rechercher le nom et le titre des employés du service 31 qui ont un titre que l'on trouve dans le département 32. 
SELECT nom, titre
FROM employe
WHERE nodep = 31 AND titre IN   
	(SELECT titre FROM employe WHERE nodep = 32);
	
-- Rechercher le nom et le titre des employés du service 31 qui ont un titre l'on ne trouve pas dans le département 32. 
SELECT nom, titre
FROM employe
WHERE nodep = 31 AND titre NOT IN 
	(SELECT titre FROM employe WHERE nodep = 32);
	
-- Rechercher le nom, le titre et le salaire des employés qui ont le même  titre et le même salaire que Fairant. 
SELECT nom, titre, salaire
FROM employe
WHERE titre IN 
	(SELECT titre FROM employe WHERE nom = 'fairent')	
AND salaire IN 
	(SELECT salaire FROM employe WHERE nom = 'fairent')
AND nom != 'fairent';

-- Rechercher le numéro de département, le nom du département, le nom des employés, en affichant aussi les départements dans lesquels il n'y a personne, classés par numéro de département.
SELECT dept.nodept AS numero_departement, dept.nom AS nom_departement, employe.nom AS nom_employe
FROM dept
LEFT JOIN employe
	ON employe.nodep = dept.nodept
ORDER BY dept.nodept;

SELECT dept.nodept AS numero_departement, dept.nom AS nom_departement, employe.nom AS nom_employe
FROM employe
RIGHT JOIN dept
	ON employe.nodep = dept.nodept
ORDER BY dept.nodept; 

-- 1. Calculer le nombre d'employés de chaque titre.
SELECT titre, COUNT(noemp)
FROM employe
GROUP BY titre;

-- 2. Calculer la moyenne des salaires et leur somme, par région.
SELECT dept.noregion AS région, AVG(salaire) AS 'salaire moyen de la région', SUM(salaire) AS 'somme des salaires de la région'
FROM employe
JOIN dept 
ON employe.nodep = dept.nodept
GROUP BY dept.noregion;

-- 3. Afficher les numéros des départements ayant au moins 3 employés.
SELECT employe.nodep AS 'numéro du département', COUNT(employe.noemp) AS 'nombre d''employés'
FROM employe
GROUP BY nodep
HAVING COUNT(noemp) >= 3;

-- 4. Afficher les lettres qui sont l'initiale d'au moins trois employés.
SELECT SUBSTRING(nom, 1, 1) AS initiale_Nom,
COUNT(SUBSTRING(nom, 1, 1)) AS occurence_initiale
FROM employe 
GROUP BY initiale_Nom
	HAVING occurence_initiale > 2;

-- 5. Rechercher le salaire maximum et le salaire minimum parmi tous les salariés et l'écart entre les deux.
SELECT MAX(salaire) AS 'salaire maximum', MIN(salaire) AS 'salaire minimum', (MAX(salaire)-MIN(salaire)) AS 'écart entre salaire max et min'
FROM employe;

-- 6. Rechercher le nombre de titres différents.
SELECT COUNT(DISTINCT titre) AS 'nombre de titres différents'
FROM employe;

-- 7. Pour chaque titre, compter le nombre d'employés possédant ce titre.
SELECT DISTINCT titre, COUNT(employe.noemp) AS 'nombre d''employés'
FROM employe
GROUP BY titre;

-- 8. Pour chaque nom de département, afficher le nom du département et le nombre d'employés.
SELECT DISTINCT dept.nom AS 'nom du département', COUNT(employe.noemp) AS 'nombre d''employés'
FROM employe
JOIN dept
ON nodep = nodept
GROUP BY dept.nom;

-- 9. Rechercher les titres et la moyenne des salaires par titre dont la moyenne est supérieure à la moyenne des salaires des Représentants.
SELECT DISTINCT titre, AVG(salaire) AS 'salaire moyen'
FROM employe 
GROUP BY titre
	HAVING AVG(salaire) >= (SELECT AVG(salaire) FROM employe WHERE titre = 'représentant');

-- 10.Rechercher le nombre de salaires renseignés et le nombre de taux de commission renseignés. 
SELECT COUNT(salaire) AS 'nombre de salaires renseignés', COUNT(tauxcom) AS 'nombre de taux de commission renseignés' 
FROM employe
WHERE salaire IS NOT NULL OR tauxcom IS NOT NULL;


