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
  npm install

2. **.env.local**

  Créer un fichier .env.local à la racine du projet avec: 

  DB_HOST="localhost"
  DB_USER="root"
  DB_PASSWORD=your_password
  DB_NAME="examen"
  DB_PORT="3306"

3. **Migrations**

  Pour la V2, utiliser les migrations de Knex.js (garder la bdd examen ou supprimer les tables pour les créer avec la migration, ensuite réinsérer les données dans MySQL Workbench via les INSERT de la V1)
  
  ```bash
  npx knex migrate:latest

  