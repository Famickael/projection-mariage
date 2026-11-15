-- Schéma Supabase du site de souvenirs. À exécuter une fois dans l'éditeur SQL d'un projet neuf.
-- Principe : un invité (clé publique, rôle anon) peut déposer mais ne peut rien lire.
-- Seuls les comptes créés à la main dans Authentication > Users peuvent lire, modifier et supprimer.
-- IMPORTANT : désactivez l'inscription libre (Authentication > Sign In / Providers > Allow new users
-- to sign up), sinon n'importe qui peut se créer un compte et obtenir ces droits.

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
  chemin text not null,
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

-- Invités : dépôt uniquement.
create policy invites_depot_envois on public.envois for insert to anon with check (true);
create policy invites_depot_fichiers on public.fichiers for insert to anon with check (true);

-- Organisateurs et témoins connectés : tout.
create policy orga_envois on public.envois for all to authenticated using (true) with check (true);
create policy orga_fichiers on public.fichiers for all to authenticated using (true) with check (true);
create policy orga_programme on public.programme for all to authenticated using (true) with check (true);

-- Stockage : bucket privé. Le nom doit être celui de supabase.bucket dans donnees.js.
insert into storage.buckets (id, name, public) values ('mariage', 'mariage', false);
create policy invites_depot_stockage on storage.objects for insert to anon with check (bucket_id = 'mariage');
create policy orga_lecture_stockage on storage.objects for select to authenticated using (bucket_id = 'mariage');
create policy orga_depot_stockage on storage.objects for insert to authenticated with check (bucket_id = 'mariage');
create policy orga_suppression_stockage on storage.objects for delete to authenticated using (bucket_id = 'mariage');
