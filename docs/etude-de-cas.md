# Étude de cas

Cette page décrit la conception du site : le besoin, les publics, les choix retenus et les pistes d'évolution.

## Le besoin

Pendant un mariage, les photos se dispersent sur les téléphones des invités. Les mariés en récupèrent une partie, des semaines plus tard, par des messageries qui réduisent leur qualité.

Le site répond à 3 besoins liés :

1. Réunir les photos et les vidéos des invités au même endroit, dans leur qualité d'origine.
2. Les montrer le soir même, sur l'écran de la salle.
3. Donner à l'équipe qui organise un déroulé commun du week-end, que les mariés ne voient pas.

## Les publics

| Public | Situation | Ce qu'il lui faut |
|---|---|---|
| Les invités | Debout, un verre à la main, sur leur téléphone, avec un réseau incertain | Aucun compte, aucun réglage, un envoi qui résiste aux coupures |
| Les organisateurs | Avant et pendant la soirée, sur un ordinateur | Voir ce qui arrive, retirer ce qui ne doit pas être projeté |
| La salle | Un écran regardé de loin, par moments | De grandes images, peu de texte, aucun temps mort |
| L'équipe qui organise | Plusieurs personnes, chacune sur son téléphone, tout le week-end | Le même programme pour tous, modifiable sur place |

## Les choix de conception

| Choix | Raison |
|---|---|
| Une page par public | Chaque page reste simple, et l'adresse suffit à orienter chacun |
| Aucun compte pour déposer | Un compte ferait renoncer une partie des invités |
| La page de dépôt n'affiche aucun envoi | Les invités déposent sans se demander qui verra quoi avant la soirée |
| Un mot par fichier, pas de message général | Le mot s'affiche avec la photo qu'il commente |
| Envoi par morceaux, avec reprise après une courte coupure | Une vidéo de téléphone pèse plusieurs centaines de Mo, et le réseau d'une salle des fêtes est instable |
| Un interrupteur « Projeté » distinct de la suppression | Retirer une photo de l'écran ne doit pas la retirer de l'archive |
| Les nouveaux envois passent en priorité | L'invité voit sa photo à l'écran peu après l'avoir envoyée, ce qui incite les autres à déposer |
| Les médias gardés en mémoire | La projection ne dépend plus du réseau une fois lancée |
| Projection et programme ouverts par défaut | Le jour du mariage, personne ne cherche un mot de passe |
| Des journées de 6h à 6h dans le programme | Une soirée de mariage se termine après minuit |
| Des moments verrouillés | Les heures imposées (cérémonie, traiteur) ne bougent pas quand le reste glisse |
| Des pages statiques et un service en ligne | Rien à installer ni à maintenir, et un coût nul ou faible pour un événement unique |

## Du site d'un mariage au modèle

| Choix | Raison |
|---|---|
| Tout le contenu dans `donnees.js` | Le site s'adapte sans programmer |
| Un mode démonstration | Le modèle se découvre et se modifie sans créer de compte chez un service |
| Une vérification par `?verifier` | Une erreur de saisie se repère avant le jour du mariage |
| Les protections en option | Le réglage par défaut reste le plus simple à mettre en place |
| Des dessins à la place des photos | Le dépôt ne contient aucune personne réelle |

## Les pistes d'évolution

- Un plafond de taille ou de nombre par envoi, pour limiter le risque de remplissage du stockage.
- Des rôles distincts entre l'administration et le programme.
- Une reprise d'envoi qui survit à une longue coupure ou à la fermeture de la page.
- Une conversion des photos HEIC (le format des iPhone) à l'envoi, pour une projection fiable sur tous les navigateurs.
- Un album consultable par les invités après le mariage, sur décision des mariés.
- Les polices et les bibliothèques hébergées dans le dépôt, pour un site sans appel externe.
- Un préfixe de tables réglable, pour héberger plusieurs événements dans un même projet Supabase.

---

[Retour au README](../README.md)
