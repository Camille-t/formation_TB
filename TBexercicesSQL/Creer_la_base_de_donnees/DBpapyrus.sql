DROP DATABASE if EXISTS Papyrus;

CREATE DATABASE Papyrus;

USE Papyrus;

CREATE TABLE PRODUIT (
	CODART CHAR(4) NOT NULL, -- contrairement à un VARCHAR, un CHAR a une taille fixe (si on essaye d'y entrer une chaine dont le nombre de caractère n'est pas exacte (plus long ou plus court) la donnée ne sera pas prise en compte
	LIBART VARCHAR(30) NOT NULL,
	STKALE INT NOT NULL,
	STKPHY INT NOT NULL,
	QTEANN INT NOT NULL,
	UNIMES CHAR(5) NOT NULL,
PRIMARY KEY (CODART)
);

CREATE TABLE FOURNIS (
	NUMFOU SMALLINT NOT NULL,
	NOMFOU VARCHAR(25) NOT NULL,
	RUEFOU VARCHAR(50) NOT NULL,
	POSFOU CHAR(5) NOT NULL, -- le code postal est constitué de 5 chiffres
	VILFOU VARCHAR(30) NOT NULL,
	CONFOU VARCHAR(15) NOT NULL,
	SATISF TINYINT(2) CHECK (SATISF BETWEEN 1 AND 10), -- l'indice de satisfaction est compris dans une échelle de 1 à 10 donc 2 chiffres
PRIMARY KEY (NUMFOU)
);

CREATE TABLE ENTCOM (
	NUMCOM INT(10) AUTO_INCREMENT, -- le numéro de commande est un champ compteur auto incrémenté de 1
	OBSCOM VARCHAR(50),
	DATCOM DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- la date de commande est par défaut la date du jour
	NUMFOU SMALLINT,
PRIMARY KEY (NUMCOM),
FOREIGN KEY (NUMFOU) REFERENCES FOURNIS (NUMFOU),
INDEX ind_numfou (NUMFOU) -- on créé un index sur la colonne NUMFOU de la table ENTCOM
);

CREATE TABLE LIGCOM (
	NUMCOM INT NOT NULL,
	NUMLIG TINYINT NOT NULL,
	CODART CHAR(4) NOT NULL,
	QTECDE INT NOT NULL,
	PRIUNI DECIMAL(9,2) NOT NULL,
	QTELIV INT,
	DERLIV DATETIME NOT NULL,
PRIMARY KEY (NUMLIG, NUMCOM),
FOREIGN KEY (NUMCOM) REFERENCES ENTCOM (NUMCOM),
FOREIGN KEY (CODART) REFERENCES PRODUIT (CODART)
);

CREATE TABLE VENTE (
	CODART CHAR(4) NOT NULL,
	NUMFOU SMALLINT NOT NULL,
	DELLIV SMALLINT NOT NULL,
	QTE1 INT NOT NULL,
	PRIX1 DECIMAL(9,2) NOT NULL,
	QTE2 INT,
	PRIX2 DECIMAL(9,2),
	QTE3 INT,
	PRIX3 DECIMAL(9,2),
PRIMARY KEY (NUMFOU, CODART),
FOREIGN KEY (NUMFOU) REFERENCES FOURNIS (NUMFOU),
FOREIGN KEY (CODART) REFERENCES produit (CODART)
);
