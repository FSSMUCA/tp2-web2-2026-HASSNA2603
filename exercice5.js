let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (let i = 0; i < nombres.length; i++) {
    let valeur = nombres[i];
    let resultat = "";
    if (Number.isNaN(valeur)) {
        resultat = "INVALIDE";
    }
    else if (valeur === Infinity || valeur === -Infinity) {
        resultat = "INFINI";
    }
    else if (valeur === 0 && 1 / valeur === -Infinity) {
        resultat = "ZERO NEGATIF";
    }
    else if (Number.isInteger(valeur)) {
        if (valeur >= Number.MIN_SAFE_INTEGER && valeur <= Number.MAX_SAFE_INTEGER) {
            resultat = "ENTIER SUR";
        } else {
            resultat = "ENTIER HORS LIMITES";
        }
    }

    else {
        resultat = "DECIMAL";
    }
    
    console.log(valeur, "->", resultat);
}

