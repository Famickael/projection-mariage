# Référence de `donnees.js`

Le fichier définit un seul objet, `window.MARIAGE`, lu par les 4 pages.

## Les rubriques

| Champ | Rôle | Valeur du modèle |
|---|---|---|
| `maries` | Les prénoms, dans l'ordre d'affichage | `["Camille", "Antonin"]` |
| `phrase` | La ligne sous les prénoms, sur l'accueil | `"ont la joie de vous inviter à leur mariage"` |
| `date` | La date, écrite comme elle doit s'afficher | `"Samedi 12 juin 2027"` |
| `photoCouple` | L'image de l'accueil. `""` pour ne rien afficher | `"couple.svg"` |
| `moments` | Les temps forts affichés sur l'accueil, 3 au plus | 2 temps forts |
| `encart` | L'encadré qui explique ce que deviennent les envois : un `titre` et des `lignes` | |
| `adresseSite` | L'adresse rappelée sur l'écran de projection. `""` pour afficher l'adresse réelle de la page | `""` |
| `programme` | Les jours affichés dans le programme | 5 jours |
| `comptes` | Option : demander un compte pour la projection ou le programme | `false` pour les 2 |
| `supabase` | Le branchement : `url`, `cle` et `bucket` | Vide, donc démonstration |

Seules les rubriques `maries` et `supabase` sont nécessaires. Une autre rubrique absente retire simplement l'élément correspondant de la page. Sans la rubrique `programme`, le programme affiche 5 jours à partir de la date du jour.

## Un temps fort

```js
{ icone: "verres", titre: "Vin d'honneur", lignes: ["après la cérémonie", "au domaine des Tilleuls"] }
```

| Champ | Rôle |
|---|---|
| `icone` | `eglise`, `mairie`, `verres`, `repas` ou `coeur`. Une icône absente ou inconnue est remplacée par `coeur` |
| `titre` | Le nom du temps fort |
| `lignes` | Les lignes affichées dessous : heure, lieu, commune |

## Le programme

```js
programme: {
  premierJour: "2027-06-10",
  dernierJour: "2027-06-14",
  jourPrincipal: "2027-06-12"
}
```

Les dates s'écrivent au format `AAAA-MM-JJ`. Les onglets vont du premier au dernier jour, dans la limite de 14 jours. En dehors de cette période, la page s'ouvre sur `jourPrincipal`.

Les moments du programme ne sont pas dans ce fichier. Ils se saisissent dans `programme.html` et sont enregistrés dans Supabase.

## Les comptes

```js
comptes: { projection: false, programme: false }
```

Avec `false`, la page s'ouvre sans compte. Avec `true`, elle affiche un écran de connexion. Ce réglage va de pair avec un script à exécuter dans Supabase : voir [les options](options.md). L'administration demande toujours un compte.

## Le branchement Supabase

| Champ | Rôle |
|---|---|
| `url` | L'adresse du projet Supabase. Vide : le site reste en démonstration |
| `cle` | La clé publique du projet, nommée « anon » ou « publishable » |
| `bucket` | Le nom de l'espace de stockage. Le script fourni le nomme `mariage` |

## Vérifier le fichier

Ajoutez `?verifier` à la fin de l'adresse de la page de dépôt. Un encadré, en haut de la page, liste les incohérences : prénoms manquants, icône inconnue, date mal écrite, jour principal hors période, adresse ou clé Supabase incomplète, clé secrète collée par erreur.

Avec une erreur de syntaxe dans le fichier (virgule ou guillemet manquant), l'encadré annonce un fichier illisible. Le détail se lit dans la console du navigateur.

---

[Retour au README](../README.md)
