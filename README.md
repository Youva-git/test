<a href="https://imgflip.com/gif/649qfp"><img src="https://i.imgflip.com/gif/649qfp"/> </a>  

## Fonctionnalités incluses
- Recherche par nom.
- Filtrer par date de sortie.
- Afficher les détails du produit lors de la sélection d'une date de sortie ou lors de la saisie d'une requête de recherche.

## Bibliothèques utilisées
- Axios : pour effectuer des requêtes réseau vers l'API.
- node-sass : utilisé au-dessus de css pour un contrôle plus précis du style des éléments.
- react-calendar : pour générer le composant calendrier qui a ensuite été personnalisé et modifié.

## Nombre total d'heures passées sur le projet
~4 heures.

## Remarques sur l'API
La route "/browse" de l'API contient des doublons de données de produits qui contiennent les mêmes informations mais des identifiants d'articles différents, je les ai filtrés.

De plus, l'API de Stockx ne spécifie pas d'API "Access-Control-Allow-Origin", ce qui entraîne des erreurs CORS sur les requêtes faites sur le serveur. J'ai contourné ce problème en utilisant un proxy, vous devrez peut-être activer manuellement le proxy sur votre machine en allant à l'URL suivante :
[https://cors-anywhere.herokuapp.com]CORS Anywhere
