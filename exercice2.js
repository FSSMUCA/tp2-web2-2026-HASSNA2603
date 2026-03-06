let valeurs = [0,1,"","0",null, undefined, NaN, false, [], {}];
for (let i = 0 ; i < 10 ; i++) {
    let valeur = valeurs[i] ;
    let valeurString;
    if (valeur !=="" ){
        valeurString = String(valeur);
    }
    else{
        valeurString = "(chaine vide)";
    }

    if (valeur){
        console.log(valeurString + "-> truthy")
    }
    else {
        console.log(valeurString + "-> falsy ")
    }


}