/* ============================================================
   donnees.js : tout ce qui se règle pour VOTRE mariage.
   Les 4 pages (index, admin, projection, programme) lisent ce fichier.
   Les prénoms, lieux et dates ci-dessous sont fictifs.

   Tant que supabase.url est vide, le site tourne en démonstration :
   contenu fictif, et rien n'est envoyé. Voir docs/installation.md.
   ============================================================ */
window.MARIAGE = {

  /* Prénoms, dans l'ordre d'affichage. */
  maries: ["Camille", "Antonin"],

  /* Page d'accueil des invités (index.html). */
  phrase: "ont la joie de vous inviter à leur mariage",
  date: "Samedi 12 juin 2027",
  photoCouple: "couple.svg",          // image carrée de préférence ; "" pour ne rien afficher

  /* Un à trois temps forts. Icônes : eglise, mairie, verres, repas, coeur. */
  moments: [
    { icone: "eglise", titre: "Cérémonie", lignes: ["à 15h00", "à l'église de Saint-Aubrin"] },
    { icone: "verres", titre: "Vin d'honneur", lignes: ["après la cérémonie", "au domaine des Tilleuls", "à Valmont-sur-Brume"] }
  ],

  /* Encadré qui explique aux invités ce que deviennent leurs envois. */
  encart: {
    titre: "Vos photos et vidéos",
    lignes: [
      "Ce que vous déposez ici sera projeté pendant la soirée.",
      "Seuls les organisateurs y ont accès : les autres invités ne voient pas vos envois."
    ]
  },

  /* Adresse rappelée sur l'écran de projection pour retrouver la page de dépôt.
     Laissez "" pour afficher l'adresse réelle de la page. */
  adresseSite: "",

  /* Programme des témoins (programme.html) : jours affichés, au format AAAA-MM-JJ. */
  programme: {
    premierJour: "2027-06-10",
    dernierJour: "2027-06-14",
    jourPrincipal: "2027-06-12"       // jour ouvert par défaut en dehors de ces dates
  },

  /* Branchement Supabase (Project Settings > API). La clé « anon / publishable »
     est faite pour être publique. Ne collez jamais ici la clé « service_role ». */
  supabase: {
    url: "",                          // ex. "https://abcdefghijklmnop.supabase.co"
    cle: "",
    bucket: "mariage"
  }
};
