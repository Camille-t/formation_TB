DROP DATABASE if EXISTS Exercice2;
CREATE DATABASE Exercice2;
USE Exercice2;
CREATE TABLE Station (
	sta_id INT NOT NULL AUTO_INCREMENT, 
	sta_nom VARCHAR(50) NOT NULL, 
	PRIMARY KEY (sta_id)
);
CREATE TABLE Hotel (
	hot_id INT AUTO_INCREMENT NOT NULL,
	hot_sta_id INT, 
	hot_nom VARCHAR(50), 
	hot_categorie INT NOT NULL, 
	hot_adresse VARCHAR(50),
	hot_capacite INT NOT NULL, 
	PRIMARY KEY (hot_id),
	FOREIGN KEY (hot_sta_id) REFERENCES Station(sta_id)
);
CREATE TABLE Chambre (
	cha_id INT NOT NULL AUTO_INCREMENT, 
	cha_capacite TINYINT NOT NULL, 
	cha_confort INT NOT NULL, 
	cha_exposition INT, 
	cha_type TINYINT NOT NULL, 
	cha_hot_id INT, 
	PRIMARY KEY (cha_id), 
	FOREIGN KEY (cha_hot_id) REFERENCES Hotel(hot_id)
);
CREATE TABLE `Client` (
	cli_id INT NOT NULL AUTO_INCREMENT, 
	cli_nom VARCHAR(50), 
	cli_prenom VARCHAR(50), 
	cli_adresse VARCHAR(50), 
	PRIMARY KEY (cli_id) 
);
CREATE TABLE Reservation (
	res_id INT NOT NULL AUTO_INCREMENT,
	res_cha_id INT,
	res_cli_id INT,
	res_date_debut DATE,
	res_date_fin DATE,
	res_date TIMESTAMP, 
	res_arrhes DECIMAL(5,2), 
	res_prix DECIMAL(5,2),
	PRIMARY KEY (res_id),
	FOREIGN KEY (res_cha_id) REFERENCES Chambre(cha_id),
	FOREIGN KEY (res_cli_id) REFERENCES `Client`(cli_id)
);

USE Exercice2;

INSERT INTO station(sta_nom)
VALUES ('Chamonix'), ('La Plagne'), ('Val d''Isère');

INSERT INTO hotel(hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_capacite)
VALUES (1, 'Best Western Plus Excelsior Chamonix Hotel-SPA', 4, '251 chemin de Saint Roch 74400 Chamonix-Mont-Blanc', 79), (2, 'Les Glières', 3, 'Planchamp, 73350 Champagny en Vanoise', 18), (3, 'Aigle des Neiges', 4, 'Place de l''Eglise 73150 Val d''Isère', 109);

INSERT INTO chambre(cha_capacite, cha_confort, cha_exposition, cha_type, cha_hot_id)
VALUES (2, 3, 2, 1, 1), (4, 3, 2, 2, 2), (2, 4, 1, 2, 3);