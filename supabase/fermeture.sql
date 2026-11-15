-- Après le mariage, une fois l'archive téléchargée et vérifiée : ferme le dépôt et la lecture sans compte.
-- Les souvenirs restent en place pour les comptes connectés.
drop policy if exists depot_envois on public.envois;
drop policy if exists depot_fichiers on public.fichiers;
drop policy if exists depot_stockage on storage.objects;
drop policy if exists projection_envois on public.envois;
drop policy if exists projection_fichiers on public.fichiers;
drop policy if exists projection_stockage on storage.objects;
drop policy if exists programme_ouvert on public.programme;
