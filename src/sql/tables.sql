CREATE TABLE IF NOT EXISTS Produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    categorie VARCHAR(50) NOT NULL,
    quantite INT NOT NULL,
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