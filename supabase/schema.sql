-- Schéma Supabase du site de souvenirs. À exécuter une fois dans l'éditeur SQL d'un projet neuf.
--
-- Réglage par défaut, le plus simple :
--   - tout le monde peut déposer, sans compte
--   - la projection et le programme s'ouvrent sans compte
--   - corriger, masquer et supprimer des souvenirs demande un compte (page d'administration).
-- Conséquence : avec la clé publique, toute personne qui connaît l'adresse peut lire les souvenirs
-- marqués « projeté » (l'envoi et le fichier) et modifier le programme. Pour demander un compte aussi sur ces 2 pages,
-- exécutez ensuite option-acces-restreint.sql.
--
-- IMPORTANT : désactivez l'inscription libre (Authentication > Sign In / Providers > Allow new users
-- to sign up), sinon n'importe qui peut se créer un compte et obtenir les droits d'administration.

create table public.envois (
  id uuid primary key,
  created_at timestamptz not null default now(),
  invite_nom text,
  message text,
  appareil text,
  nb_fichiers integer,
  visible boolean not null default true
);
create table public.fichiers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  envoi_id uuid not null references public.envois(id) on delete cascade,
  chemin text not null unique,          -- unique : une ligne ajoutée après coup ne peut pas viser un fichier existant
  nom_original text not null,
  taille bigint,
  type_mime text,
  message text,
  visible boolean not null default true
);
create index fichiers_envoi_id_idx on public.fichiers (envoi_id);
create table public.programme (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  jour date not null,
  debut time not null,
  duree integer not null default 30,
  titre text not null,
  description text,
  type text not null default 'moment',
  verrouille boolean not null default false,
  couleur text
);

alter table public.envois enable row level security;
alter table public.fichiers enable row level security;
alter table public.programme enable row level security;

-- Droits de base des 2 rôles de l'API : anon (clé publique, sans compte) et authenticated (compte connecté).
-- Les règles qui suivent les restreignent ligne par ligne.
grant insert, select on public.envois, public.fichiers to anon;
grant select, insert, update, delete on public.programme to anon;
grant select, insert, update, delete on public.envois, public.fichiers, public.programme to authenticated;

-- Dépôt : ouvert à tous.
create policy depot_envois on public.envois for insert to anon with check (true);
create policy depot_fichiers on public.fichiers for insert to anon with check (true);

-- Projection sans compte : lecture de ce qui est marqué « projeté ».
create policy projection_envois on public.envois for select to anon using (visible = true);
create policy projection_fichiers on public.fichiers for select to anon
  using (visible = true and exists (select 1 from public.envois e where e.id = fichiers.envoi_id and e.visible = true));

-- Programme sans compte : lecture et modification.
create policy programme_ouvert on public.programme for all to anon using (true) with check (true);

-- Comptes connectés (administration) : tout.
create policy comptes_envois on public.envois for all to authenticated using (true) with check (true);
create policy comptes_fichiers on public.fichiers for all to authenticated using (true) with check (true);
create policy comptes_programme on public.programme for all to authenticated using (true) with check (true);

-- Stockage : espace privé. Son nom doit être celui de supabase.bucket dans donnees.js.
insert into storage.buckets (id, name, public) values ('mariage', 'mariage', false);
create policy depot_stockage on storage.objects for insert to anon with check (bucket_id = 'mariage');
create policy projection_stockage on storage.objects for select to anon
  using (bucket_id = 'mariage' and exists (
    select 1 from public.fichiers f join public.envois e on e.id = f.envoi_id
    where f.chemin = objects.name and f.visible = true and e.visible = true));
create policy comptes_lecture_stockage on storage.objects for select to authenticated using (bucket_id = 'mariage');
create policy comptes_depot_stockage on storage.objects for insert to authenticated with check (bucket_id = 'mariage');
create policy comptes_suppression_stockage on storage.objects for delete to authenticated using (bucket_id = 'mariage');
