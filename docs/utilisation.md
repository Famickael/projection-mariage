# Le jour du mariage et après

## Qui ouvre quoi

| Page | Adresse | Qui | Compte |
|---|---|---|---|
| Dépôt des souvenirs | `index.html` | Les invités, avec le QR code | Non |
| Administration | `admin.html` | Les organisateurs | Oui |
| Projection | `projection.html` | L'ordinateur relié à l'écran | Non par défaut |
| Programme | `programme.html` | L'équipe qui organise | Non par défaut |

## Le dépôt des souvenirs

L'invité indique son nom, choisit des fichiers et peut écrire un mot sous chacun. L'envoi se fait par morceaux. Après une courte coupure de réseau, il reprend là où il s'était arrêté : 5 tentatives sont faites, sur 20 secondes environ. Au-delà, le fichier est marqué en échec, et un nouveau clic sur « Envoyer » ne renvoie que les fichiers en échec, depuis leur début.

La page n'affiche aucun envoi, ni ceux des autres invités, ni ceux de la personne qui dépose.

## L'administration

Chaque envoi et chaque fichier a un interrupteur « Projeté ». Un clic le retire de la projection sans le supprimer. Le nom de l'invité et le mot de chaque fichier peuvent être corrigés. Une suppression est définitive.

## La projection

Ouvrez `projection.html` sur l'ordinateur relié à l'écran, puis passez en plein écran.

| Touche | Effet |
|---|---|
| `F`, ou double clic | Plein écran |
| Espace | Pause, puis reprise |
| `←` et `→` | Élément précédent ou suivant |
| `V` | Avec ou sans les vidéos |
| `R` | Recharger la liste des envois |

- La liste est relue toutes les 20 secondes. Un nouvel envoi passe en priorité, puis rejoint le mélange.
- Les médias sont téléchargés en mémoire au fil de l'eau. En cas de coupure de réseau, la projection continue avec ce qui est déjà en mémoire, et le compteur en bas à droite l'indique.
- Les vidéos passent sans le son et sont coupées au bout de 45 secondes.
- Fermer l'onglet vide la mémoire : il reste ouvert toute la soirée.

## Le programme

`programme.html` est partagé entre toutes les personnes qui l'ouvrent, et relu toutes les 30 secondes. Le bandeau du haut rappelle que la page n'est pas faite pour les mariés.

- Un **moment** est une activité. Une **phase** est une bande de fond qui regroupe plusieurs moments : préparatifs, cérémonie, dîner.
- Un moment verrouillé garde son heure. Les autres se déplacent en les faisant glisser dans le planning, ou avec les boutons de décalage de leur fiche.
- Une journée va de 6h à 6h le lendemain : un moment à 2h du matin reste affiché avec la soirée.
- Le planning existe en 2 vues, liste ou grille horaire.

## Après le mariage

1. **Téléchargez l'archive** avec « Tout télécharger (zip) » dans l'administration, puis ouvrez le fichier pour vérifier qu'il est complet.
2. **Fermez le dépôt** en exécutant [`supabase/fermeture.sql`](../supabase/fermeture.sql) dans l'éditeur SQL de Supabase. La page de dépôt reste en ligne mais tout envoi échoue : retirez aussi le QR code, ou dépubliez le site.
3. **Conservez l'archive à 2 endroits**, puis supprimez les souvenirs de Supabase quand ils ne servent plus.

Le zip est préparé dans la mémoire du navigateur. Pour plusieurs centaines de Mo, un ordinateur est préférable à un téléphone.

---

[Retour au README](../README.md)
