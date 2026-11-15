-- Option : demander un compte pour ouvrir la projection et le programme.
-- À exécuter après schema.sql, puis passer comptes.projection et comptes.programme à true dans donnees.js.
-- Le dépôt des invités reste ouvert à tous.
drop policy if exists projection_envois on public.envois;
drop policy if exists projection_fichiers on public.fichiers;
drop policy if exists projection_stockage on storage.objects;
drop policy if exists programme_ouvert on public.programme;
