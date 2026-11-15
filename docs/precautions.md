# Précautions d'usage et limites

Ce dépôt est un modèle de démonstration. Il est fourni en l'état, sans garantie, et le code n'a pas fait l'objet d'un audit de sécurité. Les points suivants sont à vérifier avant de l'utiliser pour un vrai mariage.

## Données personnelles

- Une page publiée avec GitHub Pages est accessible à toute personne qui en connaît l'adresse, même si le QR code n'a été montré qu'aux invités.
- Un dépôt public conserve l'historique de toutes ses versions. Un prénom ou une photo supprimés d'une version restent consultables dans les précédentes. Pour un usage réel, un dépôt privé est préférable.
- La projection montre les photos à toute la salle. L'encadré de l'accueil prévient les invités : gardez-le.
- Le branchement d'un service en ligne rend son auteur responsable des données déposées : droits d'accès, durée de conservation et suppression à la demande.

## Droits d'accès

- La clé placée dans `donnees.js` est visible de tous. Ce sont les droits créés par `supabase/schema.sql` qui limitent ce qu'elle permet : déposer, et rien d'autre.
- Le dépôt est ouvert : toute personne qui a l'adresse peut envoyer des fichiers, sans limite de nombre. Un envoi malveillant peut remplir l'espace de stockage. Surveillez l'administration, et fermez le dépôt après le mariage.
- Tous les comptes ont les mêmes droits : lire, modifier et supprimer les souvenirs et le programme. Il n'y a pas de rôle distinct pour les témoins.
- Si l'inscription libre reste activée dans Supabase, n'importe qui peut se créer un compte et obtenir ces droits. La désactiver fait partie de l'installation.
- Le bandeau « Interdit aux mariés » est un simple rappel. Ce qui protège le programme, c'est de ne pas donner de compte aux mariés.

## Services externes

- À chaque ouverture, les pages contactent Google Fonts et jsDelivr, qui reçoivent l'adresse IP du visiteur. L'administration contacte aussi cdnjs.
- Les fichiers sont envoyés à Supabase, dans la région choisie à la création du projet.

## Limites connues du code

| Limite | Conséquence |
|---|---|
| Les bibliothèques sont chargées depuis des services externes sans contrôle d'intégrité | Le site dépend de la disponibilité et de la fiabilité de ces services |
| Le zip de l'administration est préparé dans la mémoire du navigateur | Au-delà de 1 à 2 Go, le téléchargement peut échouer |
| Les photos au format HEIC ne sont lues que par certains navigateurs | Sans l'option de transformation d'images de Supabase, elles peuvent ne pas s'afficher à la projection |
| Les vidéos sont projetées telles quelles | Un format que le navigateur ne lit pas est passé |
| Les mots saisis à l'accueil sont projetés sans relecture automatique | La modération se fait à la main |
| Le mode démonstration garde ses données en mémoire | Tout revient à l'état initial au rechargement, et un dépôt n'apparaît pas dans les autres pages |
| Le schéma fourni n'a pas été déployé tel quel sur un projet réel | Il resserre les droits de la version d'origine : l'essai complet de l'installation est indispensable |
| Il n'y a pas de test automatique | Chaque modification se vérifie à la main dans un navigateur |

---

[Retour au README](../README.md)
