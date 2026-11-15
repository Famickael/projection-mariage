-- Après le mariage, une fois l'archive téléchargée et vérifiée : ferme le dépôt aux invités.
-- Les souvenirs restent en place pour les comptes connectés.
drop policy if exists invites_depot_envois on public.envois;
drop policy if exists invites_depot_fichiers on public.fichiers;
drop policy if exists invites_depot_stockage on storage.objects;
