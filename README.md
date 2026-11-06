# AutoPark — Gestion de parc automobile

AutoPark est une application web pédagogique conçue pour **Atlas Auto**, une agence fictive de location de voitures. Elle permet de gérer les véhicules, leurs tarifs et leur disponibilité. Une page **Ma Location**, en cours de développement, complète le projet.

L’application utilise **HTML5, CSS3, Tailwind CSS et JavaScript Vanilla ES6+**, sans backend ni base de données. Les véhicules sont sauvegardés dans le navigateur avec **localStorage**.

## Liens du projet

- **GitHub** : [younes-ettaya/AutoPark](https://github.com/younes-ettaya/AutoPark)
- **GitHub Pages** : [Ouvrir AutoPark](https://younes-ettaya.github.io/AutoPark/) — disponibilité à vérifier.
- **Tableau Jira** : [Suivre les tâches AutoPark](https://younesettaya77-1793028290335.atlassian.net/jira/software/projects/AUTO/boards/4?filter=&groupBy=none)

## Pages et fonctionnalités

| Page | Fonctionnalités |
| --- | --- |
| `voitures.html` | Affichage, ajout, modification avec annulation et suppression avec confirmation. Recherche par marque, modèle ou immatriculation, filtres par catégorie et statut, tri des prix et sauvegarde locale. |
| `index.html` | Interface du dashboard. Les compteurs Total, Disponibles, Louées et En maintenance restent à connecter aux données. |
| `utilisateur.html` | Parcours « Ma Location » avec véhicules, dates, récupération et options. Navigation entre trois étapes présente, récapitulatif dynamique à terminer. |

Le formulaire de gestion contrôle les champs vides et le format d’immatriculation `AUTO-001`. Des messages d’erreur apparaissent près des champs. Les statuts sont distingués par des badges.

### Ma Location

Le parcours prévoit le choix d’un véhicule et de ses dates, puis du mode de récupération et des options.

| Service | Tarif prévu |
| --- | --- |
| Récupération à l’agence | Gratuite |
| Récupération à l’aéroport | 150 DH |
| Livraison à une adresse | 100 DH |
| Siège bébé | 30 DH / jour |
| Conducteur supplémentaire | 200 DH / jour |

Les frais de récupération sont prévus une seule fois. La sélection, le calcul du total et la confirmation de la demande restent à relier au formulaire. Les montants du récapitulatif sont actuellement des exemples.

## Structure du projet

| Fichier | Rôle |
| --- | --- |
| `index.html` | Dashboard |
| `voitures.html` | Gestion du parc |
| `utilisateur.html` | Interface Ma Location |
| `css/style.css` | Styles et responsive |
| `js/data.js` | Véhicules initiaux |
| `js/voitures.js` | Gestion, validation, recherche, filtres, tri et stockage |
| `js/utilisateur.js` | Configuration et navigation du parcours de location |
| `tailwind.config.js` | Configuration Tailwind présente dans le dépôt |

## Données et sauvegarde

Chaque véhicule possède un `id`, une `marque`, un `modele`, une `immatriculation`, une `categorie`, un `prixJour` et un `statut`.

- **Catégories** : Citadine, Berline et SUV.
- **Statuts** : Disponible, Louée et En maintenance, gérés manuellement.
- **Stockage** : clé `data` de localStorage, avec `JSON.stringify()` et `JSON.parse()`.

Les données initiales sont utilisées en l’absence de sauvegarde. Les modifications du parc sont conservées après rechargement, uniquement dans le même navigateur et pour la même adresse du site. Effacer les données du site supprime cette sauvegarde. La page Ma Location utilise encore une liste de véhicules distincte.

## État et prochaines améliorations

État établi par lecture du code le **6 novembre 2026**, sans validation complète dans un navigateur.

- Sécuriser les identifiants après rechargement et refuser les immatriculations en doublon.
- Valider les prix strictement positifs et les convertir en nombres pour fiabiliser le tri.
- Réinitialiser aussi le tri et gérer les messages de parc vide ou sans résultat.
- Calculer les quatre compteurs du dashboard depuis localStorage et adapter son script.
- Relier les champs de Ma Location, valider les dates et terminer le récapitulatif.
- Mutualiser le stockage et vérifier la navigation, le responsive, l’accessibilité et la console.

## Organisation et périmètre

Le travail est suivi dans **Jira**, avec des branches Git dédiées, des commits descriptifs et des Pull Requests. Les livrables prévus sont le code source, ce README, le site déployé et le tableau de suivi.

Le concept reste centré sur la gestion du parc et le suivi de sa disponibilité. Ma Location est une extension pédagogique en cours de développement. L’authentification, la gestion complète des clients, les contrats et le paiement en ligne restent hors périmètre.
