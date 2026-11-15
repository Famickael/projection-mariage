/* Mode démonstration : utilisé seulement tant que supabase.url est vide dans donnees.js.
   Fournit un faux client Supabase, limité à ce que les pages utilisent, avec des données fictives
   gardées en mémoire : rien n'est envoyé, et tout revient à l'état initial au rechargement. */
(function () {
  if (!window.MARIAGE) window.DONNEES_ILLISIBLES = true;   // lu par verifier.js
  var M = window.MARIAGE = window.MARIAGE || {};
  M.supabase = M.supabase || {};
  if (M.supabase.url) return;

  function iso(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  var J = M.programme || {}, jour = J.jourPrincipal || J.premierJour || iso(new Date()), veille = J.premierJour || jour;
  function heure(h) { return jour + 'T' + h + ':00+00:00'; }
  function img(n) { return 'demo/photo-0' + n + '.svg'; }
  var compteur = 0;
  function id() { return 'demo-' + (++compteur); }
  function fichier(envoi, n, mot, h) {
    return { id: id(), created_at: heure(h), envoi_id: envoi, chemin: img(n), nom_original: 'photo-0' + n + '.svg', taille: 4096, type_mime: 'image/svg+xml', message: mot, visible: true };
  }
  var tables = {
    envois: [
      { id: 'e1', created_at: heure('16:10'), invite_nom: 'Maëlle et Octave', message: 'Tous nos vœux de bonheur !', appareil: 'mobile', nb_fichiers: 3, visible: true },
      { id: 'e2', created_at: heure('17:45'), invite_nom: 'Tante Albane', message: null, appareil: 'ordinateur', nb_fichiers: 3, visible: true },
      { id: 'e3', created_at: heure('19:20'), invite_nom: 'Les cousins de Brumeval', message: null, appareil: 'mobile', nb_fichiers: 2, visible: true }
    ],
    fichiers: [
      fichier('e1', 1, 'La sortie de l\'église', '16:10'), fichier('e1', 2, null, '16:11'), fichier('e1', 3, 'Le bouquet !', '16:12'),
      fichier('e2', 4, 'À votre santé', '17:45'), fichier('e2', 5, null, '17:46'), fichier('e2', 6, 'La pièce montée', '17:47'),
      fichier('e3', 7, 'Ouverture du bal', '19:20'), fichier('e3', 8, null, '19:21')
    ],
    programme: [
      ['Installation de la salle', veille, '14:00', 180, 'moment', false, null, 'Tables, nappes, centres de table.'],
      ['Préparatifs', jour, '09:00', 300, 'phase', false, 'gris', null],
      ['Coiffure et maquillage', jour, '09:30', 120, 'moment', false, null, null],
      ['Récupérer les fleurs', jour, '11:00', 45, 'moment', false, null, 'Chez le fleuriste, avant midi.'],
      ['Cérémonie', jour, '15:00', 60, 'phase', true, 'bordeaux', null],
      ['Sortie des mariés', jour, '16:00', 15, 'moment', true, null, 'Pétales distribués à l\'entrée.'],
      ['Vin d\'honneur', jour, '16:30', 150, 'phase', false, 'petale', null],
      ['Photo de groupe', jour, '17:00', 30, 'moment', false, null, null],
      ['Dîner', jour, '19:30', 210, 'phase', false, 'feuille', null],
      ['Discours des témoins', jour, '20:15', 20, 'moment', false, null, 'Surprise : diaporama prêt sur la clé.'],
      ['Projection des souvenirs', jour, '21:00', 30, 'moment', false, null, null],
      ['Ouverture du bal', jour, '23:00', 15, 'moment', true, null, null]
    ].map(function (p) { return { id: id(), created_at: heure('08:00'), titre: p[0], jour: p[1], debut: p[2] + ':00', duree: p[3], type: p[4], verrouille: p[5], couleur: p[6], description: p[7] }; })
  };

  function Requete(table) { this.t = table; this.op = 'select'; this.filtres = []; this.tris = []; this.cols = '*'; }
  Requete.prototype = {
    select: function (c) { this.cols = c || '*'; return this; },
    insert: function (v) { this.op = 'insert'; this.v = v; return this; },
    update: function (v) { this.op = 'update'; this.v = v; return this; },
    delete: function () { this.op = 'delete'; return this; },
    eq: function (c, v) { this.filtres.push([c, v]); return this; },
    order: function (c, o) { this.tris.push([c, !o || o.ascending !== false]); return this; },
    limit: function () { return this; },
    then: function (ok, ko) { return Promise.resolve(this.executer()).then(ok, ko); },
    executer: function () {
      var lignes = tables[this.t], f = this.filtres;
      function garde(l) { return f.every(function (x) { return l[x[0]] === x[1]; }); }
      if (this.op === 'insert') {
        [].concat(this.v).forEach(function (l) {
          var n = Object.assign({ id: id(), created_at: new Date().toISOString(), visible: true }, l);
          if (n.debut && n.debut.length === 5) n.debut += ':00';
          lignes.push(n);
        });
        return { data: null, error: null };
      }
      if (this.op === 'update') { var v = this.v; lignes.filter(garde).forEach(function (l) { Object.assign(l, v); if (l.debut && l.debut.length === 5) l.debut += ':00'; }); return { data: null, error: null }; }
      if (this.op === 'delete') {
        var suppr = lignes.filter(garde);
        tables[this.t] = lignes.filter(function (l) { return !garde(l); });
        if (this.t === 'envois') tables.fichiers = tables.fichiers.filter(function (x) { return !suppr.some(function (e) { return e.id === x.envoi_id; }); });
        return { data: null, error: null };
      }
      var res = lignes.filter(garde).map(function (l) { return Object.assign({}, l); });
      this.tris.slice().reverse().forEach(function (t) {
        res.sort(function (a, b) { return (a[t[0]] < b[t[0]] ? -1 : a[t[0]] > b[t[0]] ? 1 : 0) * (t[1] ? 1 : -1); });
      });
      if (this.t === 'envois' && this.cols.indexOf('fichiers') >= 0) res.forEach(function (e) {
        e.fichiers = tables.fichiers.filter(function (x) { return x.envoi_id === e.id; }).map(function (x) { return Object.assign({}, x); });
      });
      return { data: res, error: null };
    }
  };

  window.clientDemo = function () {
    return {
      from: function (t) { return new Requete(t); },
      auth: {
        getSession: function () { return Promise.resolve({ data: { session: { demo: true } } }); },
        signInWithPassword: function () { return Promise.resolve({ error: null }); },
        signOut: function () { return Promise.resolve({ error: null }); }
      },
      storage: { from: function () { return {
        createSignedUrls: function (chemins) { return Promise.resolve({ data: chemins.map(function (c) { return { signedUrl: c }; }), error: null }); },
        createSignedUrl: function (c, d, options) { return Promise.resolve(options && options.transform ? { data: null, error: null } : { data: { signedUrl: c }, error: null }); },
        remove: function () { return Promise.resolve({ error: null }); },
        download: function (c) { return fetch(c).then(function (r) { return r.blob(); }).then(function (b) { return { data: b, error: null }; }, function (e) { return { data: null, error: e }; }); }
      }; } }
    };
  };

  /* Bandeau de démonstration, avec un lien vers chacune des 4 pages. */
  document.addEventListener('DOMContentLoaded', function () {
    var pages = [['index.html', 'Dépôt'], ['admin.html', 'Administration'], ['projection.html', 'Projection'], ['programme.html', 'Programme']];
    var ici = location.pathname.split('/').pop() || 'index.html';
    var b = document.createElement('nav');
    b.id = 'bandeau-demo';
    b.setAttribute('aria-label', 'Pages de la démonstration');
    b.style.cssText = 'position:fixed;left:0;right:0;top:0;z-index:50;background:#2a2426;color:#f3efe7;font:13px/1.4 system-ui,sans-serif;padding:6px 10px;text-align:center;display:flex;flex-wrap:wrap;gap:4px 14px;justify-content:center';
    /* Sur la projection, le bandeau se range dans un coin pour ne recouvrir ni l'aide ni les photos. */
    if (ici === 'projection.html') b.style.cssText += ';top:auto;right:auto;bottom:0;max-width:46vw;justify-content:flex-start;opacity:.85;font-size:12px';
    var t = document.createElement('span'); t.textContent = 'Démonstration, rien n\'est envoyé :'; t.style.opacity = '.75'; b.appendChild(t);
    pages.forEach(function (p) {
      var a = document.createElement('a'); a.href = p[0]; a.textContent = p[1];
      a.style.cssText = 'color:#f3efe7;text-decoration:' + (p[0] === ici ? 'none;font-weight:700' : 'underline');
      if (p[0] === ici) a.setAttribute('aria-current', 'page');
      b.appendChild(a);
    });
    document.body.appendChild(b);
    if (ici !== 'projection.html') document.body.style.paddingTop = b.offsetHeight + 'px';
  });
})();
