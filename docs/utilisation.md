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
- Les vidéos passent sans le son et sont coupées au bout de 45 secondes.

### La taille des photos à l'écran

Chaque photo est affichée en entier, sans déformation ni recadrage, à la plus grande taille que l'écran permet.

| Photo | Affichage |
|---|---|
| Paysage ou carrée | Sur presque toute la hauteur de l'écran, la légende posée dans un coin |
| Portrait | Sur toute la hauteur disponible |
| Très étroite, comme une capture d'écran de téléphone | La légende passe sous la photo, pour ne pas la recouvrir |
| Panoramique | Sur toute la largeur de l'écran |
| Petite, comme une image reçue par messagerie | Agrandie, 4 fois au plus pour ne pas devenir floue |

### Projeter avec peu de réseau

Le réseau d'une salle des fêtes est souvent faible ou instable. La projection est faite pour s'en passer une fois lancée.

Le principe : dès son ouverture, la page télécharge toutes les photos et toutes les vidéos dans la mémoire de l'ordinateur, une par une, les photos d'abord. Elle projette ensuite depuis cette mémoire, et non depuis Internet. Le compteur en bas à droite de l'écran indique l'avancement, par exemple « 42/60 en mémoire ».

La marche à suivre :

1. Ouvrez la projection à l'avance, là où le réseau est bon : chez soi, ou en partage de connexion depuis un téléphone.
2. Attendez que le compteur soit complet, par exemple « 60/60 en mémoire ».
3. Ne fermez pas l'onglet et ne rechargez pas la page : la mémoire serait vidée et tout serait à télécharger de nouveau.

Pendant la soirée :

- Sans réseau, la projection continue avec ce qui est en mémoire. Le compteur passe en rouge et indique « hors ligne ».
- Les nouveaux envois des invités ne peuvent arriver à l'écran que si l'ordinateur a du réseau à ce moment. Un partage de connexion suffit : la page reprend seule dès que le réseau revient.
- La touche `V` retire les vidéos de la projection.

Les vidéos sont les plus lourdes à télécharger et à garder en mémoire. Avec plusieurs centaines de fichiers, un ordinateur récent est préférable.

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
