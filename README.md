# Projet Next.js

Ce projet utilise [Next.js](https://nextjs.org/), un framework React pour créer des applications web modernes. Ce README vous guidera à travers les étapes nécessaires pour initialiser le projet après avoir cloné le dépôt.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12.0 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Étapes pour démarrer

1. **Clonez le dépôt :**

  Clonez le dépôt dans votre répertoire local :

  ```bash
  git clone https://github.com/HugoWeh/examen-bdd.git
  cd votre-repository

2. **.env.local**

  Créer un fichier .env.local à la racine du projet avec: 

  DB_HOST="localhost"
  DB_USER="root"
  DB_PASSWORD=your_password
  DB_NAME="examen"
  DB_PORT="3306"

3. **MySQL Workbench**

  Pour la V1, ajouter le code SQL directement dans MySQL Workbench

  ```SQL
  CREATE DATABASE examen;

  CREATE TABLE IF NOT EXISTS Produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    categorie VARCHAR(50) NOT NULL,
    quantite INT NOT NULL,
	total_ventes INT,
    prix_unitaire DECIMAL (10, 2) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Clients (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(100) NOT NULL,
      prenom VARCHAR(100) NOT NULL,
      adresse TEXT NOT NULL,
      telephone VARCHAR(100) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Commandes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      id_client INT NOT NULL,
      date DATE NOT NULL,
      FOREIGN KEY (id_client) REFERENCES Clients(id)
  );

  CREATE TABLE IF NOT EXISTS Fournisseurs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(100) NOT NULL,
      adresse TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Lignes_Commande (
      id INT AUTO_INCREMENT PRIMARY KEY,
      id_commande INT NOT NULL,
      id_produit INT NOT NULL,
      quantite INT NOT NULL,
      FOREIGN KEY (id_commande) REFERENCES Commandes(id),
      FOREIGN KEY (id_produit) REFERENCES Produits(id)
  );

  CREATE TABLE IF NOT EXISTS Produit_Fournisseur (
      id_produit INT NOT NULL,
      id_fournisseur INT NOT NULL,
      FOREIGN KEY (id_produit) REFERENCES Produits(id),
      FOREIGN KEY (id_fournisseur) REFERENCES Fournisseurs(id)
  );

  INSERT INTO Produits (nom, description, categorie, quantite, prix_unitaire, total_ventes) VALUES
  ('Maquette Avion Boeing 747', 'Maquette d’avion en papier à assembler, modèle Boeing 747', 'Maquettes', 200, 12.99, 0),
  ('Maquette Avion F-22 Raptor', 'Maquette d’avion de chasse F-22 Raptor en papier', 'Maquettes', 150, 9.99, 0),
  ('Maquette Avion Concorde', 'Maquette en papier du Concorde à assembler', 'Maquettes', 100, 14.99, 0),
  ('Maquette Avion Spitfire', 'Maquette d’avion de la Seconde Guerre mondiale, Spitfire', 'Maquettes', 80, 11.99, 0),
  ('Maquette Avion Airbus A380', 'Maquette en papier de l’Airbus A380', 'Maquettes', 120, 15.99, 0),
  ('Kit de colle pour maquettes', 'Colle spéciale pour assembler les maquettes d’avion en papier', 'Accessoires', 500, 3.99, 0),
  ('Kit de peinture pour maquettes', 'Kit de peinture pour personnaliser les maquettes d’avion en papier', 'Accessoires', 200, 7.99, 0),
  ('Papiers spéciaux pour maquettes', 'Papier de haute qualité pour la fabrication de maquettes d’avion', 'Accessoires', 300, 4.99, 0),
  ('Maquette Avion P-51 Mustang', 'Maquette en papier de l’avion de chasse P-51 Mustang', 'Maquettes', 100, 10.99, 0),
  ('Maquette Avion DC-3', 'Maquette en papier de l’avion légendaire DC-3', 'Maquettes', 75, 13.99, 0),
  ('Maquette Avion Mirage 2000', 'Maquette en papier de l’avion Mirage 2000', 'Maquettes', 150, 9.99, 0),
  ('Maquette Avion Airbus A320', 'Maquette d’avion en papier de l’Airbus A320', 'Maquettes', 180, 12.49, 0),
  ('Maquette Avion Boeing 737', 'Maquette d’avion Boeing 737 à assembler', 'Maquettes', 250, 11.49, 0),
  ('Accessoires de finition pour maquettes', 'Accessoires pour finaliser les détails des maquettes d’avion en papier', 'Accessoires', 100, 6.99, 0),
  ('Maquette Avion B-17 Flying Fortress', 'Maquette d’avion historique B-17 Flying Fortress', 'Maquettes', 50, 15.99, 0),
  ('Maquette Avion A-10 Thunderbolt', 'Maquette de l’avion A-10 Thunderbolt en papier', 'Maquettes', 120, 10.49, 0),
  ('Maquette Avion F-16 Fighting Falcon', 'Maquette en papier de l’avion de chasse F-16', 'Maquettes', 90, 8.99, 0),
  ('Maquette Avion Lockheed Martin F-35', 'Maquette d’avion en papier F-35', 'Maquettes', 60, 14.99, 0),
  ('Maquette Avion Vulcan', 'Maquette en papier de l’avion de bombardement Vulcan', 'Maquettes', 40, 16.99, 0),
  ('Maquette Avion P-40 Warhawk', 'Maquette en papier de l’avion P-40 Warhawk', 'Maquettes', 70, 9.49, 0);

  INSERT INTO Clients (nom, prenom, adresse, telephone) VALUES
  ('Dupont', 'Jean', '12 Rue de la République, Paris', '0123456789'),
  ('Martin', 'Lucie', '56 Boulevard Saint-Germain, Lyon', '0987654321'),
  ('Lemoine', 'Pierre', '34 Avenue des Champs-Élysées, Paris', '0145678901'),
  ('Leclerc', 'Emilie', '78 Rue de la Liberté, Bordeaux', '0654321879'),
  ('Dubois', 'Thierry', '23 Rue Victor Hugo, Toulouse', '0612345678'),
  ('Moreau', 'Sophie', '12 Place de la Concorde, Nantes', '0789654321'),
  ('Rousseau', 'Nicolas', '8 Rue des Fleurs, Lille', '0234567890'),
  ('Perrot', 'Claire', '34 Rue du Général Leclerc, Marseille', '0321654987'),
  ('Lemoine', 'Pierre', '5 Rue Jean Jaurès, Paris', '0723456789'),
  ('Dufresne', 'Michel', '14 Rue de Paris, Lille', '0598765432'),
  ('Lemoine', 'Amandine', '16 Rue des Roses, Rennes', '0702345678'),
  ('Blanc', 'Julien', '25 Avenue de la Liberté, Lyon', '0534589678'),
  ('Gauthier', 'Marie', '36 Boulevard Montmartre, Paris', '0712345689'),
  ('Vasseur', 'Aurélie', '11 Rue de l’Église, Toulouse', '0798765430'),
  ('Lemoine', 'Henri', '3 Rue du Général de Gaulle, Bordeaux', '0298765431'),
  ('Lemoine', 'Catherine', '1 Rue de la Paix, Paris', '0465789210'),
  ('Durand', 'Julie', '9 Avenue des Champs, Nantes', '0654789234'),
  ('Grosjean', 'Michel', '42 Rue de la Mer, Marseille', '0586347921'),
  ('Martin', 'Antoine', '8 Rue de l’Industrie, Lyon', '0472893765'),
  ('Boucher', 'Pierre', '7 Rue des Négociants, Bordeaux', '0772893754'),
  ('Michel', 'Thierry', '18 Rue de la Gare, Paris', '0654321098'),
  ('Henry', 'Sébastien', '26 Rue des Artisans, Toulouse', '0638472901'),
  ('Garcia', 'Paola', '32 Avenue de l’Océan, Marseille', '0564789201'),
  ('Lemoine', 'Bernard', '44 Rue de l’Académie, Nantes', '0245786345'),
  ('Muller', 'Alice', '3 Rue des Sables, Paris', '0789346541'),
  ('Renaud', 'Julien', '13 Boulevard de l’Indépendance, Lyon', '0245789812'),
  ('Masson', 'Lucas', '24 Rue des Écoles, Bordeaux', '0556789821'),
  ('Sanchez', 'Isabelle', '56 Rue de la Montagne, Rennes', '0723456879'),
  ('Berger', 'Chloé', '12 Rue de la Lune, Toulouse', '0978327645');

  INSERT INTO Commandes (id_client, date) VALUES
  (1, '2025-01-01'),
  (2, '2025-01-02'),
  (3, '2025-01-03'),
  (4, '2025-01-04'),
  (5, '2025-01-05'),
  (6, '2025-01-06'),
  (7, '2025-01-07'),
  (8, '2025-01-08'),
  (9, '2025-01-09'),
  (11, '2025-01-10'),
  (11, '2025-01-11'),
  (11, '2025-01-12'),
  (11, '2025-01-13'),
  (11, '2025-01-14'),
  (11, '2025-01-15'),
  (11, '2025-01-16'),
  (17, '2025-01-17'),
  (18, '2025-01-18'),
  (19, '2025-01-19'),
  (20, '2025-01-20'),
  (21, '2025-01-21'),
  (22, '2025-01-22'),
  (23, '2025-01-23'),
  (24, '2025-01-24'),
  (25, '2025-01-25'),
  (26, '2025-01-26'),
  (27, '2025-01-27'),
  (28, '2025-01-28'),
  (29, '2025-01-29');

  INSERT INTO Fournisseurs (nom, adresse) VALUES
  ('FournituresTech', '5 Rue de la Technologie, Paris'),
  ('TechSupply', '12 Boulevard de la Nouvelle-Technologie, Lyon'),
  ('BureauPlus', '9 Rue des Entreprises, Marseille'),
  ('ElectroPro', '15 Avenue des Services, Bordeaux'),
  ('GadgetExpress', '24 Rue de l’Innovation, Toulouse'),
  ('MobilierSolutions', '30 Rue des Commerces, Nantes'),
  ('PCWorld', '50 Avenue du Hardware, Paris'),
  ('AudioMarket', '33 Rue du Son, Lyon'),
  ('ProElectronics', '18 Rue des Gadgets, Marseille'),
  ('EcomTech', '11 Rue de l’Équipement, Bordeaux'),
  ('SystèmeTech', '7 Rue du Digital, Paris'),
  ('Innova', '21 Avenue des Futurs, Lyon'),
  ('TechIn', '4 Rue de la Connectivité, Toulouse'),
  ('ElectroStore', '27 Boulevard des Idées, Nantes'),
  ('FutureTech', '6 Rue des Innovations, Bordeaux'),
  ('CyberWorld', '28 Avenue de la Technologie, Marseille'),
  ('CompletInformatique', '35 Rue de la Numérique, Paris'),
  ('BureauEquip', '19 Rue du Bureau, Lyon'),
  ('DisqueStore', '22 Rue des Disques, Toulouse'),
  ('FixTech', '13 Rue de la Réparation, Paris'),
  ('MécaniqueTech', '26 Avenue du Mécanique, Lyon'),
  ('FlashSupply', '3 Rue du Flash, Bordeaux'),
  ('GlobalTech', '8 Rue de la Robotique, Paris'),
  ('ProFuture', '20 Avenue des Équipements, Marseille'),
  ('AutoTech', '17 Rue de l’Automatisation, Lyon'),
  ('PixelTech', '29 Rue des Pixels, Toulouse'),
  ('TechnoExpert', '25 Rue de l’Expertise, Nantes'),
  ('NextInformatique', '2 Rue de la Connectivité, Paris'),
  ('BureauXpert', '14 Avenue du Bureau, Lyon');

  INSERT INTO Lignes_Commande (id_commande, id_produit, quantite) VALUES
  (1, 1, 2),
  (1, 2, 1),
  (2, 3, 3),
  (2, 4, 2),
  (3, 5, 1),
  (3, 6, 4),
  (4, 7, 1),
  (4, 8, 2),
  (5, 9, 2),
  (5, 10, 5),
  (6, 11, 2),
  (6, 12, 1),
  (7, 13, 3),
  (7, 14, 2),
  (8, 15, 1),
  (8, 16, 4),
  (9, 17, 5),
  (9, 18, 2),
  (10, 19, 3);

  INSERT INTO Produit_Fournisseur (id_produit, id_fournisseur) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10),
  (11, 11),
  (12, 12),
  (13, 13),
  (14, 14),
  (15, 15),
  (16, 16),
  (17, 17),
  (18, 18),
  (19, 19);
```