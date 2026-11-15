# Précautions d'usage et limites

Ce dépôt est un modèle de démonstration. Il est fourni en l'état, sans garantie, et le code n'a pas fait l'objet d'un audit de sécurité. Les points suivants sont à vérifier avant de l'utiliser pour un vrai mariage.

## Données personnelles

- Une page publiée avec GitHub Pages est accessible à toute personne qui en connaît l'adresse, même si le QR code n'a été montré qu'aux invités.
- Un dépôt public conserve l'historique de toutes ses versions. Un prénom ou une photo supprimés d'une version restent consultables dans les précédentes. Pour un usage réel, un dépôt privé est préférable.
- La projection montre les photos à toute la salle. L'encadré de l'accueil prévient les invités : il est à conserver.
- Le branchement d'un service en ligne rend son auteur responsable des données déposées : accord des personnes photographiées, droits d'accès, durée de conservation et suppression à la demande.

## Droits d'accès

- La clé placée dans `donnees.js` est visible de tous. Ce sont les droits créés dans Supabase qui limitent ce qu'elle permet.
- **Par défaut**, cette clé permet de déposer, de lire les souvenirs dont l'envoi et le fichier sont marqués « projeté », et de modifier le programme. La page de dépôt n'affiche rien, mais une personne qui connaît l'adresse de la projection ou du programme y accède sans compte.
- **Avec l'option d'accès restreint**, cette clé ne permet plus que de déposer. Voir [les options](options.md).
- Le dépôt est toujours ouvert : toute personne qui a l'adresse peut envoyer des fichiers, sans limite de nombre. Un envoi malveillant peut remplir l'espace de stockage.
- Tous les comptes ont les mêmes droits : lire, modifier et supprimer les souvenirs et le programme.
- Si l'inscription libre reste activée dans Supabase, n'importe qui peut se créer un compte et obtenir ces droits. La désactiver fait partie de l'installation.
- Le bandeau « Interdit aux mariés » est un simple rappel. Il ne protège pas la page.

## Services externes

- À chaque ouverture, les pages contactent Google Fonts et jsDelivr, qui reçoivent l'adresse IP du visiteur. L'administration contacte aussi cdnjs.
- Les fichiers sont envoyés à Supabase, dans la région choisie à la création du projet.

## Ce qui a été testé, et ce qui ne l'a pas été

| Élément | État |
|---|---|
| Les 4 pages en démonstration | Vérifiées dans un navigateur de bureau, en largeur de téléphone pour le dépôt et le programme |
| Le dépôt en démonstration | L'envoi est simulé : aucun fichier ne part |
| Le branchement Supabase du modèle | Non déployé sur un projet réel. `supabase/schema.sql` part des droits de la version d'origine et les resserre sur 3 points : droits de base explicites, chemin de fichier unique, envoi masqué non lisible |
| L'option d'accès restreint et le script de fermeture | Non essayés sur un projet réel |
| Un vrai téléphone, iPhone ou Android | Non testé sur le modèle |
| La version d'origine | Utilisée pendant un mariage réel, avec Supabase |

## Limites connues du code

| Limite | Conséquence |
|---|---|
| Les bibliothèques sont chargées depuis des services externes sans contrôle d'intégrité | Le site dépend de la disponibilité et de la fiabilité de ces services |
| Le zip de l'administration est préparé dans la mémoire du navigateur | Sur un gros volume, le téléchargement peut échouer |
| Les photos au format HEIC, celui des iPhone, ne sont lues que par certains navigateurs | La projection demande à Supabase de les convertir. Si le projet Supabase ne propose pas cette transformation d'images, elles peuvent ne pas s'afficher |
| La reprise d'un envoi se limite à 5 tentatives sur 20 secondes environ | Après une coupure plus longue, le fichier repart du début |
| La projection garde toutes les photos et les vidéos en mémoire | Avec plusieurs centaines de fichiers, un ordinateur récent est préférable |
| Les vidéos sont projetées telles quelles | Un format que le navigateur ne lit pas est passé |
| Les mots des invités sont projetés sans relecture automatique | La modération se fait à la main, dans l'administration |
| Le mode démonstration garde ses données en mémoire | Tout revient à l'état initial au rechargement, et un dépôt n'apparaît pas dans les autres pages |
| `donnees.js` n'est contrôlé que par `?verifier` | Une erreur de syntaxe empêche les pages de fonctionner |
| Il n'y a pas de test automatique | Chaque modification se vérifie à la main dans un navigateur |

---

[Retour au README](../README.md)
