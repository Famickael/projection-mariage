# Le jour du mariage et après

## La projection

Ouvrez `projection.html` sur l'ordinateur relié à l'écran, connectez-vous, puis passez en plein écran.

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
- Laissez l'onglet ouvert : le fermer vide la mémoire.

## La modération

Dans `admin.html`, chaque envoi et chaque fichier a un interrupteur « Projeté ». Un clic le retire de la projection sans le supprimer. Le nom de l'invité et les mots peuvent être corrigés. Une suppression est définitive.

## Le programme des témoins

`programme.html` est partagé entre tous les comptes et relu toutes les 30 secondes.

- Un **moment** est une activité. Une **phase** est une bande de fond qui regroupe plusieurs moments : préparatifs, cérémonie, dîner.
- Un moment verrouillé garde son heure. Les autres se déplacent en les faisant glisser dans le planning, ou avec les boutons de décalage de leur fiche.
- Une journée va de 6h à 6h le lendemain : un moment à 2h du matin reste affiché avec la soirée.

## Après le mariage

1. **Téléchargez l'archive** avec « Tout télécharger (zip) » dans `admin.html`, puis ouvrez le fichier pour vérifier qu'il est complet. Le zip est préparé dans le navigateur : au-delà de 1 à 2 Go, téléchargez plutôt les fichiers par envoi.
2. **Fermez le dépôt** en exécutant [`supabase/fermeture.sql`](../supabase/fermeture.sql) dans l'éditeur SQL. Les invités ne peuvent alors plus rien déposer.
3. **Conservez l'archive à 2 endroits**, puis supprimez le projet Supabase quand il ne sert plus. Un projet gratuit inactif est de toute façon mis en pause.

---

[Retour au README](../README.md)
