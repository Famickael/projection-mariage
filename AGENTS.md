# Guide pour les assistants IA

Ce fichier donne à un assistant IA le contexte utile pour modifier ce projet sans le lire en entier. La documentation destinée aux personnes est dans `README.md` et `docs/`.

## Le projet en 5 lignes

- Site statique de 4 pages pour un mariage : dépôt de souvenirs par les invités, administration, projection pendant la soirée, programme des témoins. Pas d'étape de compilation, pas de serveur à soi.
- `donnees.js` contient tout ce qui est propre à un mariage, dans l'objet `window.MARIAGE`.
- Les fichiers et les données vont dans un projet Supabase (base, stockage, comptes). Le schéma est dans `supabase/schema.sql`.
- Tant que `supabase.url` est vide, `demo/demo.js` remplace Supabase par des données fictives en mémoire.
- Les textes de l'interface, les commentaires et la documentation sont en français. Les données fournies sont fictives.

## Quel fichier lire selon la demande

Ne lisez que ce qui sert à la demande.

| Demande | À lire | À modifier |
|---|---|---|
| Changer les prénoms, la date, les lieux, les textes d'accueil | `donnees.js` | `donnees.js` uniquement |
| Comprendre un champ de données | `docs/donnees.md` | Rien |
| Brancher Supabase | `docs/installation.md`, `supabase/schema.sql` | `donnees.js` (rubrique `supabase`) |
| Changer les couleurs ou les polices | Le bloc `:root` en tête de chaque page | Les 4 pages, pour rester cohérent |
| Modifier le dépôt des invités | `index.html` | `index.html` |
| Modifier la modération ou l'export | `admin.html` | `admin.html` |
| Modifier le diaporama | `projection.html` | `projection.html` |
| Modifier le planning des témoins | `programme.html` | `programme.html` |
| Changer les droits d'accès | `supabase/schema.sql`, `docs/precautions.md` | `supabase/schema.sql` et la documentation |

## Règles à respecter

- **Le contenu va dans `donnees.js`.** Aucun prénom, date ou lieu ne doit être écrit dans les pages.
- **Un champ facultatif absent ne doit rien casser.**
- **Pas de donnée personnelle réelle** dans le dépôt : ni nom, ni adresse, ni photo de personne.
- **Pas de clé secrète** dans les fichiers. Seule la clé publique de Supabase (« anon » ou « publishable ») peut figurer dans `donnees.js`, jamais la clé `service_role`.
- **Un invité ne lit rien.** Toute nouvelle table ou tout nouveau bucket garde ce principe : dépôt pour le rôle `anon`, lecture pour le rôle `authenticated`.
- **Toute fonction ajoutée à une page doit marcher en démonstration**, donc être prise en charge par `demo/demo.js`.
- **Les textes venus des invités passent par `echap()`** avant d'être insérés dans la page.
- **Pas de dépendance ni d'outil de compilation.** Les 3 bibliothèques externes sont chargées par leur adresse.
- **La page de dépôt doit rester utilisable au clavier et sur un écran de 360 pixels de large.**

## Vérifier une modification

1. Servez le dossier : `python3 -m http.server 8000`, puis ouvrez les 4 pages. Sans réglage Supabase, elles s'ouvrent en démonstration.
2. Vérifiez que la console du navigateur ne montre aucune erreur.
3. Sur `index.html`, déposez un fichier jusqu'à l'écran « Merci ».
4. Sur `programme.html`, ajoutez `?t=2027-06-12T15:00` à l'adresse pour simuler le jour du mariage.

Il n'y a pas de test automatique dans le dépôt. Le branchement réel se vérifie sur un projet Supabase, en suivant `docs/installation.md`.

## Mettre à jour la documentation

- Un nouveau champ de `donnees.js` se documente dans `donnees.js` et dans `docs/donnees.md`.
- Un changement de droits se reporte dans `docs/precautions.md`.
- Toute évolution notable s'ajoute en tête de `CHANGELOG.md`, avec la date.
- Le `README.md` reste court : le détail va dans `docs/`.
