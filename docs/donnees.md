# Référence de `donnees.js`

Le fichier définit un seul objet, `window.MARIAGE`, lu par les 4 pages.

## Les rubriques

| Champ | Rôle | Exemple |
|---|---|---|
| `maries` | Les prénoms, dans l'ordre d'affichage | `["Camille", "Antonin"]` |
| `phrase` | La ligne sous les prénoms, sur l'accueil | `"ont la joie de vous inviter à leur mariage"` |
| `date` | La date, écrite comme elle doit s'afficher | `"Samedi 12 juin 2027"` |
| `photoCouple` | L'image de l'accueil. Une image carrée remplit mieux l'octogone. `""` pour ne rien afficher | `"couple.jpg"` |
| `moments` | 1 à 3 temps forts affichés sur l'accueil | Voir ci-dessous |
| `encart` | L'encadré qui explique ce que deviennent les envois : un `titre` et des `lignes` | |
| `adresseSite` | L'adresse rappelée sur l'écran de projection. `""` pour afficher l'adresse réelle de la page | `"camille-antonin.fr"` |
| `programme` | Les jours affichés dans le programme des témoins | Voir ci-dessous |
| `supabase` | Le branchement : `url`, `cle` et `bucket` | Voir [l'installation](installation.md) |

## Un temps fort

```js
{ icone: "verres", titre: "Vin d'honneur", lignes: ["après la cérémonie", "au domaine des Tilleuls"] }
```

| Champ | Rôle |
|---|---|
| `icone` | `eglise`, `mairie`, `verres`, `repas` ou `coeur` |
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

Les dates s'écrivent au format `AAAA-MM-JJ`. Les onglets du programme vont du premier au dernier jour, dans la limite de 14 jours. En dehors de cette période, la page s'ouvre sur `jourPrincipal`.

Les moments du programme ne sont pas dans ce fichier : les témoins les saisissent dans `programme.html`, et ils sont enregistrés dans Supabase.

## Repères utiles

- Les prénoms servent aussi au titre des pages, au bandeau de la projection et au nom du fichier zip.
- Le nom du `bucket` doit être celui créé par `supabase/schema.sql`, soit `mariage`.
- Tant que `supabase.url` est vide, le site reste en démonstration.

---

[Retour au README](../README.md)
