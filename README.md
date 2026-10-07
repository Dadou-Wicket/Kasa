# Kasa

Projet réalisé dans le cadre de ma formation de développeur web.

## Description

Refonte du site Kasa, une plateforme de location immobilière, avec React
à partir de maquettes Figma fournies pour les versions desktop et mobile.

Les données nécessaires au fonctionnement de l'application sont récupérées
depuis une API.

## Technologies

- React
- Sass
- React Router
- API REST
- Vite
- JavaScript

## Fonctionnalités

- Navigation entre les différentes pages avec React Router
- Récupération dynamique des logements depuis l'API
- Affichage des logements avec des composants réutilisables
- Pages de détail générées dynamiquement
- Carousel d'images avec navigation
- Affichage dynamique des notes et des équipements
- Composants Collapse réutilisables
- Gestion des erreurs et page 404
- Adaptation responsive pour desktop et mobile

## Organisation du projet

L'application est organisée en plusieurs composants, pages et éléments
réutilisables afin de séparer les différentes responsabilités.

Un Layout commun permet notamment de gérer le Header, le contenu des pages
et le Footer.

React Router est utilisé pour gérer les différentes routes de l'application.

## Gestion des données

Les données sont récupérées depuis l'API à l'aide de `fetch`.

`useEffect` permet de déclencher les requêtes lors du chargement des composants
et `useState` permet de stocker les données récupérées.

Les logements sont affichés dynamiquement grâce à des composants réutilisables
et aux props transmises entre les composants.

## Composants interactifs

Plusieurs composants interactifs ont été développés :

- Carousel d'images avec navigation entre les photos
- Composant Collapse réutilisable
- Affichage dynamique des notes
- Gestion des erreurs et redirection vers une page 404

## Responsive design

L'application a été développée à partir des maquettes Figma desktop et mobile.

L'utilisation de Sass et de media queries permet d'adapter l'interface aux
différentes tailles d'écran.

## Compétences développées

Ce projet m'a permis d'approfondir :

- React
- Création et réutilisation de composants
- Hooks `useState` et `useEffect`
- React Router
- Communication avec une API REST
- Gestion des données dynamiques
- Gestion des états
- Sass
- Responsive design
- Gestion des erreurs et des routes 404

## Auteur

David Maron
