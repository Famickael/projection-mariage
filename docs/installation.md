# Installation

Le site est fait de pages statiques, publiées par GitHub Pages, et d'un projet Supabase qui reçoit les souvenirs. L'offre gratuite de Supabase suffit pour un mariage, dans la limite de son espace de stockage : vérifiez les plafonds en vigueur (espace total et taille par fichier) avant de vous lancer.

## 1. Créer le projet Supabase

1. Créez un compte sur supabase.com, puis un projet, dans une région proche de vos invités.
2. Ouvrez « SQL Editor », collez le contenu de [`supabase/schema.sql`](../supabase/schema.sql) et exécutez-le. Il crée les 3 tables, l'espace de stockage privé `mariage` et les droits d'accès.
3. Dans « Authentication », rubrique des fournisseurs de connexion, **désactivez l'inscription des nouveaux utilisateurs**. Sans cela, n'importe qui pourrait se créer un compte et lire les souvenirs.

## 2. Créer les comptes

Dans « Authentication », rubrique « Users », ajoutez à la main un utilisateur (adresse e-mail et mot de passe) pour chaque personne qui doit accéder à l'administration, à la projection ou au programme.

Tous les comptes ont les mêmes droits. Un compte commun aux témoins est possible, mais un compte par personne permet d'en retirer un sans gêner les autres.

## 3. Relier le site

1. Dans les réglages du projet Supabase, rubrique « API », copiez l'adresse du projet et la clé publique (« anon » ou « publishable »).
2. Collez-les dans la rubrique `supabase` de `donnees.js` :

```js
supabase: {
  url: "https://abcdefghijklmnop.supabase.co",
  cle: "votre-clé-publique",
  bucket: "mariage"
}
```

Cette clé est faite pour être publique : ce sont les droits créés à l'étape 1 qui limitent ce qu'elle permet. La clé `service_role`, elle, ne doit jamais être copiée dans le dépôt.

Dès que `url` est renseigné, le mode démonstration s'arrête et les pages utilisent votre projet.

## 4. Publier

1. Dans les réglages du dépôt GitHub, rubrique « Pages », choisissez « Deploy from a branch », la branche `main` et le dossier `/ (root)`.
2. Générez un QR code vers l'adresse de la page, pour les tables et le livret.

Les pages `admin.html`, `projection.html` et `programme.html` ne sont liées depuis aucune page publique. Leur adresse se devine pourtant : ce sont les comptes qui les protègent, pas le secret de l'adresse.

## 5. Faire un essai complet

Cet essai est à faire avant d'imprimer le QR code.

1. Depuis un iPhone et un téléphone Android, déposez une photo avec un mot, puis une vidéo de plusieurs centaines de Mo.
2. Coupez le réseau pendant l'envoi de la vidéo, puis rétablissez-le : l'envoi doit reprendre.
3. Ouvrez `admin.html`, connectez-vous, vérifiez les envois et essayez « Tout télécharger ».
4. Ouvrez `projection.html` sur l'ordinateur qui servira le jour J, branché à l'écran ou au vidéoprojecteur.
5. Supprimez les envois d'essai depuis l'administration.

---

[Retour au README](../README.md)
