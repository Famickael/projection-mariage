# Installation

Le site est fait de 4 pages statiques, publiées par GitHub Pages, et d'un espace chez Supabase qui reçoit les souvenirs. Supabase est un service en ligne qui fournit une base de données, un stockage de fichiers et des comptes de connexion. Un espace Supabase s'appelle un « projet ».

Supabase propose une offre gratuite. Ses plafonds (espace total, taille par fichier) changent : ils sont à vérifier sur le site de Supabase avant de se lancer.

## 1. Créer le projet Supabase

1. Créez un compte sur supabase.com, puis un projet, dans une région proche de vos invités.
2. Ouvrez « SQL Editor », collez le contenu de [`supabase/schema.sql`](../supabase/schema.sql) et exécutez-le. Il crée 3 tables, un espace de stockage privé nommé `mariage`, et les droits d'accès.
3. Dans « Authentication », rubrique des fournisseurs de connexion, **désactivez l'inscription des nouveaux utilisateurs**. Sans cela, n'importe qui pourrait se créer un compte et accéder à l'administration.

## 2. Créer les comptes

Dans « Authentication », rubrique « Users », ajoutez à la main un utilisateur (adresse e-mail et mot de passe) pour chaque personne qui doit accéder à l'administration.

Par défaut, seule l'administration demande un compte. Le dépôt, la projection et le programme s'ouvrent sans compte. Une [option](options.md) demande un compte pour la projection et le programme.

## 3. Relier le site

1. Dans les réglages du projet Supabase, rubrique « API », copiez l'adresse du projet et la clé publique, nommée « anon » ou « publishable ».
2. Collez-les dans la rubrique `supabase` de `donnees.js` :

```js
supabase: {
  url: "https://abcdefghijklmnop.supabase.co",
  cle: "votre-clé-publique",
  bucket: "mariage"
}
```

Cette clé est faite pour être publique : ce sont les droits créés à l'étape 1 qui limitent ce qu'elle permet. L'autre clé, nommée `service_role`, donne tous les droits et ne doit jamais être copiée dans le dépôt.

Dès que `url` est renseigné, le mode démonstration s'arrête et les pages utilisent votre projet.

## 4. Publier

1. Dans les réglages du dépôt GitHub, rubrique « Pages », choisissez « Deploy from a branch », la branche `main` et le dossier `/ (root)`.
2. Générez un QR code vers l'adresse de la page de dépôt, pour les tables et le livret.
3. Envoyez l'adresse de `programme.html` à l'équipe qui organise, et gardez celle de `admin.html` et de `projection.html`.

Aucune page publique ne mène à l'administration ni à la projection. Leur adresse se devine pourtant : voir [les précautions](precautions.md).

## 5. Faire un essai complet

Cet essai est à faire avant d'imprimer le QR code. Le modèle n'a été vérifié qu'en démonstration : le branchement réel reste à valider sur votre projet.

1. Depuis un iPhone et un téléphone Android, déposez une photo avec un mot, puis une vidéo de plusieurs centaines de Mo.
2. Coupez le réseau pendant l'envoi de la vidéo, puis rétablissez-le : l'envoi doit reprendre.
3. Ouvrez `admin.html`, connectez-vous, vérifiez les envois et essayez « Tout télécharger ».
4. Ouvrez `projection.html` sur l'ordinateur qui servira le jour du mariage, relié à l'écran ou au vidéoprojecteur.
5. Ouvrez `programme.html` sur 2 appareils, ajoutez un moment sur l'un et vérifiez qu'il apparaît sur l'autre.
6. Supprimez les envois d'essai depuis l'administration.

---

[Retour au README](../README.md)
