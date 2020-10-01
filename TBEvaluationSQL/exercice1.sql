DROP DATABASE if EXISTS Evaluation_ex1;
-- si la base de données Evaluation_ex1 existe déjà elle est écrasée et remplacée par la suivante 
CREATE DATABASE Evaluation_ex1;

-- on utilise la base de donnée Evaluation_ex1 pour notre requête 
USE Evaluation_ex1;

-- on crée les tables qui composent notre base de données
-- on définit l'ordre de création de nos tables (on doit d'abord créer nos clés primaires avant de pouvoir les utiliser comme clés étrangères) donc on doit créer les tables client et prdouit en premier, puis la table commande et enfin la table est_compose
-- les clés primaires vont nous permettre d'identifier une ligne de manière unique
-- les clés étrangères vont nous permettre de gérer des relations entre plusieurs tables


CREATE TABLE `Client` (
	cli_num INT AUTO_INCREMENT, /*La commande AUTO_INCREMENT permet de spécifier qu’une colonne numérique avec une PRIMARY KEY sera incrémentée automatiquement à chaque ajout d’enregistrement dans celle-ci.*/
	cli_nom VARCHAR(50),
	cli_adresse VARCHAR(50),
	cli_tel VARCHAR(30),
	PRIMARY KEY (cli_num)
	);
	

				
CREATE TABLE Produit (
	pro_num INT AUTO_INCREMENT,
	pro_libelle VARCHAR(50),
	pro_description VARCHAR(50),
	PRIMARY KEY (pro_num)
	);

CREATE TABLE Commande (
	com_num INT AUTO_INCREMENT,
	cli_num INT NOT NULL, /* on autorise pas la valeur NULL dans le champ cli_num */
	com_date DATETIME DEFAULT CURRENT_TIMESTAMP, /* on définit comme valeur par défaut la date du jour */
	com_obs VARCHAR(50),
	PRIMARY KEY (com_num),
	FOREIGN KEY (cli_num) REFERENCES `Client`(cli_num) /* la FOREIGN KEY cli_num lie la colonne cli_num de la table `Client` à notre table Commande */
	);
	


CREATE TABLE `est_compose` (
	com_num INT,
	pro_num INT,
	est_qte INT NOT NULL,
	PRIMARY KEY (com_num, pro_num),
	FOREIGN KEY (pro_num) REFERENCES Produit(pro_num),
	FOREIGN KEY (com_num) REFERENCES Commande(com_num)
	);


/* on crée un index séparé de notre base de données que l'on nomme `nom_index`: il va faire une copie des données de la colonne cli_nom (du champ nom) de notre table `Client` et nous permettra de faire des requêtes plus rapides sur ces données */
CREATE INDEX `nom_index`
ON `Client`(cli_nom);