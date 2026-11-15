# Personnaliser et options

Le réglage par défaut est le plus simple. Ce qui suit est facultatif.

## La photo de l'accueil

Déposez votre image dans le dépôt et indiquez son nom dans `photoCouple`. Une image carrée remplit mieux l'octogone. Pensez à la réduire : 800 pixels de côté suffisent.

## Les couleurs

Chaque page commence par un bloc `:root` qui nomme les couleurs. Les principales sont `--bordeaux` (titres et boutons), `--papier` (fond) et `--feuille` (filets et décor). Pour rester cohérent, une couleur se change dans les 4 pages.

## Les textes de l'accueil

Les prénoms, la phrase, la date, les temps forts et l'encadré se règlent dans `donnees.js`. Les autres textes de l'interface sont écrits dans les pages.

## Option : demander un compte pour la projection et le programme

Par défaut, ces 2 pages s'ouvrent sans compte, ce qui évite de distribuer des mots de passe à l'équipe. En contrepartie, toute personne qui connaît leur adresse peut voir les souvenirs projetés et modifier le programme.

Pour demander un compte :

1. Exécutez [`supabase/option-acces-restreint.sql`](../supabase/option-acces-restreint.sql) dans l'éditeur SQL de Supabase.
2. Dans `donnees.js`, passez `comptes.projection` et `comptes.programme` à `true`.
3. Créez un compte pour chaque personne concernée, comme pour l'administration.

Les 2 étapes vont ensemble. Avec le script seul, les pages s'ouvrent mais restent vides. Avec le réglage seul, l'écran de connexion s'affiche mais les données restent lisibles sans compte.

Tous les comptes ont les mêmes droits : un compte créé pour le programme ouvre aussi l'administration.

## Fermer le dépôt après le mariage

[`supabase/fermeture.sql`](../supabase/fermeture.sql) retire le dépôt et la lecture sans compte. Les souvenirs restent accessibles depuis l'administration. Voir [le jour du mariage et après](utilisation.md).

---

[Retour au README](../README.md)
