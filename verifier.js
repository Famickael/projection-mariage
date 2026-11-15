/* Vérification de donnees.js : ajoutez ?verifier à l'adresse de index.html.
   Un encadré liste les incohérences du fichier, ou confirme qu'il n'y en a pas. */
(function () {
  if (!/[?&]verifier\b/.test(location.search)) return;
  var M = window.MARIAGE, pb = [], illisible = !M || !!window.DONNEES_ILLISIBLES;
  M = M || {};
  var ICONES = ['eglise', 'mairie', 'verres', 'repas', 'coeur'];
  var DATE = /^\d{4}-\d{2}-\d{2}$/;
  function estDate(v) { return typeof v === 'string' && DATE.test(v) && !isNaN(new Date(v + 'T12:00').getTime()); }

  if (!Array.isArray(M.maries) || !M.maries.length || M.maries.some(function (p) { return typeof p !== 'string' || !p.trim(); })) pb.push('maries : une liste de prénoms non vides est attendue.');
  if (M.moments && !Array.isArray(M.moments)) pb.push('moments : une liste est attendue.');
  (Array.isArray(M.moments) ? M.moments : []).forEach(function (m, i) {
    if (!m || typeof m !== 'object') { pb.push('moments, n° ' + (i + 1) + ' : un objet { icone, titre, lignes } est attendu.'); return; }
    if (!m.titre) pb.push('moments, n° ' + (i + 1) + ' : le titre manque.');
    if (m.icone && ICONES.indexOf(m.icone) < 0) pb.push('moments, n° ' + (i + 1) + ' : icône « ' + m.icone + ' » inconnue. Icônes disponibles : ' + ICONES.join(', ') + '.');
    if (m.lignes && !Array.isArray(m.lignes)) pb.push('moments, n° ' + (i + 1) + ' : lignes doit être une liste.');
  });
  if (Array.isArray(M.moments) && M.moments.length > 3) pb.push('moments : au-delà de 3 temps forts, l\'accueil devient chargé sur téléphone.');
  if (!M.encart || !M.encart.titre || !Array.isArray(M.encart.lignes)) pb.push('encart : un titre et une liste de lignes sont attendus.');

  var P = M.programme || {};
  ['premierJour', 'dernierJour', 'jourPrincipal'].forEach(function (c) { if (!estDate(P[c])) pb.push('programme.' + c + ' : une date au format AAAA-MM-JJ est attendue.'); });
  if (estDate(P.premierJour) && estDate(P.dernierJour)) {
    if (P.premierJour > P.dernierJour) pb.push('programme : premierJour est après dernierJour.');
    if ((new Date(P.dernierJour) - new Date(P.premierJour)) / 86400000 >= 14) pb.push('programme : seuls les 14 premiers jours sont affichés.');
    if (estDate(P.jourPrincipal) && (P.jourPrincipal < P.premierJour || P.jourPrincipal > P.dernierJour)) pb.push('programme.jourPrincipal : la date est en dehors de la période.');
  }

  var S = M.supabase || {};
  if (!M.supabase) pb.push('supabase : la rubrique manque.');
  if (S.url && !/^https:\/\/[^/]+$/.test(S.url)) pb.push('supabase.url : une adresse du type https://xxxx.supabase.co est attendue, sans barre finale.');
  if (!!S.url !== !!S.cle) pb.push('supabase : url et cle se renseignent ensemble.');
  if (S.cle && /service_role/.test((function () { try { return atob(S.cle.split('.')[1] || ''); } catch (e) { return ''; } })())) pb.push('supabase.cle : c\'est une clé service_role. Retirez-la tout de suite et remplacez-la par la clé publique.');
  if (/^sb_secret_/.test(S.cle || '')) pb.push('supabase.cle : c\'est une clé secrète. Retirez-la tout de suite et remplacez-la par la clé publique.');
  if (S.url && !S.bucket) pb.push('supabase.bucket : le nom de l\'espace de stockage manque.');

  document.addEventListener('DOMContentLoaded', function () {
    var b = document.createElement('div');
    b.id = 'verification';
    b.setAttribute('role', 'status');
    b.style.cssText = 'position:relative;z-index:60;margin:12px auto;max-width:600px;padding:12px 16px;font:15px/1.45 system-ui,sans-serif;background:#fff;color:#2a2426;border:2px solid ' + (pb.length ? '#9a2e3c' : '#4d7a4b');
    var h = document.createElement('strong');
    if (illisible) pb = ['Le fichier n\'a pas pu être lu : il manque, ou il contient une erreur de syntaxe (virgule, guillemet ou accolade). Le détail est dans la console du navigateur.'];
    h.textContent = illisible ? 'donnees.js : fichier illisible' : pb.length ? 'donnees.js : ' + pb.length + ' point(s) à corriger' : 'donnees.js : aucune incohérence détectée' + (S.url ? '' : ' (mode démonstration)');
    b.appendChild(h);
    if (pb.length) { var ul = document.createElement('ul'); ul.style.margin = '6px 0 0'; pb.forEach(function (p) { var li = document.createElement('li'); li.textContent = p; ul.appendChild(li); }); b.appendChild(ul); }
    document.body.insertBefore(b, document.body.firstChild);
  });
})();
