# Projet de Commande de Plats en Ligne avec Paiement Stripe

Bienvenue dans le projet de commande de plats en ligne ! Cette application frontend, développée avec **React.js**, permet aux utilisateurs de parcourir une sélection de plats délicieux et de procéder au paiement de manière sécurisée via **Stripe**.

---

## Fonctionnalités Principales

* **Sélection Intuitive de Plats :** Explorez une liste de plats avec des détails et des prix clairs.
* **Intégration Stripe :** Profitez d'un processus de paiement fluide et sécurisé grâce à l'API de paiement de Stripe.
* **Interface Moderne et Épurée :** Le design minimaliste en noir et blanc offre une expérience utilisateur claire et intuitive, avec une mise en page des plats sous forme de cartes élégantes alignées horizontalement.

---

## Démarrage Rapide

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

### Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

* **Node.js** (version 14 ou supérieure recommandée)
* **npm** (normalement inclus avec Node.js)
* Un **serveur backend** fonctionnel pour gérer la création des `PaymentIntents` Stripe. Ce frontend est configuré pour communiquer avec un backend sur `http://localhost:5001/create-payment-intent`. **Assurez-vous que votre serveur backend est bien lancé avant de démarrer l'application frontend.**

### Installation

1.  **Clonez ce dépôt** sur votre machine locale :
    ```bash
    git clone <URL_DU_VOTRE_DEPOT>
    cd <NOM_DU_DOSSIER_DU_PROJET>
    ```
2.  **Installez les dépendances** du projet :
    ```bash
    npm install
    ```
3.  **Configurez votre clé Stripe Publiable :**
    * Ouvrez le fichier `src/App.js`.
    * Remplacez `'pk_test_51Rid6iRptdkkM13Pu4X4LM3PLm0SzOw6noOpkjuSJGWqW25I5tGl7DzoQbcasj5FpSznz9DfQoG7DSPqvocgccrd0099zAef43'` par votre propre **clé publiable Stripe de test**.

---

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.
Ouvrez [http://localhost:3000](http://localhost:3000) pour la visualiser dans votre navigateur.

La page se rechargera lorsque vous apporterez des modifications. Vous pouvez également voir les erreurs de lint dans la console.

### `npm test`

Lance le test runner en mode interactif.
Consultez la section sur [l'exécution des tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.
Il bundle correctement React en mode production et optimise la build pour les meilleures performances.

La build est minifiée et les noms de fichiers incluent les hachages.
Votre application est prête à être déployée !

Consultez la section sur le [déploiement](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`

**Note : cette opération est irréversible. Une fois que vous `eject`-ez, vous ne pouvez plus revenir en arrière !**

Si vous n'êtes pas satisfait des outils de build et des choix de configuration, vous pouvez `eject` à tout moment. Cette commande supprimera la dépendance de build unique de votre projet.

Au lieu de cela, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes, sauf `eject`, fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Vous n'êtes pas obligé d'utiliser `eject`. L'ensemble de fonctionnalités sélectionnées convient aux déploiements de petite et moyenne taille, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt.

---

## En Savoir Plus

Vous pouvez en apprendre davantage dans la [documentation de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez la [documentation de React](https://reactjs.org/).