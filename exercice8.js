let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");
let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
let ageCorrige = parseInt(age, 10);
if (isNaN(ageCorrige) || ageCorrige <= 0) {
    ageCorrige = "invalide";
}
console.log(`age              : ${ageCorrige} (valide)`);
let emailStatut = "valide";
if (!email.includes("@")) {
    emailStatut = "invalide";
} else if (email.indexOf(".") <= email.indexOf("@") + 1) {
    emailStatut = "invalide";
}

if (emailStatut === "valide") {
    console.log(`email            : "${email}" (${emailStatut})`);
} else {
    console.log(`email            : "${email}" (${emailStatut} : pas de point aprés @ )`);
}
let scoreCorrige = parseInt(scoreJeu);
if (isNaN(scoreCorrige)) {
    scoreCorrige = 0;
}
console.log(`scoreJeu         : ${scoreCorrige} (extrait depuis "${scoreJeu}")`);
let estAdminCorrige = estAdmin === "true" ? true : false;
console.log(`estAdmin         : ${estAdminCorrige} (attention : Boolean("false") = true, conversion manuelle requise)`);
let derniereConnexionCorrigee = derniereConnexion ?? "Jamais connecté";
console.log(`derniereConnexion: "${derniereConnexionCorrigee}" (valeur par défaut via ??)`);
let nombreConnexionsCorrige = parseInt(nombreConnexions);
let resultatConnexions;
if (nombreConnexionsCorrige === 0) {
    resultatConnexions = "Aucune connexion";
} else {
    resultatConnexions = nombreConnexionsCorrige;
}
console.log(`nombreConnexions : "${resultatConnexions}" (${nombreConnexions} après conversion)`);

console.log("================================");