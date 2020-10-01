DROP DATABASE IF EXISTS Exercice1;
CREATE DATABASE Exercice1;
USE Exercice1;

CREATE TABLE IF NOT EXISTS Personne (
	per_num INT AUTO_INCREMENT,
	per_nom VARCHAR(50),
	per_prenom VARCHAR(30),
	per_adresse VARCHAR(100),
	per_ville VARCHAR(80),
	PRIMARY KEY (per_num)
	);

CREATE TABLE IF NOT EXISTS Groupe (
	gro_num INT AUTO_INCREMENT,
	gro_libelle VARCHAR(50),
	PRIMARY KEY (gro_num)
	);


CREATE TABLE IF NOT EXISTS Appartient (
	per_num INT,
	gro_num INT,
	FOREIGN KEY (per_num) REFERENCES Personne (per_num),
	FOREIGN KEY (gro_num) REFERENCES Groupe (gro_num)
	);
