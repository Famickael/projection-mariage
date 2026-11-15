# Adapter le modèle avec une IA

Le plus rapide pour adapter ce site à un mariage est de confier le travail à un assistant IA. Le projet est préparé pour cela.

## Ce qui est prévu pour les assistants

| Élément | Rôle |
|---|---|
| `AGENTS.md` | Le guide lu par les assistants de programmation : quel fichier ouvrir selon la demande, les règles du projet, la façon de vérifier |
| `CLAUDE.md` | Renvoie vers `AGENTS.md`, pour les outils qui cherchent ce nom de fichier |
| `donnees.js` | Tous les réglages, commentés |
| `?verifier` | Ajouté à l'adresse de la page de dépôt, il liste les incohérences du fichier de données |
| Le mode démonstration | Il permet de vérifier une modification sans projet Supabase |

## Avec un assistant de discussion

Sans outil particulier, il suffit de joindre le fichier `donnees.js` à la conversation, avec une demande de ce type.

**Remplir le fichier à partir du faire-part :**

```text
Voici le fichier donnees.js d'un modèle de site de mariage, et le texte de
notre faire-part. Remplace le contenu fictif par le nôtre, en gardant
exactement la même structure et les mêmes noms de champs.
- Ne touche pas à la rubrique supabase.
- Laisse vide ce que je n'ai pas précisé, sans rien inventer.
- Renvoie le fichier complet.

Notre faire-part : [collez ici les prénoms, la date, les lieux et les horaires]
```

## Avec un assistant de programmation

**Changer les couleurs :**

```text
Remplace le bordeaux du site par un vert sauge, dans les 4 pages, en gardant
un contraste suffisant pour le texte des boutons. Vérifie ensuite les 4 pages
en démonstration.
```

**Ajouter un temps fort :**

```text
Ajoute une icône « bateau » utilisable dans les temps forts de l'accueil,
dans le même style de trait que les icônes existantes, et documente-la.
```

Ne donnez jamais à un assistant la clé `service_role` de votre projet Supabase.

---

[Retour au README](../README.md)
